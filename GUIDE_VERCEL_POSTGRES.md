# 📘 Guide Étape par Étape : Créer Vercel Postgres

## 🎯 Objectif
Créer une base PostgreSQL sur Vercel et la connecter à votre projet Yunicity.

---

## 📋 Prérequis

- ✅ Compte Vercel (gratuit) : https://vercel.com/signup
- ✅ Projet GitHub avec votre code Yunicity
- ✅ Projet Vercel créé (ou prêt à être créé)

---

## 🚀 ÉTAPE 1 : Se Connecter à Vercel

1. **Aller sur** https://vercel.com
2. **Cliquer sur** "Log In" (en haut à droite)
3. **Se connecter** avec GitHub (recommandé) ou email

---

## 🗄️ ÉTAPE 2 : Accéder à votre Projet

### Option A : Projet Existant

1. **Dans le Dashboard Vercel**, cliquer sur votre projet "yunicity-website" (ou le nom de votre projet)
2. **Vous arrivez** sur la page du projet

### Option B : Créer un Nouveau Projet

1. **Cliquer sur** "Add New..." → "Project"
2. **Importer** votre repository GitHub
3. **Configurer** le projet (framework détecté automatiquement : Next.js)
4. **Cliquer sur** "Deploy" (on configurera la base après)

---

## 💾 ÉTAPE 3 : Créer la Base PostgreSQL

1. **Dans votre projet Vercel**, regarder le menu de gauche
2. **Cliquer sur** "Storage" (ou "Databases" selon la version)
3. **Cliquer sur** le bouton "Create Database" (ou "Add Database")
4. **Sélectionner** "Postgres" dans la liste des options

### Options de Configuration :

- **Name** : `yunicity-postgres` (ou un nom de votre choix)
- **Region** : Choisir la région la plus proche :
  - `fra1` (Francfort, Allemagne) - Recommandé pour la France
  - `iad1` (Washington, USA)
  - `sfo1` (San Francisco, USA)
  - `hnd1` (Tokyo, Japon)
- **Plan** : 
  - **Hobby** (Gratuit) : 256 MB de stockage, suffisant pour commencer
  - **Pro** : Payant, plus de stockage

5. **Cliquer sur** "Create" ou "Create Database"

⏱️ **Attendre** 1-2 minutes que la base soit créée.

---

## 🔑 ÉTAPE 4 : Récupérer les Informations de Connexion

Une fois la base créée :

1. **Cliquer sur** votre base `yunicity-postgres` dans la liste
2. **Vous verrez** plusieurs onglets : "Overview", ".env.local", "Settings", etc.
3. **Cliquer sur** l'onglet ".env.local" (ou "Connection String")

### Vous verrez quelque chose comme :

```bash
POSTGRES_URL="postgres://default:xxxxx@xxxxx.postgres.vercel-storage.com:5432/verceldb"
POSTGRES_PRISMA_URL="postgres://default:xxxxx@xxxxx.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15"
POSTGRES_URL_NON_POOLING="postgres://default:xxxxx@xxxxx.postgres.vercel-storage.com:5432/verceldb"
POSTGRES_USER="default"
POSTGRES_HOST="xxxxx.postgres.vercel-storage.com"
POSTGRES_PASSWORD="xxxxx"
POSTGRES_DATABASE="verceldb"
```

4. **⚠️ IMPORTANT** : Copier toutes ces valeurs (vous en aurez besoin)

---

## 📝 ÉTAPE 5 : Créer les Tables dans la Base

Vercel Postgres ne crée pas automatiquement vos tables. Vous devez exécuter le script `docker/init.sql`.

### Méthode 1 : Via l'Éditeur SQL de Vercel (Recommandé)

1. **Dans Vercel**, aller dans votre base `yunicity-postgres`
2. **Chercher** un onglet "SQL Editor" ou "Query" ou "Data"
3. **Ouvrir** l'éditeur SQL
4. **Copier** le contenu de `vercel-postgres-init.sql` depuis votre projet local
   - ⚠️ **IMPORTANT** : Utiliser `vercel-postgres-init.sql` (pas `docker/init.sql`)
   - Ce fichier est adapté pour Vercel Postgres (sans les commandes Docker)
5. **Coller** dans l'éditeur SQL
6. **Exécuter** la requête (bouton "Run" ou "Execute")

### Méthode 2 : Via psql (Ligne de Commande)

Si vous avez `psql` installé :

```bash
# Se connecter à la base
psql "POSTGRES_URL_QUE_VOUS_AVEZ_COPIE"

# Exécuter le script (utiliser vercel-postgres-init.sql)
\i vercel-postgres-init.sql
```

### Méthode 3 : Via pgAdmin (Si vous avez accès)

1. **Se connecter** à votre base Vercel Postgres via pgAdmin
2. **Ouvrir** Query Tool
3. **Copier-coller** le contenu de `vercel-postgres-init.sql`
4. **Exécuter**

---

## ⚙️ ÉTAPE 6 : Configurer les Variables d'Environnement sur Vercel

1. **Dans votre projet Vercel**, aller dans "Settings" (menu de gauche)
2. **Cliquer sur** "Environment Variables" (dans le menu Settings)
3. **Ajouter** les variables suivantes une par une :

### Variables à Ajouter :

#### 1. POSTGRES_URL
- **Key** : `POSTGRES_URL`
- **Value** : La valeur `POSTGRES_URL` que vous avez copiée à l'étape 4
- **Environments** : Cocher "Production", "Preview", "Development"
- **Cliquer sur** "Save"

#### 2. POSTGRES_PRISMA_URL
- **Key** : `POSTGRES_PRISMA_URL`
- **Value** : La valeur `POSTGRES_PRISMA_URL` copiée
- **Environments** : Production, Preview, Development
- **Save**

#### 3. POSTGRES_URL_NON_POOLING
- **Key** : `POSTGRES_URL_NON_POOLING`
- **Value** : La valeur `POSTGRES_URL_NON_POOLING` copiée
- **Environments** : Production, Preview, Development
- **Save**

#### 4. POSTGRES_USER
- **Key** : `POSTGRES_USER`
- **Value** : La valeur `POSTGRES_USER` copiée
- **Environments** : Production, Preview, Development
- **Save**

#### 5. POSTGRES_HOST
- **Key** : `POSTGRES_HOST`
- **Value** : La valeur `POSTGRES_HOST` copiée
- **Environments** : Production, Preview, Development
- **Save**

#### 6. POSTGRES_PASSWORD
- **Key** : `POSTGRES_PASSWORD`
- **Value** : La valeur `POSTGRES_PASSWORD` copiée
- **Environments** : Production, Preview, Development
- **Save**

#### 7. POSTGRES_DATABASE
- **Key** : `POSTGRES_DATABASE`
- **Value** : La valeur `POSTGRES_DATABASE` copiée
- **Environments** : Production, Preview, Development
- **Save**

#### 8. RESEND_API_KEY
- **Key** : `RESEND_API_KEY`
- **Value** : `re_gHsP4371_14nCyQeaJBGt97ekEn7wp6Zj` (votre clé Resend)
- **Environments** : Production, Preview, Development
- **Save**

#### 9. NEXT_PUBLIC_SITE_URL
- **Key** : `NEXT_PUBLIC_SITE_URL`
- **Value** : `https://votre-projet.vercel.app` (remplacer par votre URL Vercel)
- **Environments** : Production, Preview, Development
- **Save**

#### 10. NODE_ENV
- **Key** : `NODE_ENV`
- **Value** : `production`
- **Environments** : Production uniquement
- **Save**

---

## 🔄 ÉTAPE 7 : Redéployer le Projet

Après avoir ajouté toutes les variables :

1. **Aller dans** "Deployments" (menu de gauche)
2. **Cliquer sur** les "..." à droite du dernier déploiement
3. **Sélectionner** "Redeploy"
4. **Ou** faire un nouveau commit et push sur GitHub (déploiement automatique)

⏱️ **Attendre** 2-5 minutes que le déploiement se termine.

---

## ✅ ÉTAPE 8 : Vérifier que Tout Fonctionne

### 8.1 : Vérifier le Site

1. **Ouvrir** votre site Vercel (ex: `https://yunicity-website.vercel.app`)
2. **Vérifier** que le site charge correctement

### 8.2 : Tester l'Inscription Newsletter

1. **Aller à** la section "Rejoignez les 100 premiers testeurs"
2. **Remplir** le formulaire avec :
   - Nom : Test
   - Email : Votre email (ou `yu.entreprise@gmail.com` pour tester Resend)
3. **Cliquer sur** "S'inscrire maintenant"
4. **Vérifier** :
   - ✅ Message de succès affiché
   - ✅ Email de bienvenue reçu (si Resend configuré)

### 8.3 : Vérifier les Logs

1. **Dans Vercel**, aller dans "Deployments"
2. **Cliquer sur** le dernier déploiement
3. **Onglet** "Logs"
4. **Vérifier** qu'il n'y a pas d'erreurs PostgreSQL :
   - ❌ "Cannot connect to PostgreSQL" → Vérifier les variables d'environnement
   - ❌ "Table does not exist" → Exécuter `docker/init.sql`
   - ✅ "Ready" → Tout fonctionne !

### 8.4 : Vérifier les Données dans la Base

1. **Dans Vercel**, aller dans "Storage" → Votre base `yunicity-postgres`
2. **Onglet** "Data" ou "Tables"
3. **Vérifier** que les tables existent :
   - ✅ `newsletter_subscribers`
   - ✅ `contact_messages`
4. **Voir** vos abonnés dans `newsletter_subscribers`

---

## 🆘 Dépannage

### Erreur : "Cannot connect to PostgreSQL"

**Solutions** :
1. ✅ Vérifier que toutes les variables d'environnement sont bien ajoutées
2. ✅ Vérifier que les valeurs sont correctes (pas d'espaces, pas de guillemets en trop)
3. ✅ Vérifier que `NODE_ENV=production` est défini
4. ✅ Redéployer après avoir ajouté les variables

### Erreur : "Table does not exist"

**Solution** :
1. ✅ Exécuter `vercel-postgres-init.sql` dans l'éditeur SQL de Vercel
2. ✅ Vérifier que les tables sont créées dans l'onglet "Data"

### Erreur : "Resend API key invalid"

**Solution** :
1. ✅ Vérifier que `RESEND_API_KEY` est bien configurée sur Vercel
2. ✅ Vérifier que la clé est valide dans Resend Dashboard

### Emails non reçus

**Solutions** :
1. ✅ Vérifier les logs Resend dans le dashboard
2. ✅ Vérifier les spams
3. ✅ En mode test, utiliser `yu.entreprise@gmail.com` (email de votre compte Resend)

---

## 📊 ÉTAPE 9 : Surveiller la Base de Données

### Via Vercel Dashboard

1. **Storage** → Votre base → **Data**
2. **Voir** les tables et les données
3. **Exécuter** des requêtes SQL si besoin

### Via pgAdmin (Optionnel)

Si vous voulez utiliser pgAdmin avec Vercel Postgres :

1. **Récupérer** les informations de connexion (étape 4)
2. **Dans pgAdmin**, ajouter un nouveau serveur :
   - **Host** : `POSTGRES_HOST` (ex: `xxxxx.postgres.vercel-storage.com`)
   - **Port** : `5432`
   - **Database** : `POSTGRES_DATABASE` (ex: `verceldb`)
   - **Username** : `POSTGRES_USER` (ex: `default`)
   - **Password** : `POSTGRES_PASSWORD`
   - **SSL** : Requis (cocher "SSL mode: require")

---

## ✅ Checklist Finale

Avant de considérer que tout est prêt :

- ✅ Base Vercel Postgres créée
- ✅ Tables créées (`newsletter_subscribers`, `contact_messages`)
- ✅ Variables d'environnement configurées sur Vercel
- ✅ Projet redéployé
- ✅ Site accessible
- ✅ Inscription newsletter fonctionne
- ✅ Email de bienvenue reçu
- ✅ Données visibles dans la base

---

## 🎉 Félicitations !

Votre site Yunicity est maintenant en production avec :
- ✅ Base PostgreSQL hébergée (Vercel Postgres)
- ✅ Newsletter fonctionnelle
- ✅ Emails automatiques (Resend)
- ✅ Données persistantes

**Vous pouvez maintenant partager votre site avec les premiers testeurs ! 🚀**

---

## 📚 Ressources

- **Documentation Vercel Postgres** : https://vercel.com/docs/storage/vercel-postgres
- **Dashboard Vercel** : https://vercel.com/dashboard
- **Resend Dashboard** : https://resend.com/emails

