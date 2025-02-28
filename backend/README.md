# UBER Backend - User Registration API

### Endpoint
**`POST /users/register`**

### Overview
This API allows users to register for the Uber clone application by providing their personal details. The system validates the input data and returns a JSON Web Token (JWT) upon successful registration.

### Request Body
The request body should be in JSON format with the following required fields:

| Field      | Type   | Required | Description                          |
|------------|--------|----------|--------------------------------------|
| firstname  | String | Yes      | User's first name (min 3 chars)    |
| lastname   | String | No       | User's last name (optional, min 3 chars) |
| email      | String | Yes      | User's email (must be valid)       |
| password   | String | Yes      | Password (min 6 characters)        |

#### Example Request:
```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

### Responses

- `user` (object):
  - `fullname` (object):
    - `firstname` (string) : User's first name (minimum 3 characters)
    - `lastname` (string) : User's last name (minimum 3 characters)
  - `email` (string) : User's email (must be valid)
  - `password` : User's password (minimum 6 characters)
- `token` (string) : JWT Token 

### Endpoint
**`POST /users/login`**

### Overview
This API allows users to log in to the Uber clone application using their email and password. The system validates the credentials and returns a JSON Web Token (JWT) upon successful authentication.


### Request Body
The request body should be in JSON format with the following required fields:

| Field      | Type   | Required | Description                          |
|------------|--------|----------|--------------------------------------|
| email      | String | Yes      | User's email (must be valid)       |
| password   | String | Yes      | Password (min 6 characters)        |

#### Example Request:
```json
{
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

### Responses

- `user` (object):
  - `fullname` (object):
    - `firstname` (string) : User's first name (minimum 3 characters)
    - `lastname` (string) : User's last name (minimum 3 characters)
  - `email` (string) : User's email (must be valid)
  - `password` : User's password (minimum 6 characters)
- `token` (string) : JWT Token 


### Endpoint
**`GET /users/profile`**

### Overview
This API allows authenticated users to retrieve their profile details. The request must include a valid JWT token in either the Authorization header or cookies.

### Authentication Methods
The JWT token can be provided in one of the following ways:
- Authorization Header
`Authorization: Bearer <your-jwt-token>`
- Cookies
  - The token must be stored in the token cookie.

#### Example Request:
```
GET /users/profile HTTP/1.1  
Host: example.com  
Authorization: Bearer <your-jwt-token>  
```
OR
```
GET /users/profile HTTP/1.1  
Host: example.com  
Cookie: token=<your-jwt-token>
```

### Responses

- `user` (object):
  - `fullname` (object):
    - `firstname` (string) : User's first name (minimum 3 characters)
    - `lastname` (string) : User's last name (minimum 3 characters)
  - `email` (string) : User's email (must be valid)

### Endpoint
**`GET /users/logout`**

### Overview
This API allows users to log out from the Uber clone application by invalidating their JWT token. The token is added to a blacklist to prevent further use. The token can be obtained from either the Authorization header or cookies.

### Authentication Methods
The JWT token can be provided in one of the following ways:
- Authorization Header
`Authorization: Bearer <your-jwt-token>`
- Cookies
  - The token must be stored in the token cookie.

#### Example Request:
```
GET /users/logout HTTP/1.1  
Host: example.com  
Authorization: Bearer <your-jwt-token>  
```
OR
```
GET /users/logout HTTP/1.1  
Host: example.com  
Cookie: token=<your-jwt-token>
```

### Responses

```
{
  "msg": "Logged out"
}
```

