FROM node:20-alpine

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm ci

# Copier le reste du code
COPY . .

# Exposer le port Next.js
EXPOSE 3000

# Commande par défaut (peut être surchargée dans docker-compose.yml)
CMD ["npm", "run", "dev"]

