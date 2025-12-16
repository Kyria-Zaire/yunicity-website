#!/bin/sh
# Script pour configurer pg_hba.conf avec trust pour développement

# Attendre que PostgreSQL soit prêt
until pg_isready -U yunicity; do
  sleep 1
done

# Modifier pg_hba.conf pour utiliser trust pour toutes les connexions
echo "host all all 0.0.0.0/0 trust" >> /var/lib/postgresql/data/pg_hba.conf

# Recharger la configuration PostgreSQL
psql -U yunicity -d yunicity_db -c "SELECT pg_reload_conf();"

echo "✅ pg_hba.conf configuré avec trust"

