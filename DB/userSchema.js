const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName:{
    type:String
  },
  lastName:{
    type:String
  },
  mobile:{
    type:Number
  },
  password:{
    type:String
  }
})

const user = mongoose.model("User",userSchema)

module.exports=user;
