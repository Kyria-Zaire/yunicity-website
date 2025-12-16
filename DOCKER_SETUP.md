# 🐳 Configuration Docker pour Yunicity

Ce guide vous explique comment utiliser Docker avec PostgreSQL pour remplacer Supabase.

## 📋 Prérequis

- Docker Desktop installé et démarré
- Node.js et npm installés

## 🚀 Démarrage rapide

### 1. Démarrer les conteneurs Docker

```bash
docker-compose up -d
```

Cette commande va :
- Créer un conteneur PostgreSQL avec la base de données `yunicity_db`
- Créer un conteneur pgAdmin pour gérer la base de données via une interface web
- Initialiser automatiquement les tables via le script `docker/init.sql`

### 2. Configurer les variables d'environnement

Créez un fichier `.env.local` à la racine du projet avec :

```env
# PostgreSQL Database Configuration (Docker)
DATABASE_URL=postgresql://yunicity:yunicity_dev_password@localhost:5432/yunicity_db

# Resend Email API
RESEND_API_KEY=votre_clé_resend_ici

# Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Environment
NODE_ENV=development
```

### 3. Vérifier que tout fonctionne

```bash
# Vérifier que les conteneurs sont démarrés
docker-compose ps

# Voir les logs PostgreSQL
docker-compose logs postgres

# Tester la connexion (optionnel)
npm run dev
```

## 🗄️ Accéder à pgAdmin (Interface de gestion)

1. Ouvrez votre navigateur : http://localhost:5050
2. Connectez-vous avec :
   - **Email** : `admin@yunicity.local`
   - **Mot de passe** : `admin`

3. Ajoutez un serveur PostgreSQL :
   - **Nom** : Yunicity DB
   - **Host** : `postgres` (nom du service Docker)
   - **Port** : `5432`
   - **Database** : `yunicity_db`
   - **Username** : `yunicity`
   - **Password** : `yunicity_dev_password`

## 📊 Structure de la base de données

Les tables suivantes sont créées automatiquement :

### `newsletter_subscribers`
- `id` (UUID) - Identifiant unique
- `email` (VARCHAR) - Email de l'abonné (unique)
- `name` (VARCHAR) - Nom de l'abonné
- `interests` (TEXT[]) - Centres d'intérêt (tableau)
- `status` (VARCHAR) - Statut : 'active' ou 'unsubscribed'
- `created_at` (TIMESTAMP) - Date de création
- `updated_at` (TIMESTAMP) - Date de mise à jour

### `contact_messages`
- `id` (UUID) - Identifiant unique
- `name` (VARCHAR) - Nom du contact
- `email` (VARCHAR) - Email du contact
- `company` (VARCHAR) - Société (optionnel)
- `phone` (VARCHAR) - Téléphone (optionnel)
- `subject` (VARCHAR) - Sujet du message
- `message` (TEXT) - Contenu du message
- `type` (VARCHAR) - Type : 'general', 'investor', 'partnership', 'press'
- `status` (VARCHAR) - Statut : 'new', 'read', 'replied'
- `created_at` (TIMESTAMP) - Date de création
- `updated_at` (TIMESTAMP) - Date de mise à jour

## 🔧 Commandes utiles

```bash
# Démarrer les conteneurs
docker-compose up -d

# Arrêter les conteneurs
docker-compose down

# Voir les logs
docker-compose logs -f postgres

# Redémarrer les conteneurs
docker-compose restart

# Supprimer les conteneurs ET les données (⚠️ attention)
docker-compose down -v

# Accéder au shell PostgreSQL
docker-compose exec postgres psql -U yunicity -d yunicity_db
```

## 🔒 Sécurité

⚠️ **Important pour la production** :

Les identifiants par défaut (`yunicity_dev_password`) sont **uniquement pour le développement local**.

Pour la production, vous devez :
1. Changer les mots de passe dans `docker-compose.yml`
2. Utiliser des variables d'environnement pour les secrets
3. Ne jamais commiter les fichiers `.env.local` ou `.env.production`

## 🐛 Dépannage

### Erreur "connection refused"
- Vérifiez que Docker Desktop est démarré
- Vérifiez que les conteneurs sont lancés : `docker-compose ps`

### Erreur "database does not exist"
- Supprimez les volumes et recréez : `docker-compose down -v && docker-compose up -d`

### Erreur "password authentication failed"
- Vérifiez que les variables d'environnement correspondent à `docker-compose.yml`

### Les tables ne sont pas créées
- Vérifiez les logs : `docker-compose logs postgres`
- Le script `docker/init.sql` devrait s'exécuter automatiquement au premier démarrage

## 📝 Migration depuis Supabase

Si vous aviez des données dans Supabase, vous pouvez les exporter et les importer :

1. Exporter depuis Supabase (via l'interface web)
2. Importer dans PostgreSQL via pgAdmin ou `psql`

## 🚀 Déploiement en production

Pour la production, vous pouvez :
- Utiliser un service PostgreSQL managé (Neon, Railway, Supabase, etc.)
- Utiliser Docker sur un serveur VPS
- Utiliser Kubernetes pour orchestrer les conteneurs

Dans tous les cas, mettez à jour `DATABASE_URL` dans vos variables d'environnement de production.

