# Renovation Projects

## Dependencies
- Docker
- Jest
- Nest.js
- PostgreSQL
- Typescript

## Run with Docker

### Prerequises
- [Docker](https://docs.docker.com/engine/install/) (v4.34*)

_* Tested on these versions_

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

- [Node.js](https://nodejs.org/en/download/package-manager) (v18.18*)
- NPM (v10.8*)
- PostgreSQL (v16.4*)

_* Tested on these versions_

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