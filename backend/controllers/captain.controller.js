const Captain = require('../models/captain.model');
const {CaptainValidationSchema} = require('../validators/captain.validation');


async function registerCaptain(req,res){
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const vehicle = req.body.vehicle;
    const color = vehicle.color;
    const plate = vehicle.plate;
    const capacity = vehicle.capacity;
    const vehicleType = vehicle.vehicleType;
    if(!firstname || !email || !password || !vehicle || !color || !plate || !capacity || !vehicleType){
        return res.status(400).json({
            msg : "All fields are required"
        })
    }
    const result = CaptainValidationSchema.safeParse(req.body);
    if(!result.success){
        return res.status(400).json({
            msg : "Please enter valid input data",
            errors: result.error.errors 
        })
    } 
    const isCaptainAlreadyExists = await Captain.findOne({email});
    if(isCaptainAlreadyExists){
        return res.status(400).json({
            msg : "Captain is Already registered"
        })
    }
    const hashPassword = await Captain.hashPassword(password);
    const captain = await Captain.create({
        fullname : {firstname,lastname},
        email : email,
        password : hashPassword,
        vehicle : {
            color : color,
            plate : plate,
            capacity : capacity,
            vehicleType : vehicleType
        }
    })
    const token = captain.generateAuthToken();
    return res.status(201).json({
        msg : "Captain is successfully registered",
        captain : captain,
        token
    })
}

module.exports= {registerCaptain};