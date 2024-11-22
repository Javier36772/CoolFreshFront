# Usa una imagen de Node.js
FROM node:16

WORKDIR /app

# Copia los archivos de configuración y dependencias
COPY package.json tsconfig.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente a la imagen
COPY . .

RUN chmod +x ./node_modules/.bin/tsc

# Compila el código Typescript a JavaScript
RUN npm run build

# Expone el puerto en el que la API escuhará
EXPOSE 3000

# Comando para inicar la aplicación 
CMD ["npm", "start"]