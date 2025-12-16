# 📧 ÉTAPE 1 : Configuration Resend pour les Emails de Bienvenue

## 🎯 Objectif
Configurer Resend pour envoyer automatiquement des emails de bienvenue aux nouveaux inscrits à la newsletter.

---

## 📝 Étape 1.1 : Créer un compte Resend (si vous n'en avez pas)

1. **Aller sur** : https://resend.com
2. **Cliquer sur** "Sign Up" (gratuit)
3. **Créer un compte** avec votre email
4. **Vérifier votre email** (lien de confirmation)

**Note** : Plan gratuit = 3000 emails/mois (largement suffisant pour commencer)

---

## 🔑 Étape 1.2 : Créer une API Key

1. **Dans le dashboard Resend**, aller dans **"API Keys"** (menu de gauche)
2. **Cliquer sur** "Create API Key"
3. **Nom** : `Yunicity Production` (ou `Yunicity Dev`)
4. **Permissions** : Laisser par défaut (Full Access)
5. **Cliquer sur** "Add"
6. **⚠️ IMPORTANT** : Copier la clé immédiatement (elle commence par `re_`)
   - Exemple : `re_1234567890abcdef...`
   - ⚠️ Vous ne pourrez plus la voir après !

---

## 📁 Étape 1.3 : Ajouter la clé dans .env.local

1. **Ouvrir** le fichier `.env.local` à la racine du projet
2. **Ajouter ou modifier** la ligne :
   ```bash
   RESEND_API_KEY=re_votre_clé_ici
   ```
   Remplacez `re_votre_clé_ici` par la clé que vous avez copiée

3. **Exemple complet** :
   ```bash
   # Base de données PostgreSQL (Docker)
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=yunicity_db
   DB_USER=yunicity
   DB_PASSWORD=yunicity123

   # Resend Email API
   RESEND_API_KEY=re_1234567890abcdefghijklmnopqrstuvwxyz

   # Next.js
   NEXT_PUBLIC_SITE_URL=http://localhost:3002
   NODE_ENV=development
   ```

4. **Sauvegarder** le fichier

---

## 🔄 Étape 1.4 : Redémarrer Docker pour prendre en compte la nouvelle variable

La variable `RESEND_API_KEY` est lue depuis `.env.local` et passée au conteneur Docker.

**Redémarrer le conteneur web** :
```powershell
cd C:\Users\kyria\yunicity-website
docker-compose restart web
```

**Attendre 10 secondes** que Next.js redémarre, puis vérifier :
```powershell
docker-compose logs web --tail 20
```

Vous devriez voir `✓ Ready` sans erreur.

---

## ✅ Étape 1.5 : Tester l'envoi d'email

1. **Ouvrir** http://localhost:3002 dans votre navigateur
2. **Aller à** la section "Rejoignez les 100 premiers testeurs"
3. **Remplir le formulaire** avec :
   - **Nom** : Votre nom
   - **Email** : **Votre vraie adresse email** (pour recevoir l'email de test)
4. **Cliquer sur** "S'inscrire maintenant"

### 🔍 Vérifications

#### ✅ Si ça fonctionne :
- ✅ Message de succès dans le navigateur
- ✅ Email reçu dans votre boîte (vérifier aussi les spams)
- ✅ Dans les logs Docker : `✅ Email envoyé avec succès à: votre@email.com`

#### ❌ Si ça ne fonctionne pas :

**Vérifier les logs Docker** :
```powershell
docker-compose logs web --tail 50 | Select-String -Pattern "email|Email|Resend|ERROR"
```

**Erreurs possibles** :
- `⚠️ Resend non configuré` → La clé n'est pas dans `.env.local` ou le conteneur n'a pas été redémarré
- `❌ Erreur Resend API` → La clé est invalide ou expirée
- `You can only send testing emails to your own email address` → En mode test, vous ne pouvez envoyer qu'à l'email de votre compte Resend

---

## 🎯 Résultat Attendu

Après configuration réussie :
- ✅ Les nouveaux inscrits reçoivent automatiquement un email de bienvenue
- ✅ L'email est professionnel avec le design Yunicity
- ✅ L'inscription fonctionne même si l'email échoue (non bloquant)

---

## 📚 Ressources

- **Documentation Resend** : https://resend.com/docs
- **Dashboard Resend** : https://resend.com/api-keys
- **Limites gratuites** : 3000 emails/mois, 100 emails/jour

---

## ⚠️ Note Importante

**En mode développement/test** :
- Resend permet d'envoyer des emails de test uniquement à l'adresse email de votre compte Resend
- Pour envoyer à n'importe quelle adresse, vous devez :
  1. Vérifier un domaine dans Resend (ex: `yunicity.fr`)
  2. Modifier `src/lib/email.ts` pour utiliser votre domaine :
     ```typescript
     from: 'YUNICITY <noreply@yunicity.fr>',
     ```

**Pour l'instant, testez avec l'email de votre compte Resend !**

---

## ✅ Prochaine Étape

Une fois Resend configuré et testé, on passera à **l'ÉTAPE 2 : Accéder à pgAdmin** pour visualiser les données.

