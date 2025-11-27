# 🚀 Guide de Déploiement Vercel - Étape par Étape

## ✅ Étape 1 : Code Pushé sur GitHub

**✅ TERMINÉ !** 
- Commit : `19d44a2`
- Branche : `master`
- Repository : `https://github.com/Kyria-Zaire/yunicity-website`

---

## 🚀 Étape 2 : Configuration Vercel

### 1️⃣ Aller sur Vercel Dashboard

👉 [https://vercel.com/dashboard](https://vercel.com/dashboard)

### 2️⃣ Importer le Projet

1. Cliquer sur **"Add New..."** → **"Project"**
2. Cliquer sur **"Import Git Repository"**
3. Sélectionner **`Kyria-Zaire/yunicity-website`**
4. Cliquer sur **"Import"**

### 3️⃣ Configuration Automatique

**Vercel détecte automatiquement Next.js :**

- ✅ Framework Preset : **Next.js** (ne pas modifier)
- ✅ Build Command : `npm run build` (ne pas modifier)
- ✅ Output Directory : `.next` (ne pas modifier)
- ✅ Install Command : `npm install` (ne pas modifier)

**⚠️ NE PAS MODIFIER ces valeurs, laissez-les par défaut !**

### 4️⃣ ⚠️ CRITIQUE : Ajouter les Variables d'Environnement

**AVANT de cliquer sur "Deploy", ajouter ces 4 variables :**

1. Cliquer sur **"Environment Variables"** (en bas de la page)
2. Ajouter ces variables une par une :

#### Variable 1 : Supabase URL
```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://votre-projet.supabase.co
Environment: ✅ Production ✅ Preview ✅ Development
```
👉 Cliquer sur **"Add"**

#### Variable 2 : Supabase Anon Key
```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: votre_anon_key_supabase
Environment: ✅ Production ✅ Preview ✅ Development
```
👉 Cliquer sur **"Add"**

#### Variable 3 : Resend API Key
```
Name: RESEND_API_KEY
Value: re_votre_api_key_resend
Environment: ✅ Production ✅ Preview ✅ Development
```
👉 Cliquer sur **"Add"**

#### Variable 4 : Site URL
```
Name: NEXT_PUBLIC_SITE_URL
Value: https://yunicity-website.vercel.app
Environment: ✅ Production ✅ Preview ✅ Development
```
👉 Cliquer sur **"Add"**

**⚠️ IMPORTANT :** 
- Cochez les **3 environnements** (Production, Preview, Development) pour chaque variable !
- Remplacez les valeurs par vos vraies clés API
- **Note :** La carte utilise maintenant **Leaflet avec OpenStreetMap** (gratuit, pas besoin de clé API Google Maps)

### 5️⃣ Déployer

1. Cliquer sur **"Deploy"** (en bas à droite)
2. Attendre 2-3 minutes
3. ✅ **C'est fait !**

---

## ✅ Étape 3 : Vérification Post-Déploiement

### 1. Vérifier l'URL

Une fois déployé, votre site sera accessible à :
👉 `https://yunicity-website.vercel.app`

### 2. Tester Toutes les Pages

Vérifier que ces pages fonctionnent :

- ✅ `/` (Homepage avec Hero 3D)
- ✅ `/probleme` (Scénarios interactifs)
- ✅ `/solution` (Section solution complète)
- ✅ `/reims` (Page Reims)
- ✅ `/equipe` (Page équipe)
- ✅ `/newsletter` (Inscription newsletter)
- ✅ `/investir` (Page investissement)
- ✅ `/contact` (Formulaire de contact)
- ✅ `/mentions-legales`
- ✅ `/politique-confidentialite`
- ✅ `/cgu`

### 3. Tester la Carte Google Maps

**Sur la page d'accueil (`/`) :**

1. ✅ Vérifier que la carte se charge
2. ✅ Vérifier que les **3 épingles colorées** sont visibles :
   - 🔵 **Reims** (bleu)
   - 🟣 **Troyes** (violet)
   - 🟢 **Châlons-en-Champagne** (vert)
3. ✅ Cliquer sur une épingle pour voir l'info window
4. ✅ Vérifier les animations de pulsation autour des épingles

**Si la carte ne charge pas :**
- Vérifier que `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` est correcte
- Vérifier que l'API **Maps JavaScript API** est activée dans Google Cloud Console
- Le site affichera automatiquement un fallback (iframe) si l'API ne fonctionne pas

### 4. Tester Newsletter

1. Aller sur `/newsletter`
2. Remplir le formulaire avec un email
3. Cliquer sur "S'inscrire"
4. ✅ Vérifier le message de succès
5. ✅ Si `yu.entreprise@gmail.com`, vérifier l'email reçu
6. ✅ Vérifier dans Supabase (Table Editor → `newsletter_subscribers`)

### 5. Tester Contact

1. Aller sur `/contact`
2. Remplir le formulaire
3. Cliquer sur "Envoyer"
4. ✅ Vérifier le message de succès
5. ✅ Vérifier la notification reçue à `yu.entreprise@gmail.com`
6. ✅ Vérifier dans Supabase (Table Editor → `contact_messages`)

### 6. Vérifier SEO

- ✅ `https://yunicity-website.vercel.app/sitemap.xml`
- ✅ `https://yunicity-website.vercel.app/robots.txt`

---

## 🗺️ Carte Interactive (Leaflet + OpenStreetMap)

**✅ Aucune configuration nécessaire !**

La carte utilise **Leaflet** avec **OpenStreetMap**, qui est :
- ✅ **100% gratuit**
- ✅ **Sans clé API nécessaire**
- ✅ **Open source**
- ✅ **Performant et fiable**

Les 3 épingles personnalisées (Reims, Troyes, Châlons-en-Champagne) sont créées avec des SVG personnalisés.

---

## ⚠️ En cas de Problème

### Build Échoue

1. Vérifier les logs dans Vercel Dashboard → Deployments
2. Vérifier que toutes les 5 variables d'environnement sont configurées
3. Vérifier qu'il n'y a pas d'erreurs dans les logs

### La Carte ne Charge Pas

1. Vérifier la console du navigateur pour les erreurs
2. Vérifier que Leaflet est bien installé (`npm install leaflet`)
3. Vérifier que le CSS de Leaflet est chargé
4. La carte devrait se charger automatiquement (pas de clé API nécessaire)

### Emails ne Fonctionnent Pas

1. Vérifier `RESEND_API_KEY` dans Vercel
2. Vérifier que le compte Resend est actif
3. Tester avec `yu.entreprise@gmail.com` (domaine de test)

### Supabase ne Fonctionne Pas

1. Vérifier `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY`
2. Vérifier que les tables existent dans Supabase
3. Vérifier les politiques RLS (Row Level Security)

---

## 🎉 C'est Prêt !

**Votre site est maintenant en production !** 🚀

**URL :** `https://yunicity-website.vercel.app`

**Fonctionnalités :**
- ✅ Page d'accueil immersive
- ✅ Carte Google Maps avec 3 épingles personnalisées
- ✅ Newsletter et contact fonctionnels
- ✅ SEO optimisé
- ✅ Design responsive complet

---

**Besoin d'aide ?** Consultez `DEPLOIEMENT_COMPLET.md` pour plus de détails.

