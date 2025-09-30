# 🚀 YUNICITY - Website Officiel

![YUNICITY](https://img.shields.io/badge/Status-Pre--Launch-purple?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1-blue?style=for-the-badge&logo=react)
![Supabase](https://img.shields.io/badge/Supabase-Enabled-green?style=for-the-badge&logo=supabase)

**La première super-app qui reconnecte les habitants à leur territoire.**

🎯 Lancement MVP prévu : **Mars 2026** | 📍 Ville pilote : **Reims**

---

## 📋 Table des Matières

- [À Propos](#-à-propos)
- [Fonctionnalités](#-fonctionnalités)
- [Stack Technique](#-stack-technique)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Déploiement](#-déploiement)
- [Structure du Projet](#-structure-du-projet)
- [Contribution](#-contribution)

---

## 🎯 À Propos

YUNICITY est une application mobile innovante qui résout le problème d'**isolement urbain** touchant 34M de Français. 

### Le Problème
- 80% des Français ne connaissent pas leurs voisins
- Information locale éparpillée sur 15+ applications
- Commerces locaux invisibles
- Événements locaux ratés

### Notre Solution
Une **super-app locale** qui centralise :
- 🗺️ Carte interactive 3D des lieux
- 👥 Communauté avec "Tribus" locales
- 🎉 Hub d'événements géolocalisés
- 🎁 Programme de fidélité et récompenses
- 🏆 Système de gamification

---

## ✨ Fonctionnalités

### Site Web Actuel
- ✅ Landing page moderne avec animations (Framer Motion)
- ✅ 7 sections principales (Hero, Problème, Solution, Ville, Marché, Équipe, Newsletter)
- ✅ Inscription newsletter avec Supabase
- ✅ Formulaire de contact intelligent
- ✅ Page investisseurs dédiée
- ✅ Pages légales complètes (RGPD, CGU, Mentions Légales)
- ✅ SEO optimisé avec métadonnées complètes
- ✅ Responsive design mobile-first

### Backend & API
- ✅ Supabase (base de données PostgreSQL)
- ✅ API Routes Next.js pour formulaires
- ✅ Système d'emails avec Resend
- ✅ Validation des données
- ✅ Row Level Security (RLS)

---

## 🛠️ Stack Technique

### Frontend
- **Framework** : Next.js 15.5 (App Router + Turbopack)
- **React** : 19.1
- **Styling** : Tailwind CSS 4.0
- **Animations** : Framer Motion 12
- **3D** : Three.js + React Three Fiber
- **Charts** : Recharts
- **Icons** : Lucide React

### Backend
- **Database** : Supabase (PostgreSQL)
- **Auth** : Supabase Auth (futur)
- **Email** : Resend
- **Hosting** : Vercel

### Analytics & Monitoring
- **Analytics** : Google Analytics (à configurer)
- **Monitoring** : À configurer (Sentry recommandé)

---

## 🚀 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn
- Compte Supabase (gratuit)
- Compte Resend (gratuit jusqu'à 3000 emails/mois)

### Étapes

1. **Cloner le repository**
```bash
git clone https://github.com/votre-org/yunicity-website.git
cd yunicity-website
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer les variables d'environnement**
```bash
# Créer le fichier .env.local à la racine
# Voir SETUP.md pour les instructions détaillées
```

4. **Lancer le serveur de développement**
```bash
npm run dev
```

5. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

---

## ⚙️ Configuration

### Configuration Complète (30 minutes)

Suivez le guide détaillé dans **[SETUP.md](./SETUP.md)** pour :

1. ☑️ Configurer Supabase (15 min)
2. ☑️ Configurer Resend pour les emails (10 min)  
3. ☑️ Configurer Google Analytics (5 min - optionnel)
4. ☑️ Tester en local
5. ☑️ Déployer sur Vercel

### Variables d'Environnement

Créez un fichier `.env.local` :

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_anon_key

# Resend (Emails)
RESEND_API_KEY=re_votre_api_key

# Google Analytics (optionnel)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## 🌐 Déploiement

### Vercel (Recommandé)

1. **Push sur GitHub**
```bash
git add .
git commit -m "feat: configuration complète"
git push origin main
```

2. **Déployer sur Vercel**
- Connectez votre repo GitHub à Vercel
- Ajoutez les variables d'environnement
- Déployez !

3. **Configurer le domaine**
- Ajoutez `yunicity.fr` dans Vercel > Domains
- Configurez les DNS chez votre registrar

### Build de Production
```bash
npm run build
npm run start
```

---

## 📁 Structure du Projet

```
yunicity-website/
├── src/
│   ├── app/                    # Pages Next.js (App Router)
│   │   ├── api/               # API Routes
│   │   │   ├── newsletter/    # Inscription newsletter
│   │   │   └── contact/       # Formulaire contact
│   │   ├── contact/           # Page contact
│   │   ├── investir/          # Page investisseurs
│   │   ├── mentions-legales/  # Mentions légales
│   │   ├── politique-confidentialite/
│   │   ├── cgu/               # CGU
│   │   ├── layout.tsx         # Layout global
│   │   ├── page.tsx           # Page d'accueil
│   │   └── globals.css        # Styles globaux
│   │
│   ├── components/            # Composants React
│   │   ├── Hero3D.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── ProblemeSection.tsx
│   │   ├── SolutionSection.tsx
│   │   ├── DecouverteReimsSection.tsx
│   │   ├── MarcheSection.tsx
│   │   ├── EquipeSection.tsx
│   │   └── NewsletterSection.tsx
│   │
│   └── lib/                   # Utilitaires
│       └── supabase.ts        # Client Supabase
│
├── public/                    # Assets statiques
├── supabase-schema.sql        # Schema base de données
├── SETUP.md                   # Guide de configuration
├── CHANGELOG.md               # Historique des changements
├── package.json
└── README.md
```

---

## 📊 Métriques & Objectifs

### Pré-lancement (Now - Mars 2026)
- 🎯 1,000 inscrits newsletter (actuellement : 2,847)
- 🎯 15 partenaires locaux signés
- 🎯 10 demandes d'investissement qualifiées

### Post-lancement 2026
- 🎯 12K utilisateurs actifs (Reims)
- 🎯 120K€ ARR

### Objectif 2030
- 🎯 400K utilisateurs
- 🎯 50+ villes connectées
- 🎯 5M€ ARR

---

## 🤝 Contribution

Nous ne sommes pas encore en open-source, mais si vous souhaitez contribuer ou rejoindre l'aventure :

📧 **Contact** : yu.entreprise@gmail.com  
🔗 **LinkedIn** : [Yunicity App](https://www.linkedin.com/in/yunicity-app-381bb7230)  
📸 **Instagram** : [@yunicity.app](https://www.instagram.com/yunicity.app)

---

## 📄 Licence

© 2025 YUNICITY. Tous droits réservés.

---

## 🙏 Remerciements

- L'équipe fondatrice de 5 experts
- Nos early adopters et beta testeurs
- La communauté de Reims qui nous soutient

---

## 📞 Support

Des questions ? Des bugs ? Contactez-nous :

- 📧 Email : yu.entreprise@gmail.com
- 📝 Formulaire : [yunicity.fr/contact](https://yunicity.fr/contact)
- 💬 Support technique : Voir [SETUP.md](./SETUP.md)

---

**Fait avec ❤️ à Reims, France** 🇫🇷
