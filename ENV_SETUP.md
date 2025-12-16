# 🔧 Configuration des variables d'environnement

## Problème d'authentification PostgreSQL

Si vous rencontrez l'erreur "authentification par mot de passe échouée", utilisez les **variables séparées** au lieu de `DATABASE_URL`.

## Configuration recommandée pour `.env.local`

```env
# Utilisez ces variables séparées (recommandé)
DB_HOST=127.0.0.1
DB_PORT=5432
DB_NAME=yunicity_db
DB_USER=yunicity
DB_PASSWORD=yunicity_dev_password

# OU utilisez l'URL complète (peut causer des problèmes d'encodage)
# DATABASE_URL=postgresql://yunicity:yunicity_dev_password@127.0.0.1:5432/yunicity_db

# Resend Email API
RESEND_API_KEY=votre_clé_resend_ici

# Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Environment
NODE_ENV=development
```

## Pourquoi utiliser 127.0.0.1 au lieu de localhost ?

Sur Windows, `localhost` peut être résolu en IPv6 (::1) ce qui peut causer des problèmes de connexion. Utiliser `127.0.0.1` force l'utilisation d'IPv4.

## Test de la connexion

Après avoir mis à jour `.env.local`, redémarrez le serveur Next.js :

```bash
# Arrêtez le serveur (Ctrl+C)
# Puis relancez
npm run dev
```

