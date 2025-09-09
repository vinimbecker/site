FROM php:8.4.12-apache 
 
# Install dependencies for the operating system software
RUN apt update && apt install -y \
    g++ \
    libicu-dev \
    libpq-dev \
    libzip-dev \
    zip \
    zlib1g-dev \
    unzip \
    libonig-dev \
    curl \
    gedit
 
# Clear cache
RUN apt clean && rm -rf /var/lib/apt/lists/*

# Install extensions for php
RUN docker-php-ext-install intl opcache pdo_mysql mbstring zip exif pcntl
 
# Install composer (php package manager)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
 
ENV APP_HOME /var/www/html

RUN usermod -u 1000 www-data && groupmod -g 1000 www-data

RUN sed -i -e "s/html/html\/public/g" /etc/apache2/sites-enabled/000-default.conf

RUN a2enmod rewrite

# Copy existing application directory contents to the working directory
COPY . $APP_HOME

RUN chown -R www-data:www-data $APP_HOME