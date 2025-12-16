# 🔄 Instructions de redémarrage complet

## Problème
Le serveur Next.js peut mettre en cache les modules et les variables d'environnement. Il faut forcer un redémarrage complet.

## Solution

### 1. Arrêter complètement le serveur
- Dans le terminal où `npm run dev` tourne, appuyez sur **Ctrl+C**
- Attendez que le processus se termine complètement

### 2. Supprimer le cache Next.js
```powershell
Remove-Item -Recurse -Force .next
```

### 3. Vérifier le fichier .env.local
Assurez-vous que votre `.env.local` contient bien :
```env
DB_HOST=127.0.0.1
DB_PORT=5432
DB_NAME=yunicity_db
DB_USER=yunicity
DB_PASSWORD=yunicity123
```

### 4. Redémarrer le serveur
```powershell
npm run dev
```

### 5. Tester l'inscription
- Ouvrez http://localhost:3001 (ou le port affiché)
- Testez l'inscription à la newsletter
- Vérifiez les logs dans le terminal pour voir les détails de connexion

## Si ça ne fonctionne toujours pas

Vérifiez que Docker est bien démarré :
```powershell
docker-compose ps
```

Les deux conteneurs doivent être "Up" :
- `yunicity-postgres` doit être "Up" et "healthy"
- `yunicity-pgadmin` peut être "Restarting" (ce n'est pas grave)

