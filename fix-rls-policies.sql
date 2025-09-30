-- Script de correction des policies RLS
-- À exécuter dans Supabase SQL Editor

-- 1. Supprimer les anciennes policies
DROP POLICY IF EXISTS "Permettre insertion newsletter" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Lecture newsletter admin" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Permettre insertion contact" ON contact_messages;
DROP POLICY IF EXISTS "Lecture contact admin" ON contact_messages;

-- 2. Créer les nouvelles policies corrigées

-- Newsletter : Permettre à tout le monde d'insérer (authentifié ou non)
CREATE POLICY "Enable insert for all users" 
ON newsletter_subscribers 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Newsletter : Lecture uniquement pour les utilisateurs authentifiés (admin)
CREATE POLICY "Enable read for authenticated users only" 
ON newsletter_subscribers 
FOR SELECT 
TO authenticated
USING (true);

-- Contact : Permettre à tout le monde d'insérer (authentifié ou non)
CREATE POLICY "Enable insert for all users" 
ON contact_messages 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Contact : Lecture uniquement pour les utilisateurs authentifiés (admin)
CREATE POLICY "Enable read for authenticated users only" 
ON contact_messages 
FOR SELECT 
TO authenticated
USING (true);

-- Confirmation
SELECT 'Policies RLS corrigées avec succès !' as message;
