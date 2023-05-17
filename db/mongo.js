const mongoose = require("mongoose");
const dotenv = require('dotenv').config();


function connect_db(){
    mongoose.connect(process.env.DB_CONNECT)
    .then(()=>{
        console.log("Database connected")
    })
    .catch(err=> console.log(err))
}


module.exports = connect_db

