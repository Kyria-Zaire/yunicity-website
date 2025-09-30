# 📱 Guide QR Code YUNICITY

## 🎯 3 Méthodes pour Générer votre QR Code

---

## **MÉTHODE 1 : Générateur HTML Intégré** ⚡ (RECOMMANDÉ)

### Étape 1 : Ouvrir le générateur
```
http://localhost:3002/qr-code-generator.html
```

Ou après déploiement :
```
https://yunicity-website.vercel.app/qr-code-generator.html
```

### Étape 2 : Télécharger
- Cliquez sur **"📥 Télécharger PNG"** (pour impression)
- Ou **"📄 Télécharger SVG"** (pour design vectoriel)

### ✅ Avantages
- QR Code aux couleurs Yunicity (violet)
- Haute qualité (256x256 ou 500x500)
- Téléchargement direct
- Gratuit, illimité

---

## **MÉTHODE 2 : Services en Ligne Gratuits** 🌐

### QR Code Monkey (Recommandé)
1. Allez sur : [https://www.qrcode-monkey.com/](https://www.qrcode-monkey.com/)
2. **Enter content** : `https://yunicity-website.vercel.app/`
3. **Customize** :
   - Color : `#8B5CF6` (violet Yunicity)
   - Logo : Uploadez `/public/yunicity-logo.png`
4. Téléchargez en PNG (haute résolution 2000x2000)

### QR Code Generator
1. Allez sur : [https://www.qr-code-generator.com/](https://www.qr-code-generator.com/)
2. URL : `https://yunicity-website.vercel.app/`
3. Customize colors : Violet `#8B5CF6`
4. Download PNG ou SVG

### Canva (Design pro)
1. Allez sur : [https://www.canva.com/](https://www.canva.com/)
2. Cherchez "QR Code"
3. Créez un design avec votre QR + logo + texte
4. Parfait pour flyers, cartes de visite !

---

## **MÉTHODE 3 : API Rapide** 🔧

### QR Server API (Instantané)

**PNG Simple** :
```
https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=https://yunicity-website.vercel.app/
```

**PNG avec couleurs Yunicity** :
```
https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=https://yunicity-website.vercel.app/&color=8B5CF6&bgcolor=ffffff
```

**SVG Vectoriel** :
```
https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=https://yunicity-website.vercel.app/&format=svg&color=8B5CF6
```

Clic droit → "Enregistrer l'image sous..."

---

## 🎨 **Utilisation du QR Code**

### **Pour l'Impression** 🖨️
- **Cartes de visite** : QR au verso
- **Flyers événements** : QR bien visible
- **Affiches** : QR en bas à droite
- **Présentations PowerPoint** : QR sur la slide finale

### **Pour le Digital** 💻
- **Posts Instagram/Facebook** : QR dans l'image
- **Email signature** : QR cliquable
- **PDF Pitch Deck** : QR sur la dernière page
- **Présentations** : QR pour que les investisseurs scannent

### **Pour les Événements** 🎪
- **Stand/Booth** : QR grand format affiché
- **Networking** : QR sur téléphone à montrer
- **Cartes NFC** : QR en backup

---

## 📐 **Tailles Recommandées**

### Impression
- **Carte de visite** : 2x2 cm (minimum)
- **Flyer A5** : 4x4 cm
- **Affiche A4** : 6x6 cm
- **Banner** : 10x10 cm

### Digital
- **Instagram Post** : 500x500 px
- **Email** : 300x300 px
- **Présentation** : 400x400 px
- **Site web** : 256x256 px

---

## 🎨 **Design Suggestions**

### **Option 1 : QR Simple**
- Fond : Blanc
- QR : Violet Yunicity (`#8B5CF6`)
- Texte en dessous : "Scannez pour découvrir Yunicity"

### **Option 2 : QR avec Logo**
- QR violet avec votre logo au centre
- Texte : "Rejoignez la révolution locale"
- Call to action : "Mars 2026"

### **Option 3 : QR dans un cadre design**
- Fond dégradé violet-bleu
- QR blanc au centre
- Slogan : "Faire battre le cœur de la ville"

---

## 📊 **Tracking (Optionnel)**

Pour savoir combien de personnes scannent :

### Utiliser un URL Shortener avec Analytics
1. **Bitly** : https://bitly.com/
   - Créez un lien court : `bit.ly/yunicity`
   - QR Code pointe vers ce lien
   - Vous aurez les stats de scans !

2. **UTM Parameters**
   ```
   https://yunicity-website.vercel.app/?utm_source=qrcode&utm_medium=print&utm_campaign=prelancement
   ```
   - Trackable avec Google Analytics

---

## 🚀 **Action Immédiate**

### Pour tester MAINTENANT :

1. **Ouvrez** : http://localhost:3002/qr-code-generator.html
2. **Téléchargez** le QR Code
3. **Scannez avec votre téléphone** pour tester !

---

## 📄 **Exemples d'Usage**

### Carte de Visite Digitale
```
┌─────────────────────┐
│   YUNICITY          │
│   La super-app      │
│   locale            │
│                     │
│   [QR CODE]         │
│                     │
│   Mars 2026         │
│   Reims, France     │
└─────────────────────┘
```

### Post Instagram
```
[IMAGE avec QR Code]

🚀 Scannez pour découvrir YUNICITY !

La première super-app qui reconnecte 
les habitants à leur territoire.

📍 Lancement à Reims - Mars 2026
👑 Devenez membre fondateur !

#Yunicity #Reims #AppLocale
```

---

**Voulez-vous que je vous aide à créer un design spécifique avec le QR code (flyer, carte de visite, etc.) ?** 🎨

Ou le générateur HTML suffit pour l'instant ?
