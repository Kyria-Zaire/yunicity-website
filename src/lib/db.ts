import { Pool, QueryResult, Client, PoolConfig } from 'pg'

// Interface pour la configuration de la base de données
interface DatabaseConfig extends PoolConfig {
  connectionString?: string
  ssl?: boolean | { rejectUnauthorized: boolean }
  host?: string
  port?: number
  database?: string
  user?: string
  password?: string
}

// Interface pour les erreurs PostgreSQL avec code
interface DatabaseError extends Error {
  code?: string
}

// Configuration de la connexion PostgreSQL
const getDatabaseConfig = (): DatabaseConfig => {
  // Option 1: URL complète (Neon, Vercel Postgres, etc.)
  const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL

  if (connectionString) {
    // Nettoyer l'URL pour enlever channel_binding qui peut causer des problèmes
    const cleanedUrl = connectionString.replace(/&?channel_binding=require/g, '')
    return {
      connectionString: cleanedUrl,
      ssl: { rejectUnauthorized: false }
    }
  }

  // Option 2: Variables séparées (pour plus de flexibilité)
  // Dans Docker, utiliser le nom du service 'postgres', sinon 'localhost' pour développement local
  const host = process.env.DB_HOST || process.env.POSTGRES_HOST || (process.env.NODE_ENV === 'production' ? 'postgres' : 'localhost')
  const port = parseInt(process.env.DB_PORT || process.env.POSTGRES_PORT || '5432', 10)
  const database = process.env.DB_NAME || process.env.POSTGRES_DATABASE || 'yunicity_db'
  const user = process.env.DB_USER || process.env.POSTGRES_USER || 'yunicity'
  const password = process.env.DB_PASSWORD || process.env.POSTGRES_PASSWORD || 'yunicity123'

  // En développement, si le mot de passe est vide ou non défini, ne pas l'envoyer
  // (utile si pg_hba.conf utilise 'trust')
  const config: DatabaseConfig = {
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
  
  pool.on('error', () => {})

  return pool
}

// Fonction pour recréer le pool (en cas d'erreur d'authentification)
const recreatePool = async (): Promise<Pool> => {
  if (pool) {
    try {
      await pool.end()
    } catch {
      // Silently handle pool closure errors
    }
  }
  pool = null
  await new Promise(resolve => setTimeout(resolve, 200))
  const newPool = getPool()
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
    const testPool = getPool()
    await testPool.query('SELECT NOW()')
    return true
  } catch {
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
  let lastError: DatabaseError | null = null
  const maxRetries = 3
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    let client: Client | null = null
    try {
      if (attempt > 1 && lastError?.code === '28P01') {
        const dbConfig = getPoolConfig()
        client = new Client(dbConfig)
        await client.connect()
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
          const delay = attempt * 500
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
  } catch {
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

