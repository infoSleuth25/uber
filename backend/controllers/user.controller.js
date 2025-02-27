const User = require('../models/user.model');
const {UserValidationSchema, UserLoginSchema} = require('../validators/user.validation');

async function registerUser(req,res){
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    if(!firstname || !email || !password){
        return res.status(400).json({
            msg : "All fields are required"
        })
    }
    const result = UserValidationSchema.safeParse(req.body);
    if(!result.success){
        return res.status(400).json({
            msg : "Please enter valid input data",
            errors: result.error.errors 
        })
    } 
    const hashPassword = await User.hashPassword(password);
    const user = await User.create({
        fullname : {firstname,lastname},
        email : email,
        password : hashPassword
    })

    const token = user.generateAuthToken();
    return res.status(201).json({
        msg : "User is successfully registered",
        user : user,
        token
    })
}

async function loginUser(req,res){
    const email = req.body.email;
    const password = req.body.password;
    if(!email || !password){
        return res.status(400).json({
            msg : "All fields are required"
        })
    }
    const result = UserLoginSchema.safeParse(req.body);
    if(!result.success){
        return res.status(400).json({
            msg : "Please enter valid input data",
            errors: result.error.errors 
        })
    } 
    const user = await User.findOne({email}).select('+password');
    if(!user){
        return res.status(401).json({
            msg : "Invalid email or password"
        })
    }
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({
            msg : "Invalid email or password"
        })
    }
    const token = user.generateAuthToken();
    return res.status(200).json({token,user});
}

module.exports = {registerUser, loginUser};