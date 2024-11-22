# Usar una imagen base de Node.js
FROM node:16

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto
COPY ./CoolFreshFront/package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar todo el código del proyecto
COPY ./CoolFreshFront ./

# Ejecutar la compilación de TypeScript
RUN npm run build

# Exponer el puerto en el que la app va a correr
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
