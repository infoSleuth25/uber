const mongoose = require('mongoose');

function connectToDb(){
    mongoose.connect(process.env.DB_CONNECT)
    .then(()=>{
        console.log("DB Connection Successful");
    })
    .catch((err)=>{
        console.log("No DB Connection");
        console.log(err);
    })
}

module.exports = connectToDb;