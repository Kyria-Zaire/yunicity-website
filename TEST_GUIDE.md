# 🧪 Guide de Test - YUNICITY

## ✅ Ce qui est fait

- ✅ Supabase configuré (tables créées)
- ✅ Resend installé
- ✅ Service d'emails créé (`src/lib/email.ts`)
- ✅ API Routes connectées
- ✅ Package `resend` installé

---

## 🔐 Prochaine Étape : Variables d'Environnement

### Vous DEVEZ créer le fichier `.env.local`

À la racine de votre projet, créez un fichier `.env.local` avec :

```bash
# Supabase - Remplacez par VOS vraies clés !
NEXT_PUBLIC_SUPABASE_URL=https://szlioztyrepkieupzefa.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...VOTRE_CLE_ANON_ICI

# Resend - Remplacez par VOTRE clé API !
RESEND_API_KEY=re_...VOTRE_CLE_RESEND_ICI
```

### Comment obtenir ces clés ?

#### Supabase (anon key) :
1. Dashboard Supabase : https://supabase.com/dashboard/project/szlioztyrepkieupzefa
2. Settings (⚙️) → API
3. Copiez "anon public" (commence par `eyJ...`)

#### Resend (API key) :
1. Dashboard Resend : https://resend.com/api-keys
2. Create API Key → Full Access
3. Copiez la clé (commence par `re_...`)

---

## 🚀 Test Local

Une fois `.env.local` créé :

### 1. Démarrer le serveur
```bash
npm run dev
```

### 2. Tester la Newsletter
1. Allez sur : http://localhost:3000/#newsletter
2. Remplissez le formulaire :
   - Nom : Votre prénom
   - Email : Votre email de test
   - Sélectionnez des intérêts
3. Cliquez sur "Devenir VIP"
4. Vérifiez :
   - ✅ Message de succès
   - ✅ Email reçu (vérifiez spam aussi)
   - ✅ Entrée dans Supabase : https://supabase.com/dashboard/project/szlioztyrepkieupzefa/editor

### 3. Tester le Contact
1. Allez sur : http://localhost:3000/contact
2. Remplissez le formulaire
3. Cliquez sur "Envoyer le message"
4. Vérifiez :
   - ✅ Message de succès
   - ✅ Email reçu sur yu.entreprise@gmail.com
   - ✅ Entrée dans Supabase

### 4. Tester Investir
1. Allez sur : http://localhost:3000/investir
2. Remplissez le formulaire investisseur
3. Vérifiez :
   - ✅ Message de succès
   - ✅ Email reçu avec le ticket d'investissement

---

## 🐛 Problèmes Courants

### Erreur : "Invalid API key"
- ❌ Vous n'avez pas créé le fichier `.env.local`
- ❌ Les clés ne sont pas correctes
- ✅ Vérifiez qu'il n'y a pas d'espaces avant/après les clés

### Erreur : "Database connection failed"
- ❌ Le schema SQL n'a pas été exécuté
- ✅ Allez dans Supabase SQL Editor et exécutez `supabase-schema.sql`
- ✅ Vérifiez dans Table Editor que les tables existent

### Emails non reçus
- ⏳ Attendez 1-2 minutes (peut être lent la première fois)
- 📧 Vérifiez le dossier SPAM
- 🔍 Vérifiez les logs dans Resend Dashboard : https://resend.com/emails
- ⚠️ En mode dev, Resend utilise `onboarding@resend.dev` comme expéditeur

### Erreur TypeScript
- Si vous voyez des erreurs rouges, exécutez :
```bash
npm install
```

---

## 📊 Vérifier les Données

### Dans Supabase
1. Allez sur : https://supabase.com/dashboard/project/szlioztyrepkieupzefa/editor
2. Cliquez sur les tables :
   - `newsletter_subscribers` - Voir les inscrits
   - `contact_messages` - Voir les messages

### Dans Resend
1. Allez sur : https://resend.com/emails
2. Voir tous les emails envoyés (statut, erreurs, etc.)

---

## ✅ Checklist Avant Déploiement

- [ ] `.env.local` créé avec les vraies clés
- [ ] Schema SQL exécuté dans Supabase
- [ ] Tables visibles dans Table Editor
- [ ] Test newsletter OK (email reçu)
- [ ] Test contact OK (email reçu)
- [ ] Test investir OK
- [ ] Aucune erreur dans la console

---

## 🚀 Déploiement sur Vercel

Une fois que tout fonctionne en local :

```bash
git add .
git commit -m "feat: backend complet avec Supabase + Resend"
git push origin main
```

Puis sur Vercel :
1. Connectez votre repo
2. Ajoutez les variables d'environnement (même contenu que `.env.local`)
3. Deploy !

⚠️ **Important** : Sur Vercel, ajoutez les MÊMES variables que dans `.env.local`

---

## 📞 Besoin d'Aide ?

- 📖 Guide complet : SETUP.md
- 🐛 Problème technique : yu.entreprise@gmail.com
- 📚 Doc Supabase : https://supabase.com/docs
- 📧 Doc Resend : https://resend.com/docs

---

**Bonne chance ! 🚀**
