require('dotenv').config()
const mongoose = require('mongoose')

const uri=process.env.DB;

const connectDB = async() =>{
    try{
        await mongoose.connect(uri);
        console.log('DB connected successfully')
    }
    catch(error){
        console.log('Hey dude MongoDB error ', error.message)
    }
}

module.exports = connectDB;