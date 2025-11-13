# 🧪 Guide de Test - Inscription Newsletter

## 📋 Prérequis

1. ✅ Tables Supabase créées (exécuter `supabase_setup.sql`)
2. ✅ Variables d'environnement configurées sur Vercel
3. ✅ Resend configuré (email sender)

---

## 🔧 Étape 1 : Créer les Tables dans Supabase

### Option A : Via SQL Editor (Recommandé)

1. Aller sur [Supabase Dashboard](https://supabase.com/dashboard)
2. Sélectionner votre projet `yunicity-website`
3. Aller dans **SQL Editor** (icône SQL dans la sidebar)
4. Cliquer sur **New Query**
5. Copier-coller le contenu de `supabase_setup.sql`
6. Cliquer sur **Run** (ou `Ctrl+Enter`)
7. ✅ Vérifier que le message "Success. No rows returned" s'affiche

### Option B : Via Table Editor (Manuel)

**Table `newsletter_subscribers` :**
1. Aller dans **Table Editor**
2. Cliquer sur **New Table**
3. Nom : `newsletter_subscribers`
4. Ajouter les colonnes :
   - `id` : uuid, Primary Key, Default: `gen_random_uuid()`
   - `email` : text, Not Null, Unique
   - `name` : text, Not Null
   - `interests` : text[], Default: `{}`
   - `status` : text, Default: `'active'`
   - `created_at` : timestamptz, Default: `now()`

**Table `contact_messages` :**
1. Cliquer sur **New Table**
2. Nom : `contact_messages`
3. Ajouter les colonnes :
   - `id` : uuid, Primary Key, Default: `gen_random_uuid()`
   - `name` : text, Not Null
   - `email` : text, Not Null
   - `company` : text, Nullable
   - `phone` : text, Nullable
   - `subject` : text, Not Null
   - `message` : text, Not Null
   - `type` : text, Not Null, Default: `'general'`
   - `status` : text, Default: `'new'`
   - `created_at` : timestamptz, Default: `now()`

---

## 🧪 Étape 2 : Test Local

### 1. Démarrer le serveur de développement

```bash
npm run dev
```

### 2. Tester l'inscription newsletter

1. Ouvrir `http://localhost:3000/newsletter`
2. Scroller jusqu'au formulaire d'inscription
3. Remplir avec :
   - **Email :** `test@example.com`
   - **Nom :** `Test User`
4. Cliquer sur **"Rejoindre la communauté"**

### 3. Vérifier les résultats

#### ✅ Dans le navigateur
- Message de succès : "Inscription réussie !"
- Email vidé
- Statut : "success"

#### ✅ Dans Supabase
1. Aller dans **Table Editor** → `newsletter_subscribers`
2. Vérifier que la ligne est présente :
   - `email` = `test@example.com`
   - `name` = `Test User`
   - `status` = `active`
   - `created_at` = date/heure actuelle

#### ✅ Dans la boîte email
- Email reçu à `test@example.com`
- Sujet : "🌆 Bienvenue dans la révolution Smart City - Yunicity"
- Contenu avec message Smart City

---

## 🧪 Étape 3 : Test des Cas d'Erreur

### Test 1 : Email déjà inscrit

1. Réessayer avec le même email (`test@example.com`)
2. **Résultat attendu :**
   - Message d'erreur : "Cet email est déjà inscrit"
   - Statut : `error`
   - Code HTTP : `409`

### Test 2 : Email invalide

1. Tester avec : `email-invalide`
2. **Résultat attendu :**
   - Message d'erreur : "Email invalide"
   - Statut : `error`
   - Code HTTP : `400`

### Test 3 : Champs manquants

1. Tester sans remplir l'email
2. **Résultat attendu :**
   - Message d'erreur : "Email et nom sont requis"
   - Statut : `error`
   - Code HTTP : `400`

---

## 🧪 Étape 4 : Test en Production (Vercel)

### 1. Vérifier les variables d'environnement

Dans Vercel Dashboard → Settings → Environment Variables :

```bash
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_anon_key
RESEND_API_KEY=re_votre_api_key
NEXT_PUBLIC_SITE_URL=https://yunicity-website.vercel.app
```

### 2. Déployer

```bash
git add .
git commit -m "feat: Newsletter Smart City et tables Supabase"
git push origin main
```

### 3. Tester sur le site de production

1. Aller sur `https://yunicity-website.vercel.app/newsletter`
2. Tester l'inscription avec un email réel
3. Vérifier dans Supabase que l'inscription est enregistrée
4. Vérifier la réception de l'email

---

## 📊 Vérification Complète

### Checklist

- [ ] ✅ Tables créées dans Supabase
- [ ] ✅ Index créés
- [ ] ✅ RLS activé (optionnel)
- [ ] ✅ Test local réussi
- [ ] ✅ Email reçu avec contenu Smart City
- [ ] ✅ Test email déjà inscrit
- [ ] ✅ Test email invalide
- [ ] ✅ Variables d'environnement sur Vercel
- [ ] ✅ Test en production réussi

---

## 🔍 Debugging

### Problème : "Email non reçu"

**Vérifier :**
1. ✅ `RESEND_API_KEY` configuré dans Vercel
2. ✅ Email sender changé dans `src/lib/email.ts` (pas `onboarding@resend.dev`)
3. ✅ Vérifier les logs Vercel pour les erreurs
4. ✅ Vérifier le dossier spam

### Problème : "Erreur Supabase"

**Vérifier :**
1. ✅ `NEXT_PUBLIC_SUPABASE_URL` correct
2. ✅ `NEXT_PUBLIC_SUPABASE_ANON_KEY` correct
3. ✅ Tables créées avec les bonnes colonnes
4. ✅ RLS n'empêche pas l'insertion (politique "Allow public")

### Problème : "Erreur 500"

**Vérifier :**
1. ✅ Logs Vercel pour le détail de l'erreur
2. ✅ Structure des tables correspond au code
3. ✅ Types de données corrects

---

## 📝 Notes

- Les emails sont envoyés via Resend
- Les données sont stockées dans Supabase PostgreSQL
- RLS est activé pour la sécurité (mais permet l'insertion publique)
- Les index améliorent les performances de recherche

---

**Statut :** 🟢 Prêt pour les tests  
**Prochaine étape :** Exécuter `supabase_setup.sql` dans Supabase

