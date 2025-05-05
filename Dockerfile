FROM node:18-alpine
WORKDIR /usr/src/app

# Copia package.json e instala deps
COPY package*.json ./
RUN npm install

# Copia o resto e define comando padrão
COPY . .
CMD ["npm", "run", "dev"]
