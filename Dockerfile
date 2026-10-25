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
FROM php:8.3-apache

COPY --from=build /app/dist/ /var/www/html/

RUN a2enmod rewrite

RUN printf '<Directory /var/www/html>\n\
    Options -Indexes\n\
    AllowOverride None\n\
    Require all granted\n\
    FallbackResource /index.html\n\
</Directory>\n' > /etc/apache2/conf-available/spa.conf \
 && a2enconf spa

EXPOSE 80
CMD ["apache2-foreground"]
