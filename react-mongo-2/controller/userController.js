const User = require('../model/userModel')

const create = async(req,res) =>{
    try{   
    const userData = new User(req.body);
    if(!userData){
        return res.status(404).send({message: 'User Not Found'})
    }
    await userData.save();
    res.status(200).json({msg:'User Created Successfully'})
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
    }
    const getAll = async (req,res) =>{
        try{
            const userData = await User.find();
            if(!userData){
                return res.status(404).send({message: 'User Not Found'})
            }
            res.status(200).json(userData)
        }
        catch(err){
            res.status(500).json({msg:err.message})
        }
    }

    const getOne = async(req,res) =>{
        try{
            const id = req.params.id;
            const UserExist = await User.findById(id)
            if(!UserExist){
                return res.status(404).send({message: 'User Not Found'})
            }
            res.status(200).json(UserExist)
        }
        catch(err){
            res.status(500).json({msg:err.message})
        }
    }

    const update = async (req,res) =>{
        try{
            const id = req.params.id;
            const UserExist = await User.findById(id)
            if(!UserExist){
                return res.status(404).send({message: 'User Not Found'})
            }
            const updateData = await User.findByIdAndUpdate(id,req.body,{new:true})
            res.status(200).json({msg:'User Updated Successfully'})
        }
        catch(err){
            res.status(500).json({msg:err.message})
        }
    }

    const deleteUser = async(req,res) =>{
        try{
            const id = req.params.id;
            const UserExist = await User.findById(id)
            if(!UserExist){
                return res.status(404).send({message: 'User Not Found'})
            }
            const deleteData = await User.findByIdAndDelete(id)
            res.status(200).json({msg:'User Deleted Successfully'})
        }
        catch(err){
            res.status(500).json({msg:err.message})
        }
    }


module.exports = {
    create:create,
    getAll:getAll,
    getOne:getOne,
    update:update,
    deleteUser:deleteUser
}