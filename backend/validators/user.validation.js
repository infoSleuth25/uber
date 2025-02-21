// 📂 schemas/user.schema.js
const { z } = require("zod");

const UserValidationSchema = z.object({
    firstname: z.string().min(3, "Name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

module.exports = { UserValidationSchema };
