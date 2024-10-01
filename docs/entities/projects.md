# Renovation Project Management API

## Project entity

### Model
```postgresql
id: primary generated int
name: unique varchar
description: nullable text
budget: nullable float
startAt: nullable timestamp
endAt: nullable timestamp
createdAt: timestamp = 'CURRENT_TIMESTAMP'
updatedAt: timestamp = 'CURRENT_TIMESTAMP'
active: boolean = true
```

### Enpoints

#### Find all (active only)
##### Request
```http
GET /projects HTTP/1.1
```
##### Response
```json
[
    {
        "id": 7,
        "name": "My project",
        "description": "Project description",
        "budget": 999999.99,
        "startAt": "2024-09-30T00:00:00.000Z",
        "endAt": "2024-10-08T00:00:00.000Z",
        "createdAt": "2024-09-30T05:23:38.455Z",
        "updatedAt": "2024-10-01T05:33:05.262Z",
        "active": true
    }, 
    {
        "id": 8,
        "name": "Another project",
        "description": "Project description",
        "budget": 9999.99,
        "startAt": "2024-09-30T00:00:00.000Z",
        "endAt": "2024-10-08T00:00:00.000Z",
        "createdAt": "2024-09-30T05:23:38.455Z",
        "updatedAt": "2024-10-01T05:33:05.262Z",
        "active": true
    }
]
```

#### Find one
##### Request
```http
GET /projects/:id HTTP/1.1
```
##### Response
```json
{
    "id": 7,
    "name": "My project",
    "description": "Project description",
    "budget": 999999.99,
    "startAt": "2024-09-30T00:00:00.000Z",
    "endAt": "2024-10-08T00:00:00.000Z",
    "createdAt": "2024-09-30T05:23:38.455Z",
    "updatedAt": "2024-10-01T05:33:05.262Z",
    "active": true
}
```

#### Create
##### Request
```http
POST /projects HTTP/1.1
```
```json
{
    "name": "My new created project",
    "description": "Project description",
    "budget": 999999.99,
    "startAt": "2024-09-30T00:00:00.000Z",
    "endAt": "2024-10-08T00:00:00.000Z"
}
```
##### Response
```json
{
    "id": 9,
    "name": "My new created project",
    "description": "Project description",
    "budget": 99999.99,
    "startAt": "2024-09-30T00:00:00.000Z",
    "endAt": "2024-10-08T00:00:00.000Z",
    "createdAt": "2024-09-30T05:23:38.455Z",
    "updatedAt": "2024-10-01T05:33:05.262Z",
    "active": true,
}
```

#### Update
##### Request
```http
PUT /projects/:id HTTP/1.1
```
```json
{
    "description": "Project description updated",
}
```
##### Response
```json
{
    "generatedMaps": [],
    "raw": [],
    "affected": 1
}
```

#### Delete
##### Request
```http
DELETE /projects/:id HTTP/1.1
```
##### Response
```json
{
    "raw": [],
    "affected": 1
}
```