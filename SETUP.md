# 🚀 Guide de Configuration YUNICITY

Ce guide vous accompagne dans la configuration complète du projet Yunicity pour la production.

## 📋 Prérequis

- Node.js 18+ installé
- Un compte Supabase (gratuit)
- Un compte Resend (gratuit jusqu'à 3000 emails/mois)
- Un compte Google Analytics (optionnel)

---

## 1️⃣ Configuration Supabase

### Étape 1 : Créer un projet Supabase

1. Allez sur [https://supabase.com](https://supabase.com)
2. Créez un compte ou connectez-vous
3. Cliquez sur "New Project"
4. Remplissez les informations :
   - **Name** : yunicity-prod
   - **Database Password** : Générez un mot de passe fort
   - **Region** : Frankfurt (le plus proche de la France)
   - **Pricing Plan** : Free tier (suffisant pour commencer)

### Étape 2 : Exécuter le schema SQL

1. Dans votre projet Supabase, allez dans **SQL Editor** (menu de gauche)
2. Cliquez sur "New Query"
3. Copiez-collez le contenu du fichier `supabase-schema.sql`
4. Cliquez sur **Run** pour exécuter le script
5. Vérifiez dans **Table Editor** que les tables `newsletter_subscribers` et `contact_messages` sont créées

### Étape 3 : Récupérer les clés API

1. Allez dans **Settings** > **API**
2. Copiez les valeurs suivantes :
   - **Project URL** (ex: `https://xyz.supabase.co`)
   - **anon public** key (commence par `eyJ...`)

### Étape 4 : Configurer les variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_anon_key_ici
```

---

## 2️⃣ Configuration Resend (Emails)

### Étape 1 : Créer un compte Resend

1. Allez sur [https://resend.com](https://resend.com)
2. Créez un compte avec votre email pro (yu.entreprise@gmail.com)
3. Vérifiez votre email

### Étape 2 : Ajouter votre domaine (optionnel mais recommandé)

1. Dans Resend, allez dans **Domains**
2. Cliquez sur "Add Domain"
3. Entrez votre domaine : `yunicity.fr`
4. Suivez les instructions pour ajouter les DNS records
5. Attendez la verification (peut prendre jusqu'à 48h)

> **Note** : En attendant, vous pouvez utiliser `onboarding@resend.dev` comme expéditeur

### Étape 3 : Créer une API Key

1. Allez dans **API Keys**
2. Cliquez sur "Create API Key"
3. Nom : "Yunicity Production"
4. Permission : Full Access
5. Copiez la clé (elle ne sera affichée qu'une fois !)

### Étape 4 : Ajouter la clé dans .env.local

```bash
# Resend
RESEND_API_KEY=re_votre_api_key_ici
```

### Étape 5 : Installer Resend

```bash
npm install resend
```

---

## 3️⃣ Configuration Google Analytics (Optionnel)

### Étape 1 : Créer une propriété GA4

1. Allez sur [https://analytics.google.com](https://analytics.google.com)
2. Créez un compte ou connectez-vous
3. Créez une propriété GA4
4. Configurez un flux de données web
5. Entrez l'URL : `https://yunicity.fr`

### Étape 2 : Récupérer le Measurement ID

1. Dans votre propriété > **Data Streams**
2. Cliquez sur votre stream web
3. Copiez le **Measurement ID** (format : `G-XXXXXXXXXX`)

### Étape 3 : Ajouter dans .env.local

```bash
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## 4️⃣ Intégration des Emails (Code à ajouter)

### Créer le service d'email

Créez un nouveau fichier `src/lib/email.ts` :

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendWelcomeEmail(to: string, name: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'YUNICITY <onboarding@resend.dev>', // Changez après vérification domaine
      to: [to],
      subject: '🎉 Bienvenue dans la communauté VIP Yunicity !',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #8B5CF6;">Bienvenue ${name} ! 👑</h1>
          <p>Vous faites maintenant partie de l'élite des 1000 premiers membres Yunicity.</p>
          <p><strong>Votre Pack Fondateur inclut :</strong></p>
          <ul>
            <li>✅ Accès VIP 30 jours avant le lancement</li>
            <li>✅ Abonnement Premium gratuit à vie (valeur 149€)</li>
            <li>✅ Badge Fondateur exclusif</li>
            <li>✅ Influence sur les décisions produit</li>
          </ul>
          <p>Lancement prévu : <strong>Mars 2026</strong></p>
          <p>À très bientôt !<br/>L'équipe Yunicity 🚀</p>
        </div>
      `
    })

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Erreur envoi email:', error)
    return { success: false, error }
  }
}

export async function sendContactNotification(data: any) {
  try {
    const { data: result, error } = await resend.emails.send({
      from: 'YUNICITY Contact <onboarding@resend.dev>',
      to: ['yu.entreprise@gmail.com'],
      subject: `📩 Nouveau message : ${data.type} - ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Nouveau message de contact</h2>
          <p><strong>Type :</strong> ${data.type}</p>
          <p><strong>Nom :</strong> ${data.name}</p>
          <p><strong>Email :</strong> ${data.email}</p>
          <p><strong>Société :</strong> ${data.company || 'N/A'}</p>
          <p><strong>Téléphone :</strong> ${data.phone || 'N/A'}</p>
          <p><strong>Sujet :</strong> ${data.subject}</p>
          <p><strong>Message :</strong></p>
          <p>${data.message}</p>
          <hr/>
          <p><small>Message reçu le ${new Date().toLocaleString('fr-FR')}</small></p>
        </div>
      `
    })

    if (error) throw error
    return { success: true, data: result }
  } catch (error) {
    console.error('Erreur notification:', error)
    return { success: false, error }
  }
}
```

### Mettre à jour les API routes

Dans `src/app/api/newsletter/route.ts`, ajoutez après l'insertion Supabase :

```typescript
import { sendWelcomeEmail } from '@/lib/email'

// Après addNewsletterSubscriber
await sendWelcomeEmail(email, name)
```

Dans `src/app/api/contact/route.ts`, ajoutez :

```typescript
import { sendContactNotification } from '@/lib/email'

// Après addContactMessage
await sendContactNotification(contactMessage)
```

---

## 5️⃣ Tester en Local

### Installation des dépendances

```bash
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

### Tester les fonctionnalités

1. **Newsletter** : Allez sur http://localhost:3000/#newsletter
   - Remplissez le formulaire
   - Vérifiez dans Supabase > Table Editor que l'entrée est créée
   - Vérifiez dans Resend > Logs que l'email est envoyé

2. **Contact** : Allez sur http://localhost:3000/contact
   - Remplissez le formulaire
   - Vérifiez dans Supabase et dans votre boîte mail

3. **Investir** : Allez sur http://localhost:3000/investir
   - Testez le formulaire d'investissement

---

## 6️⃣ Déploiement sur Vercel

### Étape 1 : Push sur GitHub

```bash
git add .
git commit -m "feat: configuration backend et pages légales"
git push origin main
```

### Étape 2 : Déployer sur Vercel

1. Allez sur [https://vercel.com](https://vercel.com)
2. Connectez votre compte GitHub
3. Cliquez sur "Import Project"
4. Sélectionnez votre repo `yunicity-website`
5. Dans **Environment Variables**, ajoutez :
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optionnel)
6. Cliquez sur "Deploy"

### Étape 3 : Configurer le domaine

1. Dans Vercel > Settings > Domains
2. Ajoutez `yunicity.fr` et `www.yunicity.fr`
3. Suivez les instructions pour configurer les DNS

---

## 7️⃣ Post-Déploiement

### Checklist

- [ ] Tester tous les formulaires en production
- [ ] Vérifier les emails reçus
- [ ] Configurer Google Search Console
- [ ] Soumettre le sitemap : `https://yunicity.fr/sitemap.xml`
- [ ] Ajouter le site sur Google Analytics
- [ ] Tester les performances avec Lighthouse
- [ ] Vérifier le responsive sur mobile
- [ ] Tester les pages légales
- [ ] Configurer un monitoring (Sentry, LogRocket)

### Monitoring des inscriptions

Pour suivre vos inscriptions newsletter en temps réel :

```sql
-- Dans Supabase SQL Editor
SELECT 
  COUNT(*) as total_inscrits,
  COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '7 days') as inscrits_7j,
  COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '1 day') as inscrits_24h
FROM newsletter_subscribers
WHERE status = 'active';
```

---

## 🆘 Troubleshooting

### Erreur : "Invalid API key"
- Vérifiez que vous avez bien copié la clé complète
- Vérifiez qu'il n'y a pas d'espaces avant/après
- Vérifiez que le fichier `.env.local` est bien à la racine

### Erreur : "Database connection failed"
- Vérifiez que votre projet Supabase est bien actif
- Vérifiez l'URL du projet (avec `https://`)
- Vérifiez que les tables sont créées (SQL Editor)

### Emails non reçus
- Vérifiez les logs dans Resend Dashboard
- Vérifiez le dossier spam
- En mode développement, utilisez `onboarding@resend.dev`
- Vérifiez que votre domaine est vérifié pour la production

---

## 📞 Support

Des questions ? Contactez l'équipe :
- Email : yu.entreprise@gmail.com
- Documentation Supabase : https://supabase.com/docs
- Documentation Resend : https://resend.com/docs

---

**Dernière mise à jour** : ${new Date().toLocaleDateString('fr-FR')}
