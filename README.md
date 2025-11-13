# 🚀 YUNICITY - Site Officiel

![YUNICITY](https://img.shields.io/badge/Status-Production-green?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1-blue?style=for-the-badge&logo=react)
![Supabase](https://img.shields.io/badge/Supabase-Enabled-green?style=for-the-badge&logo=supabase)

**La première super-app qui reconnecte les habitants à leur territoire.**

🎯 Lancement MVP prévu : **Mars 2026** | 📍 Ville pilote : **Reims**

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

## ✨ Fonctionnalités du Site

### Pages
- ✅ **Home** - Landing page avec Hero 3D et sections d'introduction
- ✅ **Problème** - Présentation du problème d'isolement urbain
- ✅ **Solution** - Notre solution Hub unique
- ✅ **Reims** - Découverte de Reims avec carousel et lieux authentiques
- ✅ **Équipe** - Présentation des 5 fondateurs et roadmap
- ✅ **Newsletter** - Conversation pitch et Instagram Stories carousel
- ✅ **Investir** - Page investisseurs avec formulaire de contact
- ✅ **Contact** - Formulaire de contact multi-usage
- ✅ **Pages légales** - CGU, Politique de confidentialité, Mentions légales

### Fonctionnalités Techniques
- ✅ Animations fluides (Framer Motion)
- ✅ Design minimaliste Apple/Tesla
- ✅ Responsive mobile-first
- ✅ Inscription newsletter avec Supabase
- ✅ Formulaires de contact intelligents
- ✅ SEO optimisé
- ✅ RGPD compliant

---

## 🛠️ Stack Technique

### Frontend
- **Framework** : Next.js 15.5 (App Router + Turbopack)
- **React** : 19.1
- **Styling** : Tailwind CSS 4.0
- **Animations** : Framer Motion 12
- **3D** : Three.js + React Three Fiber
- **Icons** : Lucide React

### Backend
- **Database** : Supabase (PostgreSQL)
- **Email** : Resend
- **Hosting** : Vercel

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
git clone https://github.com/Kyria-Zaire/yunicity-website.git
cd yunicity-website
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer les variables d'environnement**

Créez un fichier `.env.local` à la racine :

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_anon_key

# Resend (Emails)
RESEND_API_KEY=re_votre_api_key

# Google Analytics (optionnel)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
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

## 🌐 Déploiement sur Vercel

1. **Push sur GitHub**
```bash
git add .
git commit -m "feat: ready for production"
git push origin main
```

2. **Connecter à Vercel**
- Allez sur [vercel.com](https://vercel.com)
- Importez votre repository GitHub
- Ajoutez les variables d'environnement
- Déployez !

3. **Build de production local**
```bash
npm run build
npm run start
```

---

## 📁 Structure du Projet

```
yunicity-website/
├── src/
│   ├── app/                          # Pages Next.js (App Router)
│   │   ├── api/                      # API Routes
│   │   │   ├── contact/route.ts      # Formulaire contact
│   │   │   └── newsletter/route.ts   # Inscription newsletter
│   │   ├── page.tsx                  # Page d'accueil
│   │   ├── probleme/page.tsx         # Page problème
│   │   ├── solution/page.tsx         # Page solution
│   │   ├── reims/page.tsx            # Page Reims
│   │   ├── equipe/page.tsx           # Page équipe
│   │   ├── newsletter/page.tsx       # Page newsletter
│   │   ├── investir/page.tsx         # Page investisseurs
│   │   ├── contact/page.tsx          # Page contact
│   │   ├── cgu/page.tsx              # CGU
│   │   ├── politique-confidentialite/page.tsx
│   │   ├── mentions-legales/page.tsx
│   │   ├── layout.tsx                # Layout global
│   │   └── globals.css               # Styles globaux
│   │
│   ├── components/                   # Composants React
│   │   ├── Navigation.tsx            # Menu navigation
│   │   ├── Footer.tsx                # Pied de page
│   │   ├── BackButton.tsx            # Bouton retour
│   │   ├── Hero3D.tsx                # Hero 3D accueil
│   │   │
│   │   ├── ProblemeSection.tsx       # Section problème
│   │   ├── SolutionSection.tsx       # Section solution
│   │   │
│   │   ├── ReimsHeroCarousel.tsx     # Hero Reims avec carousel
│   │   ├── ReimsExperienceSection.tsx
│   │   ├── ReimsCallToActionSection.tsx
│   │   │
│   │   ├── EquipeHeroSection.tsx     # Hero équipe
│   │   ├── EquipeTeamSection.tsx     # Cartes membres
│   │   ├── EquipeJoinSection.tsx     # Roadmap
│   │   │
│   │   ├── NewsletterHeroSection.tsx # Conversation iPhone
│   │   ├── NewsletterContentSection.tsx # Stories Instagram
│   │   ├── NewsletterSubscribeSection.tsx # Formulaire inscription
│   │   │
│   │   ├── InvestirHeroSection.tsx   # Hero investir
│   │   ├── InvestirOpportunitySection.tsx
│   │   └── InvestirContactSection.tsx # Formulaire investissement
│   │
│   └── lib/                          # Utilitaires
│       ├── supabase.ts               # Client Supabase
│       └── email.ts                  # Helpers email
│
├── public/                           # Assets statiques
│   └── yunicity-logo.png
│
├── .env.local                        # Variables d'environnement (non versionné)
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 📊 Métriques & Objectifs

### Actuellement
- ✅ 2,847 inscrits newsletter
- ✅ 15 partenaires locaux signés à Reims
- ✅ Site en production

### Objectif Lancement (Mars 2026)
- 🎯 5,000 utilisateurs actifs (Reims)
- 🎯 120K€ ARR

### Objectif 2030
- 🎯 400K utilisateurs
- 🎯 50+ villes connectées
- 🎯 5M€ ARR

---

## 🤝 Contact & Contribution

📧 **Email** : yu.entreprise@gmail.com
🔗 **LinkedIn** : [Yunicity App](https://www.linkedin.com/in/yunicity-app-381bb7230)
📸 **Instagram** : [@yunicity.app](https://www.instagram.com/yunicity.app)
📘 **Facebook** : [Yunicity](https://www.facebook.com/share/1Eu3J5rE9P/)

---

## 📄 Licence

© 2025 YUNICITY. Tous droits réservés.

---

**Fait avec ❤️ à Reims, France** 🇫🇷
