# Script PowerShell pour réinitialiser complètement Docker PostgreSQL

Write-Host "🔄 Arrêt et suppression des conteneurs et volumes..." -ForegroundColor Yellow
docker-compose down -v

Write-Host "⏳ Attente de 2 secondes..." -ForegroundColor Yellow
Start-Sleep -Seconds 2

Write-Host "🚀 Recréation des conteneurs avec le nouveau mot de passe..." -ForegroundColor Green
docker-compose up -d

Write-Host "⏳ Attente que PostgreSQL soit prêt..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

Write-Host "✅ Vérification de la connexion..." -ForegroundColor Green
docker-compose exec postgres psql -U yunicity -d yunicity_db -c "SELECT 'Connexion OK' as status;"Option 2 : Continuer avec Docker

Write-Host ""
Write-Host "✅ Terminé ! Vous pouvez maintenant tester l'inscription." -ForegroundColor Green

