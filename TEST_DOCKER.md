# 🧪 Test de la configuration Docker complète

## ✅ Services démarrés

- ✅ PostgreSQL : Port 5432
- ✅ pgAdmin : Port 5050  
- ✅ Next.js : Port 3002 (mappé depuis 3000 dans le conteneur)

## 🧪 Test de l'inscription newsletter

1. **Ouvrez votre navigateur** : http://localhost:3002
2. **Allez à la section newsletter** (faites défiler jusqu'à "Rejoignez les 100 premiers testeurs")
3. **Remplissez le formulaire** avec :
   - Nom : Test
   - Email : test@example.com
4. **Cliquez sur "S'inscrire maintenant"**

## 📊 Vérifier les logs

Si vous voulez voir ce qui se passe en temps réel :

```bash
# Logs de Next.js
docker-compose logs -f web

# Logs de PostgreSQL
docker-compose logs -f postgres

# Tous les logs
docker-compose logs -f
```

## ✅ Vérifier dans la base de données

Pour vérifier que les données sont bien sauvegardées :

```bash
docker-compose exec postgres psql -U yunicity -d yunicity_db -c "SELECT * FROM newsletter_subscribers;"
```

## 🎉 Résultat attendu

Si tout fonctionne, vous devriez voir :
- ✅ Un message de succès dans l'interface
- ✅ Les données dans la base de données PostgreSQL
- ✅ Pas d'erreur dans les logs

