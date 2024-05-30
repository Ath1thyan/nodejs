const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const UserModel = require('./models/Users')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/crud1')

app.get('/', (req, res) => {
    UserModel.find({})
    .then((users => res.json(users)))
    .catch((err) => res.status(500).json({error: err}))
})
app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
    .then((users => res.json(users)))
    .catch((err) => res.status(500).json({error: err}))
})
app.delete('/deleteUser', (req, res) => {
    UserModel.deleteOne(req.body)
    .then((users => res.json(users)))
    .catch((err) => res.status(500).json({error: err}))
})
app.put('/updateUser', (req, res) => {
    UserModel.updateOne(req.body)
    .then(users => res.json(users))
    .catch(err => res.status(500).json({error: err}))
})

app.get('/getUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findById({_id:id},{
        name:req.body.name,
        email:req.params.email,
        age:req.body.age
    })
})

app.put("/update/:id", (req, res) =>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.params.email,
        age:req.body.age
    })
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.delete('/delete/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.listen(3001, ()=>{
    console.log('Server is running on port 3001')
})