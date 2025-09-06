FROM php:8.2-fpm

RUN docker-php-ext-install pdo pdo_mysql
WORKDIR /var/www/html

COPY php.ini /usr/local/etc/php/