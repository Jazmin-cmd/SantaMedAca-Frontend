# Etapa de construcción con Node
FROM node:20-alpine AS build 

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# -----------------------------
# Etapa final: servidor Apache
# -----------------------------
FROM php:8.2-apache

# Cambiar el DocumentRoot de Apache a /var/www/html
ENV APACHE_DOCUMENT_ROOT=/var/www/html

# Copiar los archivos compilados de Vite al DocumentRoot
COPY --from=build /app/dist/ /var/www/html/

# Habilitar mod_rewrite (útil para rutas SPA)
RUN a2enmod rewrite

EXPOSE 3000

CMD ["apache2-foreground"]
