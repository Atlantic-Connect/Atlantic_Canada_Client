import mongoose, { Schema, models } from "mongoose";

const userSchema = new mongoose.Schema({
 
    user_name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    user_type:{
        type:String
    },
    province:{
        type:String
    }
    
  });

  
const users = mongoose.model('user', userSchema);
module.exports=users;
