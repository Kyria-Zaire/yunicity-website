# 🐳 Migration vers Docker + PostgreSQL

## ✅ Ce qui a été fait

1. ✅ Création de `docker-compose.yml` avec PostgreSQL et pgAdmin
2. ✅ Script SQL d'initialisation (`docker/init.sql`)
3. ✅ Nouvelle bibliothèque `src/lib/db.ts` pour remplacer Supabase
4. ✅ Mise à jour des API routes (`newsletter` et `contact`)
5. ✅ Installation du package `pg` pour PostgreSQL
6. ✅ Documentation complète dans `DOCKER_SETUP.md`

## 🚀 Démarrage rapide

### 1. Démarrer Docker

```bash
docker-compose up -d
```

### 2. Créer le fichier `.env.local`

Créez un fichier `.env.local` à la racine avec :

```env
DATABASE_URL=postgresql://yunicity:yunicity_dev_password@localhost:5432/yunicity_db
RESEND_API_KEY=votre_clé_resend
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=development
```

### 3. Lancer l'application

```bash
npm run dev
```

## 📊 Accéder à pgAdmin

- URL : http://localhost:5050
- Email : `admin@yunicity.local`
- Mot de passe : `admin`

## 🔄 Migration depuis Supabase

Les anciennes variables Supabase ne sont plus nécessaires :
- ❌ `NEXT_PUBLIC_SUPABASE_URL`
- ❌ `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Vous pouvez les supprimer de votre `.env.local`.

## 📝 Fichiers modifiés

- `src/lib/db.ts` (nouveau) - Remplace `src/lib/supabase.ts`
- `src/app/api/newsletter/route.ts` - Utilise maintenant PostgreSQL
- `src/app/api/contact/route.ts` - Utilise maintenant PostgreSQL
- `docker-compose.yml` (nouveau)
- `docker/init.sql` (nouveau)

## ⚠️ Note importante

Le fichier `src/lib/supabase.ts` existe toujours mais n'est plus utilisé. Vous pouvez le supprimer si vous voulez, ou le garder pour référence.

## 🐛 Dépannage

Si vous avez des erreurs de connexion :
1. Vérifiez que Docker est démarré : `docker-compose ps`
2. Vérifiez les logs : `docker-compose logs postgres`
3. Vérifiez que `DATABASE_URL` est correct dans `.env.local`

Pour plus de détails, consultez `DOCKER_SETUP.md`.

