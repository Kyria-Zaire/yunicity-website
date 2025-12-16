-- Script pour réinitialiser le mot de passe de l'utilisateur yunicity
ALTER USER yunicity WITH PASSWORD 'yunicity123';

-- Vérifier que le mot de passe a été changé
SELECT 'Mot de passe réinitialisé pour yunicity' as status;

