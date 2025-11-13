# 🔍 Debug Email - Instructions

## ⚠️ IMPORTANT : Regardez le TERMINAL, pas F12 !

L'erreur 409 dans F12 signifie juste que l'email est déjà inscrit.  
Le vrai problème est dans le **TERMINAL** où tourne `npm run dev`.

---

## 🧪 Test avec un NOUVEL Email

### 1. Utiliser un email que vous n'avez JAMAIS utilisé
Exemple : `test-nouveau-123@example.com`

### 2. Regarder le TERMINAL (pas F12)

Après l'inscription, vous devriez voir dans le terminal :

#### ✅ Si ça fonctionne :
```
✅ Email envoyé avec succès à: test-nouveau-123@example.com
```

#### ❌ Si ça ne fonctionne pas :
```
❌ Erreur envoi email bienvenue: ...
⚠️ PROBLÈME: RESEND_API_KEY manquante ou invalide
```

---

## 🔧 Vérification Rapide

### Vérifier si RESEND_API_KEY existe

**Dans le terminal :**
```bash
# Windows PowerShell
Get-Content .env.local | Select-String "RESEND"
```

**Si rien n'apparaît :**

1. Créer un compte sur [Resend](https://resend.com) (gratuit, 3000 emails/mois)
2. Aller dans **API Keys** → **Create API Key**
3. Nom : `Yunicity Production`
4. Copier la clé (commence par `re_`)
5. Créer/modifier `.env.local` :
   ```bash
   RESEND_API_KEY=re_votre_clé_ici
   ```
6. **Redémarrer le serveur** :
   ```bash
   # Arrêter avec Ctrl+C
   npm run dev
   ```

---

## 📊 Ce que vous devez me dire

Après avoir testé avec un NOUVEL email, dites-moi :

1. **Dans le TERMINAL**, qu'est-ce que vous voyez après l'inscription ?
   - ✅ `Email envoyé avec succès` ?
   - ❌ `Erreur envoi email` ?
   - ❌ `PROBLÈME: RESEND_API_KEY` ?

2. **Avez-vous créé un compte Resend ?**
   - Oui / Non

3. **Avez-vous ajouté `RESEND_API_KEY` dans `.env.local` ?**
   - Oui / Non

---

## 🎯 Action Immédiate

1. **Tester avec un NOUVEL email** (pas celui déjà inscrit)
2. **Regarder le TERMINAL** (pas F12)
3. **Me dire ce que vous voyez dans le terminal**

C'est dans le terminal que se trouve la vraie information ! 🔍

