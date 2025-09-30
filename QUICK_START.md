# ⚡ Quick Start - YUNICITY

## 🚀 Démarrage Rapide (5 minutes)

### 1. Installation
```bash
npm install
```

### 2. Configuration Supabase
1. Créez un compte sur [supabase.com](https://supabase.com)
2. Créez un nouveau projet
3. Allez dans **SQL Editor** et exécutez le fichier `supabase-schema.sql`
4. Copiez vos clés depuis **Settings > API**

### 3. Configuration Resend (Emails)
1. Créez un compte sur [resend.com](https://resend.com)
2. Créez une API key
3. Copiez la clé

### 4. Variables d'environnement
Créez `.env.local` à la racine :
```bash
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_anon_key
RESEND_API_KEY=re_votre_api_key
```

### 5. Créer le service d'emails
Créez le fichier `src/lib/email.ts` (template dans SETUP.md section 4)

### 6. Lancer
```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

### 7. Tester
- Newsletter : http://localhost:3000/#newsletter
- Contact : http://localhost:3000/contact
- Investir : http://localhost:3000/investir

---

## 📚 Documentation Complète
Pour plus de détails, consultez :
- **[SETUP.md](./SETUP.md)** - Guide complet
- **[README.md](./README.md)** - Documentation projet
- **[CHANGELOG.md](./CHANGELOG.md)** - Historique des changements

---

## 🆘 Problèmes ?
Contactez : yu.entreprise@gmail.com
