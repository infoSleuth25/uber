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
