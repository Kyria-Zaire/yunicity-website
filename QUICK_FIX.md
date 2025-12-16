# 🔧 Correction rapide - Authentification PostgreSQL

## ✅ Solution appliquée

Le mot de passe PostgreSQL a été simplifié pour éviter les problèmes d'encodage.

## 📝 Mise à jour de `.env.local`

**Mettez à jour votre fichier `.env.local`** avec le nouveau mot de passe :

```env
DB_HOST=127.0.0.1
DB_PORT=5432
DB_NAME=yunicity_db
DB_USER=yunicity
DB_PASSWORD=yunicity123

# Resend Email API
RESEND_API_KEY=votre_clé_resend_ici

# Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Environment
NODE_ENV=development
```

## 🔄 Redémarrage

1. **Arrêtez le serveur Next.js** (Ctrl+C dans le terminal)
2. **Redémarrez** : `npm run dev`
3. **Testez** l'inscription à la newsletter

## ✅ Vérification

Les conteneurs Docker ont été recréés avec le nouveau mot de passe. La base de données est prête !

