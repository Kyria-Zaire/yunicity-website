# 🔄 Réinitialisation complète de Docker PostgreSQL

## Problème
Le conteneur PostgreSQL a été créé avec l'ancien mot de passe et garde cette configuration même après modification de `docker-compose.yml`.

## Solution

### Option 1 : Script PowerShell (recommandé)

Exécutez le script `reset-docker.ps1` :

```powershell
.\reset-docker.ps1
```

### Option 2 : Commandes manuelles

```powershell
# 1. Arrêter et supprimer tout
docker-compose down -v

# 2. Attendre quelques secondes
Start-Sleep -Seconds 2

# 3. Recréer les conteneurs
docker-compose up -d

# 4. Vérifier que ça fonctionne
docker-compose exec postgres psql -U yunicity -d yunicity_db -c "SELECT 'Connexion OK' as status;"
```

## Après la réinitialisation

1. **Redémarrez le serveur Next.js** (si nécessaire)
2. **Testez l'inscription** à la newsletter
3. **Vérifiez les logs** - vous devriez voir `passwordExact: "yunicity123"`

## ⚠️ Attention

Cette opération **supprime toutes les données** de la base de données. Si vous avez des données importantes, sauvegardez-les d'abord !

