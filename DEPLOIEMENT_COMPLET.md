# 🚀 Guide de Déploiement Complet - YUNICITY

## ✅ État du Projet

**Statut :** 🟢 **PRÊT POUR DÉPLOIEMENT**

- ✅ Build réussi
- ✅ Toutes les pages fonctionnent
- ✅ Supabase configuré
- ✅ Google Maps intégré
- ✅ Animations et interactions complètes

---

## 📋 Checklist Pré-Déploiement

### 1. Variables d'Environnement Requises

Vous devez avoir ces 5 variables d'environnement :

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_anon_key

# Resend (Emails)
RESEND_API_KEY=re_votre_api_key

# Site URL
NEXT_PUBLIC_SITE_URL=https://yunicity-website.vercel.app

# Google Maps (pour la carte de France)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=votre_google_maps_api_key
```

### 2. Test du Build Local

```bash
# Installer les dépendances
npm install

# Tester le build
npm run build

# Vérifier qu'il n'y a pas d'erreurs
```

### 3. Vérification des Services

- ✅ **Supabase** : Tables créées (`newsletter_subscribers`, `contact_messages`)
- ✅ **Resend** : Compte créé, API key obtenue
- ✅ **Google Maps** : API key obtenue (avec restrictions si nécessaire)

---

## 🚀 Étapes de Déploiement

### Étape 1 : Push sur GitHub

```bash
# 1. Vérifier l'état
git status

# 2. Ajouter tous les fichiers
git add .

# 3. Commit avec message descriptif
git commit -m "feat: Production ready - Site complet avec Google Maps

✨ Features:
- Page d'accueil immersive avec Hero 3D
- Sections problèmes avec scénarios interactifs
- Section solution complète
- Carte de France avec Google Maps (Reims, Troyes, Châlons)
- Logo Loop pour les partenaires
- Sections FAQ, Villes en expansion, Statistiques
- Newsletter et contact fonctionnels
- SEO optimisé

🔧 Technical:
- Next.js 15.5.4
- React 19.2.0
- TypeScript strict
- Framer Motion animations
- Google Maps API intégrée
- Responsive design complet"

# 4. Push
git push origin main
```

---

### Étape 2 : Configuration Vercel

#### 1. Aller sur Vercel Dashboard

👉 [https://vercel.com/dashboard](https://vercel.com/dashboard)

#### 2. Importer le Projet

1. Cliquer sur **"Add New..."** → **"Project"**
2. Cliquer sur **"Import Git Repository"**
3. Sélectionner **`Kyria-Zaire/yunicity-website`**
4. Cliquer sur **"Import"**

#### 3. Configuration Automatique

**Vercel détecte automatiquement Next.js :**

- ✅ Framework Preset : **Next.js**
- ✅ Build Command : `npm run build` (automatique)
- ✅ Output Directory : `.next` (automatique)
- ✅ Install Command : `npm install` (automatique)

**⚠️ NE PAS MODIFIER ces valeurs, laissez-les par défaut !**

#### 4. Ajouter les Variables d'Environnement

**⚠️ CRITIQUE : Ajouter ces variables AVANT de cliquer sur "Deploy" !**

1. Cliquer sur **"Environment Variables"**
2. Ajouter ces **5 variables** :

##### Variable 1 : Supabase URL
```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://votre-projet.supabase.co
Environment: ✅ Production ✅ Preview ✅ Development
```

##### Variable 2 : Supabase Anon Key
```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: votre_anon_key_supabase
Environment: ✅ Production ✅ Preview ✅ Development
```

##### Variable 3 : Resend API Key
```
Name: RESEND_API_KEY
Value: re_votre_api_key_resend
Environment: ✅ Production ✅ Preview ✅ Development
```

##### Variable 4 : Site URL
```
Name: NEXT_PUBLIC_SITE_URL
Value: https://yunicity-website.vercel.app
Environment: ✅ Production ✅ Preview ✅ Development
```

##### Variable 5 : Google Maps API Key
```
Name: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
Value: votre_google_maps_api_key
Environment: ✅ Production ✅ Preview ✅ Development
```

**⚠️ IMPORTANT :** Cochez les 3 environnements (Production, Preview, Development) pour chaque variable !

#### 5. Déployer

1. Cliquer sur **"Deploy"**
2. Attendre 2-3 minutes
3. ✅ **C'est fait !**

---

## ✅ Vérification Post-Déploiement

### 1. Vérifier l'URL

👉 `https://yunicity-website.vercel.app`

### 2. Tester Toutes les Pages

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

### 3. Tester les Fonctionnalités

#### Newsletter
- ✅ Inscription avec un email
- ✅ Vérifier l'email reçu (si `yu.entreprise@gmail.com`)
- ✅ Vérifier dans Supabase (Table Editor → `newsletter_subscribers`)

#### Contact
- ✅ Envoyer un message via le formulaire
- ✅ Vérifier la notification reçue à `yu.entreprise@gmail.com`
- ✅ Vérifier dans Supabase (Table Editor → `contact_messages`)

#### Google Maps
- ✅ Vérifier que la carte se charge sur la page d'accueil
- ✅ Vérifier que les 3 épingles (Reims, Troyes, Châlons) sont visibles
- ✅ Cliquer sur une épingle pour voir l'info window

### 4. Vérifier SEO

- ✅ `https://yunicity-website.vercel.app/sitemap.xml`
- ✅ `https://yunicity-website.vercel.app/robots.txt`

### 5. Tester le Responsive

- ✅ Mobile (iPhone, Android)
- ✅ Tablette (iPad)
- ✅ Desktop (1920x1080, 2560x1440)

---

## 🔧 Configuration Google Maps API

### Obtenir une Clé API

1. Aller sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créer un projet ou sélectionner un projet existant
3. Activer l'API **Maps JavaScript API**
4. Créer des identifiants → **Clé API**
5. Copier la clé API

### Restrictions Recommandées (Sécurité)

1. **Restrictions d'application** :
   - Restreindre par référent HTTP
   - Ajouter : `https://yunicity-website.vercel.app/*`
   - Ajouter : `https://*.vercel.app/*` (pour les previews)

2. **Restrictions d'API** :
   - Limiter à **Maps JavaScript API** uniquement

### En cas d'Erreur Google Maps

Si vous voyez une erreur `ApiProjectMapError` :

1. Vérifier que la clé API est correcte
2. Vérifier que l'API **Maps JavaScript API** est activée
3. Vérifier les restrictions d'application
4. Le site affichera automatiquement un fallback (iframe) si l'API ne fonctionne pas

---

## ⚠️ Limitations Temporaires

### Emails Newsletter

- **Actuellement** : Emails envoyés uniquement à `yu.entreprise@gmail.com` (domaine de test Resend)
- **Solution** : Vérifier votre domaine dans Resend pour envoyer à tous les emails
- **Impact** : Les autres utilisateurs s'inscrivent mais ne reçoivent pas d'email (leurs emails sont dans Supabase)

### Domaine Email

- **Actuellement** : `onboarding@resend.dev` (domaine de test)
- **À changer** : Quand vous aurez votre domaine `yunicity.fr`, changez dans `src/lib/email.ts` :
  ```typescript
  from: 'YUNICITY <noreply@yunicity.fr>',
  ```

---

## 📊 Résumé

### ✅ Prêt pour Production

1. ✅ Code pushé sur GitHub
2. ✅ Variables d'environnement configurées sur Vercel
3. ✅ Build réussi
4. ✅ Toutes les pages fonctionnent
5. ✅ Google Maps intégré
6. ✅ Newsletter et contact fonctionnels

### 🎯 Prochaines Étapes (Optionnel)

1. Configurer un domaine personnalisé (`yunicity.fr`)
2. Vérifier le domaine dans Resend pour les emails
3. Configurer Google Search Console
4. Ajouter Google Analytics (optionnel)
5. Monitorer les performances avec Vercel Analytics

---

## 🆘 En cas de Problème

### Build Échoue

1. Vérifier les logs dans Vercel Dashboard
2. Vérifier que toutes les variables d'environnement sont configurées
3. Tester le build localement : `npm run build`

### Google Maps ne Charge Pas

1. Vérifier `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` dans Vercel
2. Vérifier que l'API est activée dans Google Cloud Console
3. Vérifier les restrictions d'application
4. Le site affichera un fallback automatiquement

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

**Besoin d'aide ?** Consultez les autres fichiers de documentation dans le projet.

