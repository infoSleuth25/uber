const { z } = require("zod");

const CaptainValidationSchema = z.object({
    firstname: z.string().min(3, "Name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    vehicle: z.object({
        color: z.string().min(3, "Color should be at least 3 characters long"),
        plate: z.string().min(3, "Plate should be at least 3 characters long"),
        capacity: z.number().min(1, "Capacity must be at least 1"),
        vehicleType: z.enum(["car", "motorcycle", "auto"], {
            message: "Vehicle type must be 'car', 'motorcycle', or 'auto'",
        }),
    }),
});

module.exports = {CaptainValidationSchema};