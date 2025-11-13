# 📊 Structure des Tables Supabase - YUNICITY

## ✅ Tables Existantes

### 1. `contact_messages`
**Colonnes visibles :**
- ✅ `id` (uuid)
- ✅ `name` (text)
- ✅ `email` (text)
- ✅ `company` (text, nullable)

**Colonnes requises par le code (à vérifier) :**
- ⚠️ `phone` (text, nullable)
- ⚠️ `subject` (text, not null)
- ⚠️ `message` (text, not null)
- ⚠️ `type` (text, not null) - 'general' | 'investor' | 'partnership' | 'press'
- ⚠️ `status` (text, default: 'new') - 'new' | 'read' | 'replied'
- ⚠️ `created_at` (timestamp, default: now())

### 2. `newsletter_subscribers`
**Colonnes requises :**
- ✅ `id` (uuid, primary key)
- ✅ `email` (text, unique, not null)
- ✅ `name` (text, not null)
- ✅ `interests` (text[], default: [])
- ✅ `status` (text, default: 'active') - 'active' | 'unsubscribed'
- ✅ `created_at` (timestamp, default: now())

## 🔧 SQL pour Vérifier/Créer les Tables

### Table `contact_messages` (Complète)
```sql
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('general', 'investor', 'partnership', 'press')),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour les recherches
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
```

### Table `newsletter_subscribers` (Complète)
```sql
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  interests TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour les recherches
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_status ON newsletter_subscribers(status);
```

## ⚠️ Actions Requises dans Supabase

1. **Vérifier les colonnes manquantes** dans `contact_messages`
2. **Ajouter les colonnes manquantes** si nécessaire
3. **Vérifier les contraintes** (unique sur email pour newsletter)
4. **Activer RLS** (Row Level Security) si nécessaire pour la sécurité

## 🔒 Sécurité (RLS)

**Recommandation :** Activer RLS pour les tables sensibles :

```sql
-- Pour newsletter_subscribers
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Politique : Les utilisateurs peuvent insérer leurs propres données
CREATE POLICY "Users can insert their own subscription"
ON newsletter_subscribers
FOR INSERT
WITH CHECK (true);

-- Politique : Seuls les admins peuvent lire
CREATE POLICY "Only admins can read subscriptions"
ON newsletter_subscribers
FOR SELECT
USING (auth.role() = 'service_role');

-- Pour contact_messages
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert their own messages"
ON contact_messages
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Only admins can read messages"
ON contact_messages
FOR SELECT
USING (auth.role() = 'service_role');
```

