const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name:{
    type:String
  },
  password:{
    type:String
  }
})

const user = mongoose.model("User",userSchema)

module.exports=user;
