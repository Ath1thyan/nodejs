const express = require('express')
const mongoose = require('mongoose')
const Datamodel = require('./Datamodel')
const connectDB = require('./Database')
const cors = require('cors')

connectDB();

const app = express();
app.use(express.json())
app.use(cors())

app.get('/readfromserver',(req,res)=>{
    res.json({message: 'Hey man from server'})
})

app.post('/writetodatabase',async(req,res)=>{
    try{
        const {content} = req.body
        const newData = new Datamodel({content})
        await newData.save()
        res.json({message: 'Data saved successfully'})
    }
    catch(error){
        console.log(error.message)
        res.status(500).send({message:'Server error while data saving'})
    }
})

const port = process.env.PORT || 8080
app.listen(port, () =>{
    console.log(`Server is running at port: ${port}`);
})