# Renovation Projects

## Dependencies

- Jest
- Nest.js
- TypeORM
- Typescript

## Endpoint

http://localhost:3000/

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