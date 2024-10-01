# Renovation Project Management API

## Entrepreneur entity

### Model
```postgresql
id: primary generated int
name: unique varchar
phone: nullable varchar
address: nullable varchar
createdAt: timestamp = 'CURRENT_TIMESTAMP'
updatedAt: timestamp = 'CURRENT_TIMESTAMP'
active: boolean = true
```

### Enpoints

#### Find all (active only)
##### Request
```http
GET /entrepreneurs HTTP/1.1
```
##### Response
```json
[
    {
        "id": 7,
        "name": "My entrepreneur",
    }, 
    {
        "id": 8,
        "name": "Another entrepreneur",
    }
]
```

#### Find one
##### Request
```http
GET /entrepreneurs/:id HTTP/1.1
```
##### Response
```json
{
    "id": 8,
    "name": "My entrepreneur",
    "phone": "(514)456-7890",
    "address": "6546 rue ipsum, QC, Canada",     
    "createdAt": "2024-09-30T05:23:38.455Z",
    "updatedAt": "2024-10-01T05:33:05.262Z",
    "active": true
}
```

#### Create
##### Request
```http
POST /entrepreneurs HTTP/1.1
```
```json
{
    "name": "My new created entrepreneur",
    "phone": "(514)444-1919",
    "address": "1919 rue de la poule, QC, Canada",     
}
```
##### Response
```json
{
    "id": 9,
    "name": "My new created entrepreneur",
    "phone": "(514)444-1919",
    "address": "1919 rue de la poule, QC, Canada",   
    "createdAt": "2024-09-30T05:23:38.455Z",
    "updatedAt": "2024-10-01T05:33:05.262Z",
    "active": true,
}
```

#### Update
##### Request
```http
PUT /entrepreneurs/:id HTTP/1.1
```
```json
{
    "active": false,
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
DELETE /entrepreneurs/:id HTTP/1.1
```
##### Response
```json
{
    "raw": [],
    "affected": 1
}
```