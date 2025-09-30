-- Solution temporaire : Désactiver RLS pour permettre les inscriptions
-- À exécuter dans Supabase SQL Editor

-- Désactiver RLS sur les tables (temporairement)
ALTER TABLE newsletter_subscribers DISABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages DISABLE ROW LEVEL SECURITY;

-- Vérification
SELECT 
  schemaname,
  tablename,
  rowsecurity as "RLS Activé"
FROM pg_tables 
WHERE tablename IN ('newsletter_subscribers', 'contact_messages');

-- Confirmation
SELECT 'RLS désactivé - Les inscriptions devraient maintenant fonctionner !' as message;
