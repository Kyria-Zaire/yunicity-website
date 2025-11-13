# 🚀 Quick Start - Configuration Supabase

## ⚡ Étapes Rapides

### 1. Exécuter le Script SQL

1. Ouvrir [Supabase Dashboard](https://supabase.com/dashboard)
2. Sélectionner votre projet
3. **SQL Editor** → **New Query**
4. Copier-coller le contenu de `supabase_setup.sql`
5. **Run** (ou `Ctrl+Enter`)
6. ✅ Vérifier "Success. No rows returned"

### 2. Vérifier les Tables

1. **Table Editor** → Vérifier que `newsletter_subscribers` existe
2. **Table Editor** → Vérifier que `contact_messages` existe

### 3. Tester Localement

```bash
npm run dev
```

1. Aller sur `http://localhost:3000/newsletter`
2. Remplir le formulaire
3. Vérifier dans Supabase que l'inscription est enregistrée
4. Vérifier la réception de l'email

---

## ✅ C'est tout !

Si tout fonctionne, vous pouvez push en production ! 🎉

