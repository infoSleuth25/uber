# UBER Backend - User Registration API

## Overview
This API allows users to register for the Uber clone application by providing their personal details. The system validates the input data and returns a JSON Web Token (JWT) upon successful registration.

## Endpoint
**`POST /users/register`**

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

### ✅ 201 Created - Success
Returns a JWT token upon successful registration.

#### Example Response:
```json
{
  "msg": "User is successfully registered",
  "user": {
    "_id": "65a123abc123abc123abc123",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  },
  "token": "your_jwt_token_here"
}
```

### ❌ 400 Bad Request - Missing Required Fields
Occurs if required fields are missing.
#### Example Response:
```json
{
  "msg": "All required fields must be provided"
}
```

### ❌ 400 Bad Request - Validation Error
Occurs when input data does not meet validation rules.
#### Example Response:
```json
{
  "msg": "Please enter valid input data",
  "errors": [
    {
      "path": "firstname",
      "message": "First name must be at least 3 characters"
    },
    {
      "path": "password",
      "message": "Password must be at least 6 characters"
    }
  ]
}
```

### ❌ 409 Conflict - Email Already Registered
Occurs when the email is already in use.
#### Example Response:
```json
{
  "msg": "Email is already registered"
}
```

### ❌ 500 Internal Server Error
Occurs when an unexpected error happens on the server.
#### Example Response:
```json
{
  "msg": "Something went wrong. Please try again later."
}
```

## Notes
- The password is securely hashed before storing.
- A JWT token is required for authentication in subsequent API requests.
- Ensure that the request body follows the required format.