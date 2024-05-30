const mongoose=require('mongoose');
const joi=require('joi');
const passwordComplexity=require('joi-password-complexity');

const UserSchema=new mongoose.Schema({
    firstName:{type:"string",required:true},
    lastName:{type:"string",required:true},
    email:{type:"string",required:true},
    password:{type:"string",required:true}
});

const User=mongoose.model("user",UserSchema);

const validate=(data)=>{
    const schema=joi.object({
        firstName:joi.string().required().label("first name"),
        lastName:joi.string().required().label("last name"),
        email:joi.string().email().required().label("email"),
        password:passwordComplexity().required().label("password")
    })
    return schema.validate(data);
}

module.exports={
    User,
    validate
};