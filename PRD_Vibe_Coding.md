# PRD : YUNICITY - Launch Phase Reims (Janvier 2026)

## 1. Vision du Projet
Yunicity est la "Super-App" locale conçue pour reconnecter les habitants de Reims à leur territoire. Elle centralise les événements, les commerces de proximité et la vie associative.
**Objectif Janvier 2026 :** Lancement de la version Bêta pour 10 000 utilisateurs (étudiants et actifs rémois).

## 2. Identité Visuelle (Refonte Bleu & Blanc)
- **Background :** Blanc pur (#FFFFFF).
- **Couleur Primaire (Accent) :** Bleu profond (#1E40AF - Bleu Yunicity), sans dégradé.
- **Composants :** Cartes à fond blanc, bordures fines bleues ou grises très claires.
- **Boutons (CTA) :** Fond bleu uni (#1E40AF), texte blanc.
- **Typographie :** Noir ou gris très foncé pour le texte sur fond blanc.
- **Style :** Minimalisme "Flat Design", pas d'ombres portées lourdes, pas de dégradés.

## 3. Stack Technique
- **Frontend Web :** Next.js 14+, Tailwind CSS, Framer Motion (animations fluides).
- **App Mobile :** Expo SDK 51 (React Native), NativeWind, TypeScript.
- **Backend/DB :** Supabase (PostgreSQL), Edge Functions.
- **Tools :** Lucide React (Icons), Claude Code (Vibe Coding).

## 4. Spécifications des Pages Web (Refonte Totale)

### A. Page d'Accueil (Home)
- **Hero :** Titre "Le réseau social qui reconnecte ta ville". Image immersive de Reims en fond ou mockup iPhone 15 Pro.
- **CTA :** Bouton noir "Rejoindre la Bêta" (scroll vers formulaire).
- **Social Proof :** Logos partenaires (Innovact, Bpifrance, La French Tech) en niveaux de gris.

### B. Le Problème (/probleme)
- **Narratif :** 50% des habitants se sentent déconnectés de leur ville.
- **Visualisation :** Grid de 3 cartes blanches à bordure noire expliquant l'isolement urbain et l'éparpillement de l'info.

### C. La Solution (/solution)
- **Features :** - Hub d'infos (API Supabase).
  - Carte 3D interactive.
  - IA Locale (Chatbot).
  - Communauté (Feed).

### D. L'Équipe (/equipe)
- **Membres :** Rody (CEO), Djiby (CFO), Freeway.jr (CTO), Jores (Growth).
- **Focus Tech :** Baptiste De Michiel (Lead Backend/API - Bachelor 3).

### E. Reims & Partenariats (/reims)
- **Focus Local :** Guide des commerçants (Kebab Cernay, Legend R).
- **Lead Gen :** Formulaire pour que les commerçants demandent leur "Pack Yunicity" (Vidéo + Site Vitrine).

## 5. Architecture de Données (Supabase)
- **Table `profiles` :** Users (étudiants, commerçants).
- **Table `posts` :** Contenu du feed (titre, image_url, shop_id).
- **Table `leads` :** Inscriptions bêta-testeurs.
- **Table `shops` :** Données commerçants (coordonnées, horaires).

## 6. Roadmap Commando (Janvier)
1. **Semaine 2 :** Refonte complète Landing Page (Vibe Coding).
2. **Semaine 3 :** Finalisation de l'API avec Baptiste et intégration NativeWind.
3. **Semaine 4 :** Beta test terrain (Lycées, Universités Moulin de la Housse).
4. **30 Janvier :** Go-Live Reims.

## 7. Instructions pour Claude Code
- Priorise le "Mobile First" pour le design.
- Utilise des composants Tailwind réutilisables.
- Garde un code propre et commenté pour faciliter l'intégration de Baptiste au Backend.