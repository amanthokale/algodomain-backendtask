const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://amanthokale:amanmongodb7@cluster0.wdggb.mongodb.net/BioApp?retryWrites=true&w=majority").then(()=>{
  console.log("Connected to database");
}).catch(()=>{
  console.log("Failed to connect to database");
})
