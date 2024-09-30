FROM node:18.18.0-alpine

WORKDIR /
COPY . .
RUN npm install
