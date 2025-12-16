import { Pool, QueryResult, Client } from 'pg'

// Configuration de la connexion PostgreSQL
const getDatabaseConfig = () => {
  // Option 1: URL complète Vercel Postgres (priorité)
  if (process.env.POSTGRES_URL) {
    return { 
      connectionString: process.env.POSTGRES_URL,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
    }
  }

  // Option 2: URL complète standard (Docker, autres hébergeurs)
  if (process.env.DATABASE_URL) {
    return { 
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
    }
  }

  // Option 3: Variables séparées (pour plus de flexibilité)
  // Dans Docker, utiliser le nom du service 'postgres', sinon 'localhost' pour développement local
  const host = process.env.DB_HOST || process.env.POSTGRES_HOST || (process.env.NODE_ENV === 'production' ? 'postgres' : 'localhost')
  const port = parseInt(process.env.DB_PORT || process.env.POSTGRES_PORT || '5432', 10)
  const database = process.env.DB_NAME || process.env.POSTGRES_DATABASE || 'yunicity_db'
  const user = process.env.DB_USER || process.env.POSTGRES_USER || 'yunicity'
  const password = process.env.DB_PASSWORD || process.env.POSTGRES_PASSWORD || 'yunicity123'

  // En développement, si le mot de passe est vide ou non défini, ne pas l'envoyer
  // (utile si pg_hba.conf utilise 'trust')
  const config: any = {
    host,
    port,
    database,
    user,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  }
  
  // Ne pas envoyer de mot de passe vide (PostgreSQL le rejette même avec trust)
  if (password && password.trim() !== '') {
    config.password = password
  }
  
  return config
}

// Pool de connexions PostgreSQL (créé dynamiquement)
let pool: Pool | null = null

// Fonction pour obtenir la configuration (toujours relire les variables d'env)
const getPoolConfig = () => {
  const dbConfig = getDatabaseConfig()
  
  // Debug en développement (masquer le mot de passe)
  if (process.env.NODE_ENV === 'development') {
    if ('connectionString' in dbConfig) {
      const debugUrl = dbConfig.connectionString.replace(/:[^:@]+@/, ':****@')
      console.log('🔗 Connexion PostgreSQL (URL):', debugUrl)
    } else {
      // Vérifier que les variables d'environnement sont bien lues
      const actualPassword = process.env.DB_PASSWORD || 'yunicity123'
      console.log('🔗 Connexion PostgreSQL:', {
        host: dbConfig.host,
        port: dbConfig.port,
        database: dbConfig.database,
        user: dbConfig.user,
        passwordLength: actualPassword.length,
        passwordStartsWith: actualPassword.substring(0, 3) + '...',
        passwordEndsWith: '...' + actualPassword.substring(actualPassword.length - 3),
        passwordExact: JSON.stringify(actualPassword), // Afficher le mot de passe exact avec échappement JSON
        envDBPassword: process.env.DB_PASSWORD ? '✅ Défini' : '❌ Non défini (utilise défaut)'
      })
    }
  }
  
  return dbConfig
}

// Fonction pour obtenir ou créer le pool (toujours utiliser les dernières variables d'env)
const getPool = (): Pool => {
  // Toujours recréer le pool pour utiliser les dernières variables d'env
  // (solution temporaire pour déboguer)
  if (pool) {
    pool.end().catch(() => {}) // Fermer l'ancien pool
  }
  
  const dbConfig = getPoolConfig() // Toujours relire la config
  pool = new Pool({
    ...dbConfig,
    max: 10,
    min: 0,
    idleTimeoutMillis: 10000,
    connectionTimeoutMillis: 10000,
    allowExitOnIdle: true,
  })
  
  // Configurer les event listeners
  pool.on('error', (err) => {
    console.error('❌ Erreur PostgreSQL inattendue:', err)
  })
  
  pool.on('connect', () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('✅ Nouvelle connexion PostgreSQL établie')
    }
  })
  
  pool.on('remove', () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('ℹ️ Connexion PostgreSQL fermée')
    }
  })
  
  return pool
}

// Fonction pour recréer le pool (en cas d'erreur d'authentification)
const recreatePool = async (): Promise<Pool> => {
  if (pool) {
    try {
      await pool.end() // Fermer proprement l'ancien pool
      console.log('✅ Ancien pool PostgreSQL fermé')
    } catch (err) {
      console.warn('⚠️ Erreur lors de la fermeture du pool:', err)
    }
  }
  pool = null // Réinitialiser
  // Attendre un peu pour que les connexions se ferment complètement
  await new Promise(resolve => setTimeout(resolve, 200))
  const newPool = getPool() // Recréer avec les nouvelles variables
  console.log('✅ Nouveau pool PostgreSQL créé')
  return newPool
}

// Initialiser le pool au chargement du module (lazy loading)
// Le pool sera créé à la première utilisation via getPool()

// Types pour les tables
export interface NewsletterSubscriber {
  id?: string
  email: string
  name: string
  interests: string[]
  created_at?: string
  status?: 'active' | 'unsubscribed'
}

export interface ContactMessage {
  id?: string
  name: string
  email: string
  company?: string
  phone?: string
  subject: string
  message: string
  type: 'general' | 'investor' | 'partnership' | 'press'
  created_at?: string
  status?: 'new' | 'read' | 'replied'
}

/**
 * Teste la connexion à la base de données
 */
export async function testConnection(): Promise<boolean> {
  try {
    // Recréer le pool pour forcer une nouvelle connexion
    const testPool = createPool()
    const result = await testPool.query('SELECT NOW()')
    console.log('✅ Connexion PostgreSQL réussie:', result.rows[0].now)
    return true
  } catch (error) {
    console.error('❌ Erreur de connexion PostgreSQL:', error)
    return false
  }
}

/**
 * Ajoute un abonné à la newsletter
 */
export async function addNewsletterSubscriber(data: NewsletterSubscriber): Promise<NewsletterSubscriber> {
  const query = `
    INSERT INTO newsletter_subscribers (email, name, interests, status)
    VALUES ($1, $2, $3, $4)
    RETURNING id, email, name, interests, status, created_at, updated_at
  `
  
  const values = [
    data.email,
    data.name,
    data.interests || [], // PostgreSQL supporte nativement les arrays TEXT[]
    data.status || 'active'
  ]

  // Retry logic pour gérer les erreurs de connexion temporaires
  let lastError: any = null
  const maxRetries = 3
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    let client: Client | null = null
    try {
      // En cas d'erreur d'authentification, tester avec une connexion directe (sans pool)
      if (attempt > 1 && lastError?.code === '28P01') {
        console.log('🔄 Tentative avec connexion directe (sans pool)...')
        const dbConfig = getPoolConfig()
        client = new Client(dbConfig)
        await client.connect()
        console.log('✅ Connexion directe établie')
        const result = await client.query(query, values)
        
        if (result.rows.length === 0) {
          throw new Error('Aucune ligne retournée après insertion')
        }

        const row = result.rows[0]
        await client.end()
        return {
          ...row,
          interests: Array.isArray(row.interests) ? row.interests : []
        }
      }
      
      // Utiliser le pool pour les tentatives normales
      const currentPool = attempt === 1 ? getPool() : await recreatePool()
      const result: QueryResult<NewsletterSubscriber> = await currentPool.query(query, values)
      
      if (result.rows.length === 0) {
        throw new Error('Aucune ligne retournée après insertion')
      }

      const row = result.rows[0]
      // PostgreSQL retourne déjà un tableau JavaScript pour les arrays
      return {
        ...row,
        interests: Array.isArray(row.interests) ? row.interests : []
      }
    } catch (error: any) {
      // Fermer le client s'il a été créé
      if (client) {
        await client.end().catch(() => {})
      }
      
      lastError = error
      
      // Erreur de contrainte unique (email déjà existant) - ne pas réessayer
      if (error.code === '23505') {
        const duplicateError = new Error('Cet email est déjà inscrit')
        ;(duplicateError as any).code = '23505'
        throw duplicateError
      }
      
      // Erreurs de connexion - réessayer
      if (
        error.code === 'ECONNRESET' || 
        error.code === 'ECONNREFUSED' || 
        error.code === 'ETIMEDOUT' ||
        error.code === '28P01' || // Erreur d'authentification
        error.message?.includes('connection') ||
        error.message?.includes('authentification')
      ) {
        if (attempt < maxRetries) {
          const delay = attempt * 500 // 500ms, 1000ms, 1500ms
          console.warn(`⚠️ Erreur de connexion (tentative ${attempt}/${maxRetries}), réessai dans ${delay}ms...`)
          await new Promise(resolve => setTimeout(resolve, delay))
          continue
        }
      }
      
      // Autres erreurs - ne pas réessayer
      throw error
    }
  }
  
  // Si on arrive ici, toutes les tentatives ont échoué
  throw lastError
}

/**
 * Ajoute un message de contact
 */
export async function addContactMessage(data: ContactMessage): Promise<ContactMessage> {
  const query = `
    INSERT INTO contact_messages (name, email, company, phone, subject, message, type, status)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING id, name, email, company, phone, subject, message, type, status, created_at, updated_at
  `
  
  const values = [
    data.name,
    data.email,
    data.company || null,
    data.phone || null,
    data.subject,
    data.message,
    data.type,
    data.status || 'new'
  ]

  try {
    const currentPool = getPool()
    const result: QueryResult<ContactMessage> = await currentPool.query(query, values)
    
    if (result.rows.length === 0) {
      throw new Error('Aucune ligne retournée après insertion')
    }

    return result.rows[0]
  } catch (error) {
    throw error
  }
}

/**
 * Récupère le nombre d'abonnés actifs à la newsletter
 */
export async function getNewsletterCount(): Promise<number> {
  const query = `
    SELECT COUNT(*) as count
    FROM newsletter_subscribers
    WHERE status = 'active'
  `

  try {
    const currentPool = getPool()
    const result = await currentPool.query(query)
    return parseInt(result.rows[0].count, 10) || 0
  } catch (error) {
    console.error('Erreur lors du comptage des abonnés:', error)
    return 0
  }
}

/**
 * Récupère tous les abonnés (pour admin)
 */
export async function getAllNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
  const query = `
    SELECT id, email, name, interests, status, created_at, updated_at
    FROM newsletter_subscribers
    ORDER BY created_at DESC
  `

  try {
    const currentPool = getPool()
    const result: QueryResult<NewsletterSubscriber> = await currentPool.query(query)
    return result.rows.map(row => ({
      ...row,
      interests: Array.isArray(row.interests) ? row.interests : []
    }))
  } catch (error) {
    console.error('Erreur lors de la récupération des abonnés:', error)
    throw error
  }
}

/**
 * Ferme proprement le pool de connexions
 */
export async function closePool(): Promise<void> {
  const currentPool = getPool()
  await currentPool.end()
  pool = null
}

// Export du pool pour utilisation avancée si nécessaire
export { getPool as pool }

