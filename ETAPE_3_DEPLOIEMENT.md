# 🚀 ÉTAPE 3 : Déploiement en Production

## 🎯 Objectif
Déployer Yunicity en production avec une base PostgreSQL hébergée et toutes les fonctionnalités opérationnelles.

---

## 📋 Checklist Pré-Déploiement

Avant de déployer, vérifiez que tout fonctionne en local :
- ✅ Newsletter fonctionne (inscription + email)
- ✅ PostgreSQL fonctionne (Docker)
- ✅ pgAdmin accessible
- ✅ Site Next.js fonctionne sur http://localhost:3002

---

## 🗄️ Étape 3.1 : Choisir une Base PostgreSQL Hébergée

Vous avez plusieurs options pour héberger PostgreSQL en production :

### Option A : Vercel Postgres (Recommandé pour Vercel)
- ✅ Intégration native avec Vercel
- ✅ Gratuit jusqu'à 256 MB
- ✅ Facile à configurer
- 🔗 https://vercel.com/docs/storage/vercel-postgres

### Option B : Supabase (Gratuit jusqu'à 500 MB)
- ✅ PostgreSQL géré
- ✅ Interface graphique incluse
- ✅ API REST automatique
- 🔗 https://supabase.com

### Option C : Railway (Gratuit avec crédits)
- ✅ PostgreSQL géré
- ✅ Simple à configurer
- 🔗 https://railway.app

### Option D : Neon (Gratuit jusqu'à 0.5 GB)
- ✅ PostgreSQL serverless
- ✅ Très performant
- 🔗 https://neon.tech

### Option E : Render (Gratuit avec limitations)
- ✅ PostgreSQL géré
- 🔗 https://render.com

**💡 Recommandation :** Si vous déployez sur Vercel, utilisez **Vercel Postgres** pour la simplicité.

---

## 🔧 Étape 3.2 : Créer la Base PostgreSQL (Exemple avec Vercel Postgres)

### Si vous choisissez Vercel Postgres :

1. **Aller sur** https://vercel.com/dashboard
2. **Sélectionner** votre projet (ou créer un nouveau projet)
3. **Aller dans** "Storage" → "Create Database"
4. **Choisir** "Postgres"
5. **Nommer** : `yunicity-postgres` (ou un nom de votre choix)
6. **Région** : Choisir la plus proche (ex: `fra1` pour Francfort)
7. **Cliquer sur** "Create"

### Récupérer les informations de connexion :

1. **Dans Vercel**, aller dans "Storage" → Votre base Postgres
2. **Onglet** ".env.local" ou "Connection String"
3. **Copier** les variables d'environnement :
   ```
   POSTGRES_URL=postgresql://...
   POSTGRES_PRISMA_URL=postgresql://...
   POSTGRES_URL_NON_POOLING=postgresql://...
   POSTGRES_USER=...
   POSTGRES_HOST=...
   POSTGRES_PASSWORD=...
   POSTGRES_DATABASE=...
   ```

### Créer les tables dans la base de production :

Vous devez exécuter le script `docker/init.sql` sur votre base de production.

**Option 1 : Via pgAdmin (si disponible)**
- Se connecter à votre base PostgreSQL hébergée
- Exécuter le contenu de `docker/init.sql`

**Option 2 : Via psql (ligne de commande)**
```bash
# Installer psql si nécessaire
# Windows : Télécharger depuis https://www.postgresql.org/download/windows/

# Se connecter
psql "postgresql://user:password@host:port/database"

# Exécuter le script
\i docker/init.sql
```

**Option 3 : Via l'interface de votre hébergeur**
- Vercel Postgres : Utiliser l'éditeur SQL dans le dashboard
- Supabase : Utiliser l'éditeur SQL dans le dashboard
- Railway : Utiliser l'éditeur SQL ou psql

---

## 🌐 Étape 3.3 : Configurer Vercel pour le Déploiement

### 3.3.1 : Variables d'Environnement sur Vercel

1. **Aller sur** https://vercel.com/dashboard
2. **Sélectionner** votre projet
3. **Aller dans** "Settings" → "Environment Variables"
4. **Ajouter** les variables suivantes :

#### Variables de Base de Données (Vercel Postgres)
```
POSTGRES_URL=postgresql://... (depuis Vercel Postgres)
POSTGRES_PRISMA_URL=postgresql://... (depuis Vercel Postgres)
POSTGRES_URL_NON_POOLING=postgresql://... (depuis Vercel Postgres)
POSTGRES_USER=... (depuis Vercel Postgres)
POSTGRES_HOST=... (depuis Vercel Postgres)
POSTGRES_PASSWORD=... (depuis Vercel Postgres)
POSTGRES_DATABASE=... (depuis Vercel Postgres)
```

**OU** si vous utilisez des variables séparées (comme en local) :
```
DB_HOST=votre-host-postgres
DB_PORT=5432
DB_NAME=votre-database
DB_USER=votre-user
DB_PASSWORD=votre-password
```

#### Variables Resend
```
RESEND_API_KEY=re_votre_clé_resend_ici
```

#### Variables Next.js
```
NEXT_PUBLIC_SITE_URL=https://votre-domaine.vercel.app
NODE_ENV=production
```

### 3.3.2 : Adapter le Code pour Vercel Postgres

Si vous utilisez Vercel Postgres, vous pouvez utiliser `POSTGRES_URL` directement.

**Modifier `src/lib/db.ts`** pour supporter les deux formats :

```typescript
const getDatabaseConfig = () => {
  // Option 1: URL complète (Vercel Postgres)
  if (process.env.POSTGRES_URL) {
    return { connectionString: process.env.POSTGRES_URL }
  }
  
  // Option 2: URL complète (format standard)
  if (process.env.DATABASE_URL) {
    return { connectionString: process.env.DATABASE_URL }
  }

  // Option 3: Variables séparées (Docker local ou autres hébergeurs)
  const host = process.env.DB_HOST || process.env.POSTGRES_HOST || 'localhost'
  const port = parseInt(process.env.DB_PORT || process.env.POSTGRES_PORT || '5432', 10)
  const database = process.env.DB_NAME || process.env.POSTGRES_DATABASE || 'yunicity_db'
  const user = process.env.DB_USER || process.env.POSTGRES_USER || 'yunicity'
  const password = process.env.DB_PASSWORD || process.env.POSTGRES_PASSWORD || 'yunicity123'

  return {
    host,
    port,
    database,
    user,
    password: password || undefined,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
  }
}
```

---

## 📧 Étape 3.4 : Configurer Resend pour la Production

### 3.4.1 : Vérifier le Domaine (Optionnel mais Recommandé)

Pour envoyer à n'importe quelle adresse email (pas seulement votre email de test) :

1. **Aller sur** https://resend.com/domains
2. **Cliquer sur** "Add Domain"
3. **Entrer** votre domaine (ex: `yunicity.fr`)
4. **Ajouter les enregistrements DNS** demandés dans votre registrar
5. **Attendre** la vérification (quelques minutes)

### 3.4.2 : Mettre à Jour l'Email d'Envoi

**Modifier `src/lib/email.ts`** :

```typescript
from: 'YUNICITY <noreply@yunicity.fr>', // Votre domaine vérifié
// OU garder pour l'instant :
from: 'YUNICITY <onboarding@resend.dev>', // Domaine de test Resend
```

---

## 🚀 Étape 3.5 : Déployer sur Vercel

### 3.5.1 : Préparer le Code

1. **Vérifier** que tous les fichiers sont commités :
   ```bash
   git status
   git add .
   git commit -m "feat: Prêt pour production - PostgreSQL + Resend configurés"
   ```

2. **Pousser** sur GitHub :
   ```bash
   git push origin main
   ```

### 3.5.2 : Déployer sur Vercel

**Option A : Via GitHub (Automatique)**
1. **Aller sur** https://vercel.com/new
2. **Importer** votre repository GitHub
3. **Vercel détectera** automatiquement Next.js
4. **Vérifier** que les variables d'environnement sont bien configurées
5. **Cliquer sur** "Deploy"

**Option B : Via Vercel CLI**
```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel --prod
```

### 3.5.3 : Vérifier le Déploiement

1. **Attendre** la fin du build (2-5 minutes)
2. **Ouvrir** l'URL fournie (ex: `https://yunicity-website.vercel.app`)
3. **Tester** l'inscription à la newsletter
4. **Vérifier** les logs dans Vercel Dashboard → "Deployments" → Votre déploiement → "Logs"

---

## ✅ Étape 3.6 : Tests Post-Déploiement

### Checklist de Vérification :

1. **Site accessible** : ✅ Le site charge correctement
2. **Newsletter fonctionne** : ✅ Test d'inscription réussi
3. **Email reçu** : ✅ Email de bienvenue reçu
4. **Base de données** : ✅ L'abonné apparaît dans la base
5. **Pas d'erreurs** : ✅ Aucune erreur dans les logs Vercel

### Tester l'Inscription :

1. **Aller sur** votre site en production
2. **Remplir** le formulaire newsletter avec un email de test
3. **Vérifier** :
   - Message de succès affiché
   - Email de bienvenue reçu
   - Abonné visible dans votre base PostgreSQL

### Vérifier les Logs :

1. **Dans Vercel**, aller dans "Deployments"
2. **Cliquer sur** votre dernier déploiement
3. **Onglet** "Logs"
4. **Vérifier** qu'il n'y a pas d'erreurs PostgreSQL ou Resend

---

## 🔒 Étape 3.7 : Sécurité en Production

### 7.1 : Variables d'Environnement

- ✅ **Ne jamais** commiter `.env.local` dans Git
- ✅ **Vérifier** que `.gitignore` contient `.env.local`
- ✅ **Utiliser** uniquement les variables d'environnement de Vercel

### 7.2 : Rate Limiting (Optionnel mais Recommandé)

Ajouter un rate limiting pour éviter le spam :

**Installer** :
```bash
npm install @upstash/ratelimit @upstash/redis
```

**Créer** `src/lib/ratelimit.ts` :
```typescript
import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "1 h"), // 3 inscriptions par heure
})
```

**Utiliser** dans `src/app/api/newsletter/route.ts` :
```typescript
import { ratelimit } from '@/lib/ratelimit'

export async function POST(request: Request) {
  // Rate limiting
  const ip = request.headers.get("x-forwarded-for") || "unknown"
  const { success } = await ratelimit.limit(ip)
  
  if (!success) {
    return NextResponse.json(
      { error: "Trop de tentatives. Réessayez plus tard." },
      { status: 429 }
    )
  }
  
  // ... reste du code
}
```

### 7.3 : CAPTCHA (Optionnel)

Pour une protection supplémentaire contre les bots, ajouter Google reCAPTCHA ou hCaptcha.

---

## 📊 Étape 3.8 : Monitoring et Maintenance

### 8.1 : Surveiller les Inscriptions

- **pgAdmin** : Se connecter à votre base PostgreSQL pour voir les nouveaux abonnés
- **Vercel Logs** : Surveiller les erreurs
- **Resend Dashboard** : Voir les emails envoyés

### 8.2 : Sauvegardes

- **Vercel Postgres** : Sauvegardes automatiques
- **Exporter** régulièrement les données via pgAdmin ou psql

### 8.3 : Mises à Jour

- **Mettre à jour** les dépendances régulièrement
- **Surveiller** les logs pour les erreurs
- **Tester** après chaque déploiement

---

## 🎯 Résumé des Étapes

1. ✅ Choisir une base PostgreSQL hébergée (Vercel Postgres recommandé)
2. ✅ Créer la base et récupérer les credentials
3. ✅ Créer les tables (exécuter `docker/init.sql`)
4. ✅ Configurer les variables d'environnement sur Vercel
5. ✅ Adapter le code si nécessaire (support Vercel Postgres)
6. ✅ Configurer Resend (vérifier domaine si besoin)
7. ✅ Déployer sur Vercel
8. ✅ Tester l'inscription newsletter
9. ✅ Vérifier les logs et la base de données

---

## 🆘 Dépannage

### Erreur : "Cannot connect to PostgreSQL"
- ✅ Vérifier que les variables d'environnement sont correctes
- ✅ Vérifier que la base est accessible depuis Internet
- ✅ Vérifier les credentials

### Erreur : "Table does not exist"
- ✅ Exécuter `docker/init.sql` sur la base de production
- ✅ Vérifier que les tables sont créées

### Erreur : "Resend API key invalid"
- ✅ Vérifier que `RESEND_API_KEY` est bien configurée sur Vercel
- ✅ Vérifier que la clé est valide dans Resend Dashboard

### Emails non reçus
- ✅ Vérifier les logs Resend dans le dashboard
- ✅ Vérifier les spams
- ✅ En mode test, vérifier que vous envoyez à votre email Resend

---

## ✅ Prochaine Étape

Une fois le déploiement réussi, vous pouvez :
- 🎉 Partager votre site avec les premiers testeurs
- 📊 Surveiller les inscriptions via pgAdmin
- 📧 Voir les emails envoyés dans Resend Dashboard
- 🚀 Continuer à développer de nouvelles fonctionnalités

**Félicitations ! Votre site est en production ! 🎊**

