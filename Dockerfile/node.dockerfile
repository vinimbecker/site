FROM node:22-alpine

WORKDIR /home/node/app

RUN npm install -g npm@latest

COPY . .

