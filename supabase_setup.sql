-- ============================================
-- YUNICITY - Script de Configuration Supabase
-- ============================================
-- Ce script supprime et recrée les tables proprement
-- À exécuter dans Supabase SQL Editor
-- ============================================

-- ============================================
-- 1. SUPPRESSION DES ANCIENNES TABLES
-- ============================================

-- Supprimer les tables existantes (si elles existent)
DROP TABLE IF EXISTS contact_messages CASCADE;
DROP TABLE IF EXISTS newsletter_subscribers CASCADE;

-- ============================================
-- 2. CRÉATION DE LA TABLE newsletter_subscribers
-- ============================================

CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  interests TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour améliorer les performances
CREATE INDEX idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX idx_newsletter_subscribers_status ON newsletter_subscribers(status);
CREATE INDEX idx_newsletter_subscribers_created_at ON newsletter_subscribers(created_at DESC);

-- Commentaires pour documentation
COMMENT ON TABLE newsletter_subscribers IS 'Table des abonnés à la newsletter Yunicity';
COMMENT ON COLUMN newsletter_subscribers.email IS 'Email unique de l''abonné';
COMMENT ON COLUMN newsletter_subscribers.name IS 'Nom de l''abonné';
COMMENT ON COLUMN newsletter_subscribers.interests IS 'Centres d''intérêt de l''abonné (tableau)';
COMMENT ON COLUMN newsletter_subscribers.status IS 'Statut: active ou unsubscribed';
COMMENT ON COLUMN newsletter_subscribers.created_at IS 'Date d''inscription';

-- ============================================
-- 3. CRÉATION DE LA TABLE contact_messages
-- ============================================

CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'general' CHECK (type IN ('general', 'investor', 'partnership', 'press')),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour améliorer les performances
CREATE INDEX idx_contact_messages_status ON contact_messages(status);
CREATE INDEX idx_contact_messages_type ON contact_messages(type);
CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX idx_contact_messages_email ON contact_messages(email);

-- Commentaires pour documentation
COMMENT ON TABLE contact_messages IS 'Table des messages de contact reçus';
COMMENT ON COLUMN contact_messages.name IS 'Nom du contact';
COMMENT ON COLUMN contact_messages.email IS 'Email du contact';
COMMENT ON COLUMN contact_messages.company IS 'Société du contact (optionnel)';
COMMENT ON COLUMN contact_messages.phone IS 'Téléphone du contact (optionnel)';
COMMENT ON COLUMN contact_messages.subject IS 'Sujet du message';
COMMENT ON COLUMN contact_messages.message IS 'Contenu du message';
COMMENT ON COLUMN contact_messages.type IS 'Type: general, investor, partnership, press';
COMMENT ON COLUMN contact_messages.status IS 'Statut: new, read, replied';
COMMENT ON COLUMN contact_messages.created_at IS 'Date de réception du message';

-- ============================================
-- 4. ROW LEVEL SECURITY (RLS)
-- ============================================
-- Optionnel mais recommandé pour la sécurité

-- Activer RLS sur newsletter_subscribers
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Politique : Permettre l'insertion pour tous (inscription newsletter)
CREATE POLICY "Allow public newsletter subscription"
ON newsletter_subscribers
FOR INSERT
WITH CHECK (true);

-- Politique : Permettre la lecture pour les insertions (nécessaire pour .select() après .insert())
-- On permet la lecture publique car on a besoin de retourner les données après insertion
CREATE POLICY "Allow read after insert"
ON newsletter_subscribers
FOR SELECT
USING (true);

-- Activer RLS sur contact_messages
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Politique : Permettre l'insertion pour tous (formulaire contact)
CREATE POLICY "Allow public contact messages"
ON contact_messages
FOR INSERT
WITH CHECK (true);

-- Politique : Permettre la lecture pour les insertions (nécessaire pour .select() après .insert())
-- On permet la lecture publique car on a besoin de retourner les données après insertion
CREATE POLICY "Allow read after insert"
ON contact_messages
FOR SELECT
USING (true);

-- ============================================
-- 5. VÉRIFICATION
-- ============================================

-- Vérifier que les tables sont créées
SELECT 
  table_name,
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns
WHERE table_name IN ('newsletter_subscribers', 'contact_messages')
ORDER BY table_name, ordinal_position;

-- Afficher les contraintes
SELECT 
  tc.table_name,
  tc.constraint_name,
  tc.constraint_type
FROM information_schema.table_constraints tc
WHERE tc.table_name IN ('newsletter_subscribers', 'contact_messages')
ORDER BY tc.table_name, tc.constraint_type;

-- ============================================
-- FIN DU SCRIPT
-- ============================================
-- ✅ Les tables sont maintenant créées proprement
-- ✅ RLS est activé pour la sécurité
-- ✅ Tous les index sont en place
-- ✅ Prêt pour les tests !
-- ============================================

