# 🗄️ ÉTAPE 2 : Accéder à pgAdmin (Interface Graphique PostgreSQL)

## 🎯 Objectif
Utiliser pgAdmin pour visualiser et gérer les données de la base PostgreSQL via une interface graphique.

---

## 🌐 Étape 2.1 : Accéder à pgAdmin

1. **Ouvrir votre navigateur** (Chrome, Firefox, Edge, etc.)
2. **Aller à l'adresse** : http://localhost:5050
3. **Page de connexion** : Vous devriez voir la page de connexion pgAdmin

---

## 🔐 Étape 2.2 : Se connecter à pgAdmin

**Identifiants de connexion** :
- **Email** : `admin@yunicity.dev`
- **Mot de passe** : `admin`

1. **Entrer l'email** : `admin@yunicity.dev`
2. **Entrer le mot de passe** : `admin`
3. **Cliquer sur** "Login" ou "Se connecter"

---

## 🔗 Étape 2.3 : Se connecter au serveur PostgreSQL

Une fois connecté à pgAdmin, vous devez ajouter le serveur PostgreSQL :

### Option A : Si pgAdmin vous demande d'ajouter un serveur

1. **Clic droit** sur "Servers" (dans le panneau de gauche)
2. **Sélectionner** "Register" → "Server..."
3. **Remplir les informations** :

   **Onglet "General"** :
   - **Name** : `Yunicity PostgreSQL` (ou un nom de votre choix)

   **Onglet "Connection"** :
   - **Host name/address** : `postgres` (nom du service Docker)
   - **Port** : `5432`
   - **Maintenance database** : `yunicity_db`
   - **Username** : `yunicity`
   - **Password** : `yunicity123`
   - **☑️ Save password** (cocher pour sauvegarder le mot de passe)

4. **Cliquer sur** "Save"

### Option B : Si le serveur est déjà configuré

Si vous voyez déjà un serveur dans la liste, **double-cliquez dessus** et entrez le mot de passe si demandé.

---

## 📊 Étape 2.4 : Explorer la base de données

Une fois connecté au serveur PostgreSQL :

1. **Développer** le serveur "Yunicity PostgreSQL" (flèche à gauche)
2. **Développer** "Databases"
3. **Développer** "yunicity_db"
4. **Développer** "Schemas"
5. **Développer** "public"
6. **Développer** "Tables"

Vous devriez voir deux tables :
- ✅ `newsletter_subscribers` (abonnés à la newsletter)
- ✅ `contact_messages` (messages de contact)

---

## 👥 Étape 2.5 : Voir les abonnés à la newsletter

1. **Clic droit** sur la table `newsletter_subscribers`
2. **Sélectionner** "View/Edit Data" → "All Rows"
3. **Voir les données** : Vous verrez tous les abonnés avec :
   - `id` : Identifiant unique (UUID)
   - `email` : Adresse email
   - `name` : Nom de l'abonné
   - `interests` : Centres d'intérêt (tableau)
   - `status` : Statut (active/unsubscribed)
   - `created_at` : Date d'inscription
   - `updated_at` : Date de dernière mise à jour

### Exécuter une requête SQL personnalisée

1. **Clic droit** sur `newsletter_subscribers`
2. **Sélectionner** "Query Tool"
3. **Taper une requête**, par exemple :
   ```sql
   SELECT email, name, created_at 
   FROM newsletter_subscribers 
   ORDER BY created_at DESC;
   ```
4. **Cliquer sur** "Execute" (ou F5)

---

## 📧 Étape 2.6 : Voir les messages de contact

1. **Clic droit** sur la table `contact_messages`
2. **Sélectionner** "View/Edit Data" → "All Rows"
3. **Voir les données** : Tous les messages de contact avec :
   - `id` : Identifiant unique
   - `name` : Nom de l'expéditeur
   - `email` : Email de l'expéditeur
   - `subject` : Sujet du message
   - `message` : Contenu du message
   - `type` : Type (general/investor/partnership/press)
   - `status` : Statut (new/read/replied)
   - `created_at` : Date de réception

---

## 🎨 Fonctionnalités utiles de pgAdmin

### 1. **Exporter les données**
- **Clic droit** sur une table → "Backup..."
- Choisir le format (CSV, SQL, etc.)
- Exporter toutes les données ou une sélection

### 2. **Modifier les données**
- **Clic droit** sur une table → "View/Edit Data" → "All Rows"
- **Double-cliquer** sur une cellule pour modifier
- **Sauvegarder** avec Ctrl+S

### 3. **Créer une nouvelle requête**
- **Clic droit** sur la base de données → "Query Tool"
- Écrire votre requête SQL
- **Exécuter** avec F5

### 4. **Voir la structure d'une table**
- **Clic droit** sur une table → "Properties"
- Voir les colonnes, types, contraintes, index, etc.

---

## 🔍 Requêtes SQL utiles

### Compter les abonnés
```sql
SELECT COUNT(*) as total_abonnes 
FROM newsletter_subscribers 
WHERE status = 'active';
```

### Voir les derniers abonnés
```sql
SELECT email, name, created_at 
FROM newsletter_subscribers 
ORDER BY created_at DESC 
LIMIT 10;
```

### Voir les messages non lus
```sql
SELECT name, email, subject, created_at 
FROM contact_messages 
WHERE status = 'new' 
ORDER BY created_at DESC;
```

### Statistiques par type de contact
```sql
SELECT type, COUNT(*) as nombre 
FROM contact_messages 
GROUP BY type;
```

---

## ⚠️ Notes importantes

1. **Sécurité** : pgAdmin est accessible uniquement en local (localhost:5050)
2. **Mot de passe** : Le mot de passe par défaut est `admin` - changez-le en production
3. **Connexion** : Le serveur PostgreSQL utilise le nom `postgres` (nom du service Docker)
4. **Données** : Toutes les modifications sont en temps réel dans la base de données

---

## ✅ Vérification

Après avoir suivi ces étapes, vous devriez :
- ✅ Être connecté à pgAdmin
- ✅ Voir la base de données `yunicity_db`
- ✅ Voir les tables `newsletter_subscribers` et `contact_messages`
- ✅ Pouvoir visualiser les données des abonnés

---

## 🎯 Prochaine Étape

Une fois que vous maîtrisez pgAdmin, on passera à **l'ÉTAPE 3 : Préparer le déploiement en production**.

