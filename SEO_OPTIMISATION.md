# 🧠 Optimisation SEO - Yunicity

## ✅ Checklist SEO Technique Complétée

### 1. Title + Meta Description ✅
- **Titre optimisé** : "Yunicity – La Super-App Locale de Reims | Événements, Quartiers & Vie Locale"
- **Description optimisée** : "Yunicity reconnecte les habitants à leur ville : événements, quartiers, commerces, communautés et actualités locales. La première super-app locale 100% Reims."
- **Mots-clés ciblés** :
  - app locale Reims
  - événements Reims
  - vie locale Reims
  - réseau social local
  - smart city France
  - bons plans Reims
  - carte quartiers Reims

### 2. Open Graph (Facebook / LinkedIn) ✅
- Title : "Yunicity – La Super-App Locale de Reims"
- Description : "Événements, quartiers, commerces, communautés locales."
- Type : website
- Locale : fr_FR
- Images : `/yunicity-logo.png` (1200x630)

### 3. Sitemap + robots.txt ✅
- **Sitemap** : `/sitemap.xml` (généré automatiquement par Next.js)
- **robots.txt** : Configuré avec :
  ```
  User-agent: *
  Allow: /
  Disallow: /api/, /_next/
  Sitemap: https://yunicity-website.vercel.app/sitemap.xml
  ```

### 4. Schema.org (JSON-LD) ✅
Schémas implémentés :
- ✅ **Organization** : Informations sur Yunicity
- ✅ **LocalBusiness** : Pour le référencement local Reims
- ✅ **SoftwareApplication** : Pour l'app mobile
- ✅ **WebSite** : Pour le site web avec SearchAction

**Schémas à ajouter plus tard** :
- ⏳ **Event** : Pour les événements locaux (quand le flux sera disponible)

### 5. Optimisation Images ✅
- ✅ Utilisation de `next/image` pour toutes les images
- ✅ Lazy loading activé par défaut
- ⚠️ **À faire** : Convertir les images en WebP
- ⚠️ **À faire** : Optimiser la taille des images (max 200-300 Ko)

### 6. Speed (Core Web Vitals) ⚠️
**Optimisations à effectuer** :
- ⚠️ Réduire les gros gradients CSS lourds
- ⚠️ Utiliser prefetch/preload pour les fonts
- ⚠️ Réduire la taille des images des villes
- ⚠️ Passer au système de fonts local (éviter Google Fonts)

## 🎯 Objectifs SEO Territoriaux

### Mots-clés ciblés :
1. ✅ "app locale Reims"
2. ✅ "événements Reims"
3. ✅ "vie locale Reims"
4. ✅ "réseau social local"
5. ✅ "smart city France"
6. ✅ "bons plans Reims"
7. ✅ "carte quartiers Reims"

### Stratégie SEO Territorial + Startup
- Focus sur Reims comme ville pilote
- Mots-clés locaux intégrés dans les métadonnées
- Schema.org LocalBusiness pour le référencement local
- Géolocalisation dans les métadonnées (geo.region, geo.placename, geo.position)

## 📋 Prochaines Étapes

1. **Créer l'image OG** (1200x630px) avec le logo et le texte "Yunicity – La Super-App Locale de Reims"
2. **Optimiser les images** : Convertir en WebP et réduire la taille
3. **Optimiser la vitesse** : Réduire les gradients, optimiser les fonts
4. **Ajouter le schéma Event** : Quand le flux d'événements sera disponible
5. **Créer du contenu local** : Articles/blog sur Reims pour renforcer le SEO local

## 🔍 Vérification

Pour vérifier le SEO :
1. **Google Search Console** : Ajouter le site et vérifier l'indexation
2. **Rich Results Test** : https://search.google.com/test/rich-results
3. **PageSpeed Insights** : https://pagespeed.web.dev/
4. **Schema Markup Validator** : https://validator.schema.org/

## 📝 Notes

- Les métadonnées sont optimisées pour le référencement local Reims
- Le Schema.org inclut LocalBusiness pour améliorer le référencement local
- Les mots-clés territoriaux sont intégrés dans les métadonnées
- Le sitemap est généré automatiquement par Next.js
- robots.txt est configuré correctement

