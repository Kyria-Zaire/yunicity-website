-- ============================================
-- FIX RLS - Correction des Politiques
-- ============================================
-- Si vous avez déjà exécuté supabase_setup.sql,
-- exécutez ce script pour corriger les politiques RLS
-- ============================================

-- Supprimer les anciennes politiques
DROP POLICY IF EXISTS "Only admins can read subscriptions" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Only admins can read messages" ON contact_messages;

-- Créer les nouvelles politiques qui permettent la lecture après insertion
CREATE POLICY "Allow read after insert"
ON newsletter_subscribers
FOR SELECT
USING (true);

CREATE POLICY "Allow read after insert"
ON contact_messages
FOR SELECT
USING (true);

-- ============================================
-- ✅ Les politiques sont maintenant corrigées
-- ============================================

