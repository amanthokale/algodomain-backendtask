const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name:{
    type:String
  },
  type:{
    type:String
  },
  category:{
    type:String
  },
  price:{
    type:String
  },
  sellerName:{
    type:String
  },

})

const user = mongoose.model("User",userSchema)

module.exports=User;
