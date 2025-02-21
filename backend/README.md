# UBER Backend

## User Registration API

## Endpoint: `/users/register`

### Description:
This endpoint allows users to register by providing necessary details such as first name, last name, email, and password. The API validates the input data and returns a JSON Web Token (JWT) upon successful registration.

---

## HTTP Method:
**POST**

---

## Request Body:
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

## User Registration API Responses

## ✅ 201 Created - Success
When the user is successfully registered, a JWT token is returned.

### Response Example:
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

---

## ❌ 400 Bad Request - Missing Required Fields
If `firstname`, `email`, or `password` is missing in the request.

### Response Example:
```json
{
  "msg": "All fields are required"
}
```

---

## ❌ 400 Bad Request - Validation Error
If input data does not meet validation rules (e.g., invalid email, short password, etc.).

### Response Example:
```json
{
  "msg": "Please enter valid input data",
  "errors": [
    {
      "path": "firstname",
      "message": "Name is required"
    },
    {
      "path": "password",
      "message": "Password must be at least 6 characters"
    }
  ]
}
```

---

## ❌ 409 Conflict - Email Already Registered
If the provided email is already in use.

### Response Example:
```json
{
  "msg": "Email is already registered"
}
```

---

## ❌ 500 Internal Server Error
If something unexpected happens on the server.

### Response Example:
```json
{
  "msg": "Something went wrong. Please try again later."
}
```

---

## Notes:
- The password is securely hashed before storing.
- The token is required for authentication in subsequent API requests.
- Ensure that the request body follows the required format.

