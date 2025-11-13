# ⚠️ Problème avec yunicity-website.vercel.app

## ❌ Pourquoi ça ne fonctionnera PAS

### 1. **Limitation Vercel**
- Les domaines `.vercel.app` sont gérés par Vercel
- **Vous ne pouvez PAS modifier les DNS** de ces domaines
- Resend a besoin d'ajouter des enregistrements DNS (TXT, CNAME) pour vérifier le domaine
- **Impossible** avec un domaine Vercel

### 2. **Ce qui va se passer**
1. Vous ajoutez `yunicity-website.vercel.app` dans Resend
2. Resend vous donne des enregistrements DNS à ajouter
3. **Vous ne pouvez pas les ajouter** (pas d'accès DNS)
4. Le domaine ne sera **jamais vérifié**
5. Les emails ne fonctionneront pas

---

## ✅ Solutions

### Solution 1 : Utiliser un domaine propre (RECOMMANDÉ)

**Si vous avez le domaine `yunicity.fr` :**

1. **Dans Resend, changer le domaine** :
   - Au lieu de `yunicity-website.vercel.app`
   - Utiliser : `yunicity.fr`

2. **Ajouter les DNS** chez votre registrar (OVH, Gandi, etc.)

3. **Une fois vérifié**, changer le code :
   ```typescript
   from: 'YUNICITY <noreply@yunicity.fr>'
   ```

---

### Solution 2 : Continuer avec onboarding@resend.dev (TEMPORAIRE)

**Pour le développement et les tests :**

1. **Annuler l'ajout** de `yunicity-website.vercel.app`
2. **Garder** `onboarding@resend.dev` dans le code
3. **Tester uniquement** avec `yu.entreprise@gmail.com`
4. **Pour la production**, vous devrez avoir un domaine propre

**Avantages :**
- ✅ Fonctionne immédiatement
- ✅ Pas de configuration DNS
- ✅ Parfait pour les tests

**Limitations :**
- ⚠️ Emails uniquement à `yu.entreprise@gmail.com`
- ⚠️ Pas idéal pour la production

---

## 🎯 Recommandation

**Pour le moment :**
1. **Annuler** l'ajout de `yunicity-website.vercel.app`
2. **Continuer** avec `onboarding@resend.dev`
3. **Tester** avec `yu.entreprise@gmail.com`

**Pour la production (Mars 2026) :**
1. **Acheter/Configurer** le domaine `yunicity.fr`
2. **Vérifier** le domaine dans Resend
3. **Changer** le `from` dans le code

---

## ❓ Questions

1. **Avez-vous le domaine `yunicity.fr` ?**
   - Oui → On peut le vérifier maintenant
   - Non → On reste avec `onboarding@resend.dev` pour le moment

2. **Quand prévoyez-vous d'avoir le domaine `yunicity.fr` ?**
   - Avant le lancement → On peut le configurer plus tard
   - Pas prévu → On reste avec la limitation

---

**Action immédiate :** Annulez l'ajout de `yunicity-website.vercel.app` et dites-moi si vous avez `yunicity.fr` ! 🔧

