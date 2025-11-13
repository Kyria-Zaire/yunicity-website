# 🔍 Diagnostic Email - Newsletter YUNICITY

## ⏱️ Délai d'Envoi

**Normalement :** L'email devrait arriver **immédiatement** (quelques secondes maximum).

Si vous n'avez rien reçu après **5 minutes**, il y a un problème.

---

## 🔍 Causes Possibles

### 1. **Variable d'Environnement Manquante** (Le plus probable)

**Vérifier :**
- ✅ `RESEND_API_KEY` est configurée dans `.env.local` (local)
- ✅ `RESEND_API_KEY` est configurée sur Vercel (production)

**Comment vérifier :**
```bash
# En local, vérifier .env.local
cat .env.local | grep RESEND_API_KEY

# Sur Vercel
# Dashboard → Settings → Environment Variables
```

**Si manquante :**
1. Aller sur [Resend Dashboard](https://resend.com/api-keys)
2. Créer ou copier votre API Key
3. Ajouter dans `.env.local` :
   ```bash
   RESEND_API_KEY=re_votre_clé_ici
   ```
4. Redémarrer le serveur (`npm run dev`)

---

### 2. **Email dans les Spams**

**Vérifier :**
- 📧 Dossier Spam/Indésirables
- 📧 Dossier Promotions (Gmail)
- 📧 Filtres de votre boîte email

**Test :**
- Essayer avec une autre adresse email
- Vérifier les spams de cette autre adresse

---

### 3. **Domaine Non Vérifié dans Resend**

**Problème actuel :**
```typescript
from: 'YUNICITY <onboarding@resend.dev>'
```

**Limitations :**
- `onboarding@resend.dev` fonctionne MAIS :
  - Limité à 100 emails/jour
  - Peut être bloqué par certains filtres anti-spam
  - Pas idéal pour la production

**Solution :**
1. Aller sur [Resend Dashboard](https://resend.com/domains)
2. Ajouter votre domaine (ex: `yunicity.fr`)
3. Vérifier le domaine (DNS)
4. Changer dans `src/lib/email.ts` :
   ```typescript
   from: 'YUNICITY <noreply@yunicity.fr>',
   ```

---

### 4. **Erreur Silencieuse**

Le code continue même si l'email échoue (pour ne pas bloquer l'inscription).

**Vérifier les logs :**

#### En Local (Terminal)
```bash
npm run dev
# Regarder les logs dans le terminal après inscription
```

Vous devriez voir :
- ✅ `Email envoyé avec succès à: email@example.com`
- ❌ `Erreur envoi email bienvenue: ...`

#### En Production (Vercel)
1. Aller sur Vercel Dashboard
2. Votre projet → **Logs**
3. Filtrer par `/api/newsletter`
4. Chercher les erreurs

---

## 🧪 Test de Diagnostic

### Test 1 : Vérifier la Clé API

Créer un fichier `test-resend.js` à la racine :

```javascript
const { Resend } = require('resend')
require('dotenv').config({ path: '.env.local' })

const resend = new Resend(process.env.RESEND_API_KEY)

async function test() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'YUNICITY <onboarding@resend.dev>',
      to: ['votre-email@example.com'],
      subject: 'Test Yunicity',
      html: '<p>Test email</p>'
    })

    if (error) {
      console.error('❌ Erreur:', error)
    } else {
      console.log('✅ Email envoyé:', data)
    }
  } catch (err) {
    console.error('❌ Exception:', err)
  }
}

test()
```

Exécuter :
```bash
node test-resend.js
```

---

### Test 2 : Vérifier les Logs en Temps Réel

1. Ouvrir le terminal où tourne `npm run dev`
2. S'inscrire à la newsletter
3. Regarder les logs dans le terminal

**Logs attendus :**
```
✅ Email envoyé avec succès à: email@example.com
```

**Si erreur :**
```
❌ Erreur envoi email bienvenue: ...
⚠️ PROBLÈME: RESEND_API_KEY manquante ou invalide
```

---

## 🔧 Solutions par Problème

### Problème : "RESEND_API_KEY manquante"

**Solution :**
1. Créer un compte sur [Resend](https://resend.com)
2. Aller dans **API Keys**
3. Créer une nouvelle clé
4. Copier la clé (commence par `re_`)
5. Ajouter dans `.env.local` :
   ```bash
   RESEND_API_KEY=re_votre_clé_ici
   ```
6. Redémarrer le serveur

---

### Problème : "Email non reçu mais pas d'erreur"

**Vérifier :**
1. ✅ Dossier Spam
2. ✅ Filtres email
3. ✅ Vérifier dans Resend Dashboard → **Emails** (voir les emails envoyés)

**Dans Resend Dashboard :**
- Aller dans **Emails**
- Voir l'historique des emails envoyés
- Vérifier le statut (Delivered, Bounced, etc.)

---

### Problème : "Erreur dans les logs"

**Erreur : "Unauthorized"**
→ Clé API invalide ou manquante

**Erreur : "Domain not verified"**
→ Domaine non vérifié (normal avec `onboarding@resend.dev`)

**Erreur : "Rate limit"**
→ Trop d'emails envoyés (limite 100/jour avec domaine de test)

---

## ✅ Checklist de Vérification

- [ ] ✅ `RESEND_API_KEY` dans `.env.local`
- [ ] ✅ Serveur redémarré après ajout de la clé
- [ ] ✅ Vérifié les logs dans le terminal
- [ ] ✅ Vérifié le dossier Spam
- [ ] ✅ Testé avec une autre adresse email
- [ ] ✅ Vérifié dans Resend Dashboard → Emails

---

## 📊 Statut Actuel

D'après votre situation :
- ✅ Inscription fonctionne (données dans Supabase)
- ❌ Email non reçu

**Cause probable :** Variable `RESEND_API_KEY` manquante ou incorrecte

**Action immédiate :**
1. Vérifier `.env.local` contient `RESEND_API_KEY`
2. Vérifier les logs dans le terminal après inscription
3. Vérifier Resend Dashboard → Emails pour voir si l'email a été envoyé

---

**Besoin d'aide ?** Partagez les logs du terminal après une inscription, je pourrai identifier le problème exact !

