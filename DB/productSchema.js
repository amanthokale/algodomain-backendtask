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
  sellername:{
    type:String
  },

})

const product = mongoose.model("User",productSchema)

module.exports=product;
