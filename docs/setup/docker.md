# Renovation Project Management API

## Run with Docker

### Prerequises

- Docker installed
- File .env created and configured (see .env.docker file)

_* Version used at development_

### Endpoint
```bash
{PROTOCOL}://{HOST-NAME}:{PORT}/api

# Default configuration
http://localhost:3000/api
```

### Commands

```bash
# Run dev
$ docker compose up

# Run watch
$ cd watch
$ docker compose up -w
```

### Notes
A volume is created to keep the data of the database persistent.
