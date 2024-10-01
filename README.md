# Renovation Project Management API

## Description
This is a technical test for the position **Senior Full Stack Developer** at **Soumission Rénovation**. 
The goal is to design, implement and document a basic RESTful API that manage renovation projects, by using a backend framework or library in JavaScript or TypeScript and a database.

## Requirements
- Relations between entities:
  - A project is associated to a client and an entrepreneur

## Instructions
1. Technologies:
    - Use a backend framework or library in JavaScript or TypeScript with any database
1. Version control:
    - Use GIT to manage the code

## Extras
- Importable Postman collection JSON files
- Project setup via .env file
    - With template files
- Docker complete project setup
- DTO class validation and transformation
- Custom global exception filter
    - For duplicate key value when creating or updating entities
- Lists show only active entities with limited informations and are ordered by id
    - Inactive entity can still be edited

## Missing
- User entity
- Contact entity
- Contract entity
- Add contacts relation to client and entrepreneur
- Add contracts relation to client and entrepreneur
- Authentication
- Pagination for the lists
- Soft-deletes
- Test units

## Documentation
- [Entities](./docs/entities/index.md)
- [Project Setup](./docs/setup/index.md)
- [Technologies](./docs/technologies/index.md)

