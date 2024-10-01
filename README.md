# Renovation Projects

## Dependencies

- Jest
- Nest.js
- TypeORM
- Typescript

## Run with Docker

### Prerequises

- [Docker](https://docs.docker.com/engine/install/) - v4.34

### Commands

```bash
# Run dev
$ docker compose up

# Run watch
$ cd watch
$ docker compose up -w
```

## Run localy

### Prerequises

- [Node.js](https://nodejs.org/en/download/package-manager) - v18.18
- NPM - v10.8
- PostgreSQL - v16.4

### Project setup

```bash
$ npm install
```

### Compile and run the project

```bash
# development
$ npm run dev

# watch mode
$ npm run watch

# build file for production mode
$ npm run build

# production mode
$ npm run prod
```

### Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Endpoints

### Base URL  

http://localhost:3000/api/

### Projects

```
GET /projects
GET /projects/:id 
POST /projects
PUT /projects/:id
DELETE /projects/:id
```

### Clients

```http
GET /clients  
GET /clients/:id  
POST /clients  
PUT /clients/:id  
DELETE /clients/:id  
```

### Entrepreneurs

```http
GET /entrepreneurs  
GET /entrepreneurs/:id  
POST /entrepreneurs  
PUT /entrepreneurs/:id  
DELETE /entrepreneurs/:id  
```
