# 🐳 Configuration Next.js dans Docker

## ✅ Solution implémentée

Next.js tourne maintenant aussi dans Docker, ce qui résout le problème d'authentification PostgreSQL depuis Windows.

## 🚀 Utilisation

### Démarrer tous les services

```bash
docker-compose up
```

Cela démarre :
- ✅ PostgreSQL (port 5432)
- ✅ pgAdmin (port 5050)
- ✅ Next.js (port 3000)

### Accéder à l'application

- **Application Next.js** : http://localhost:3000
- **pgAdmin** : http://localhost:5050

### Arrêter les services

```bash
docker-compose down
```

### Voir les logs

```bash
# Tous les services
docker-compose logs -f

# Seulement Next.js
docker-compose logs -f web

# Seulement PostgreSQL
docker-compose logs -f postgres
```

## 🔧 Configuration

### Variables d'environnement

Les variables sont définies dans `docker-compose.yml` pour le service `web` :
- `DB_HOST=postgres` (nom du service Docker)
- `DB_PORT=5432`
- `DB_NAME=yunicity_db`
- `DB_USER=yunicity`
- `DB_PASSWORD=yunicity123`

### Hot Reload

Le code est monté en volume, donc les modifications sont prises en compte automatiquement (hot reload).

## 📝 Notes

- Le service `web` dépend de `postgres` et attend qu'il soit `healthy`
- Les `node_modules` sont exclus du volume pour éviter les conflits
- Le dossier `.next` est aussi exclu pour forcer une recompilation propre

## 🐛 Dépannage

### Le service web ne démarre pas
```bash
docker-compose logs web
```

### Rebuild l'image
```bash
docker-compose build web
docker-compose up
```

### Accéder au shell du conteneur web
```bash
docker-compose exec web sh
```

