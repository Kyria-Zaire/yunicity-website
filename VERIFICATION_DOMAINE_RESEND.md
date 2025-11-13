# 🔧 Vérification Domaine Resend - Guide Complet

## 📋 Étapes pour Vérifier un Domaine dans Resend

### Étape 1 : Ajouter un Domaine dans Resend

1. **Dans Resend Dashboard** (où vous êtes actuellement)
2. **Cliquer sur "Domains"** dans la sidebar gauche (icône globe)
3. **Cliquer sur "Add Domain"** (bouton vert/violet)
4. **Entrer votre domaine** :
   - Option A : `yunicity.fr` (si vous avez le domaine)
   - Option B : `yunicity-website.vercel.app` (domaine Vercel)
   - Option C : Un sous-domaine (ex: `mail.yunicity.fr`)

**Recommandation :** Utilisez `yunicity.fr` si vous l'avez, sinon `yunicity-website.vercel.app`

5. **Cliquer sur "Add"**

---

### Étape 2 : Vérifier le Domaine via DNS

Resend va vous donner des **enregistrements DNS** à ajouter. Il y a généralement :

#### 1. **Enregistrement TXT (SPF)**
```
Type: TXT
Name: @ (ou vide selon votre registrar)
Value: v=spf1 include:resend.com ~all
```

#### 2. **Enregistrement TXT (DKIM)**
```
Type: TXT
Name: resend._domainkey (ou similaire)
Value: (valeur fournie par Resend)
```

#### 3. **Enregistrement CNAME (si nécessaire)**
```
Type: CNAME
Name: (fourni par Resend)
Value: (fourni par Resend)
```

---

### Étape 3 : Ajouter les Enregistrements DNS

**Selon votre registrar :**

#### Si vous avez `yunicity.fr` :
1. Aller sur votre registrar (ex: OVH, Gandi, Namecheap, etc.)
2. Aller dans **Gestion DNS** ou **DNS Management**
3. Ajouter les enregistrements fournis par Resend
4. Attendre la propagation DNS (5-30 minutes)

#### Si vous utilisez `yunicity-website.vercel.app` :
**⚠️ Problème :** Les domaines Vercel ne permettent pas de gérer les DNS pour email.

**Solution :** Vous avez 2 options :

**Option A :** Utiliser votre propre domaine `yunicity.fr` (si vous l'avez)

**Option B :** Continuer avec `onboarding@resend.dev` mais tester uniquement avec `yu.entreprise@gmail.com` (limitation acceptée pour le moment)

---

### Étape 4 : Attendre la Vérification

1. **Dans Resend Dashboard → Domains**
2. **Vérifier le statut** : En attente → Vérifié (✅)
3. **Temps d'attente :** 5-30 minutes (selon propagation DNS)

---

### Étape 5 : Changer le `from` dans le Code

Une fois le domaine vérifié, changer dans `src/lib/email.ts` :

```typescript
// Ligne 11
from: 'YUNICITY <noreply@yunicity.fr>', // Remplace onboarding@resend.dev
```

Et aussi ligne 131 pour les notifications :

```typescript
// Ligne 131
from: 'YUNICITY Contact <noreply@yunicity.fr>', // Remplace onboarding@resend.dev
```

---

## 🎯 Questions pour Vous

1. **Avez-vous le domaine `yunicity.fr` ?**
   - Oui → On peut le vérifier dans Resend
   - Non → On reste avec `onboarding@resend.dev` pour le moment

2. **Quel est votre registrar ?** (OVH, Gandi, Namecheap, etc.)
   - Si vous avez le domaine, je peux vous guider pour ajouter les DNS

3. **Préférez-vous :**
   - Option A : Vérifier `yunicity.fr` maintenant
   - Option B : Continuer avec `onboarding@resend.dev` pour le moment (limitation test uniquement)

---

## ⚠️ Important

**Si vous n'avez pas de domaine propre :**
- Vous ne pouvez pas vérifier `yunicity-website.vercel.app` (limitation Vercel)
- Vous devrez utiliser `onboarding@resend.dev` avec la limitation (emails uniquement à `yu.entreprise@gmail.com`)
- C'est **acceptable pour le développement et les tests**
- Pour la production, vous aurez besoin d'un domaine propre (`yunicity.fr`)

---

## 🚀 Action Immédiate

**Dites-moi :**
1. Avez-vous le domaine `yunicity.fr` ?
2. Si oui, quel est votre registrar ?

Ensuite, je vous guide étape par étape pour la vérification ! 🔧

