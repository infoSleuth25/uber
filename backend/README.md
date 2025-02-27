# UBER Backend - User Registration API

## Endpoint
**`POST /users/register`**

## Overview
This API allows users to register for the Uber clone application by providing their personal details. The system validates the input data and returns a JSON Web Token (JWT) upon successful registration.

## Request Body
The request body should be in JSON format with the following required fields:

| Field      | Type   | Required | Description                          |
|------------|--------|----------|--------------------------------------|
| firstname  | String | Yes      | User's first name (min 3 chars)    |
| lastname   | String | No       | User's last name (optional, min 3 chars) |
| email      | String | Yes      | User's email (must be valid)       |
| password   | String | Yes      | Password (min 6 characters)        |

### Example Request:
```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

## Responses

- `user` (object):
  - `fullname` (object):
    - `firstname` (string) : User's first name (minimum 3 characters)
    - `lastname` (string) : User's last name (minimum 3 characters)
  - `email` (string) : User's email (must be valid)
  - `password` : User's password (minimum 6 characters)
- `token` (string) : JWT Token 