FROM node:20-alpine

WORKDIR /app

# Installer pg
RUN npm install pg dotenv

# Copier le script de test
COPY test-connection.js .

CMD ["node", "test-connection.js"]

