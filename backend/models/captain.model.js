const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const captainSchema = new mongoose.Schema({
    fullname :{
        firstname : {
            type : String,
            required : true,
            minlength : [3, 'First name should be 3 characters long']
        },
        lastname : {
            type : String,
            minlength : [3, 'Last name should be 3 characters long']
        }
    },
    email : {
        type : String,
        required : true,
        minlength : [5, 'email should be 5 characters long']
    },
    password : {
        type : String,
        required : true,
        select : false
    },
    socketId : {
        type : String
    },
    status : {
        type : String,
        eunm : ['active','inactive'],
        default : 'inactive'
    },
    vehicle : {
        color : {
            type : String,
            required : true,
            minlength : [3, 'First name should be 3 characters long']
        },
        plate : {
            type : String,
            required : true,
            minlength : [3, 'First name should be 3 characters long']
        },
        capacity : {
            type : Number,
            required : true,
            min : [1,"Capacity must be at least 1"]
        },
        vehicleType :{
            type : String,
            required : true,
            enum : ['car','motorcycle','auto']
        }
    },
    location : {
        lat : {
            type : Number
        },
        long : {
            type : Number
        }
    }
})

captainSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id : this.id}, process.env.JWT_SECRET,{expiresIn : '24h'});
    return token;
}

captainSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password, 10);
}


const Captain = mongoose.model('Captain',captainSchema);

module.exports = Captain;