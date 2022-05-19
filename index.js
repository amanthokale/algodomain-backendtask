require('./DB/con');
const express = require('express');
const app = express();
const Product = require('./DB/productSchema');
// const Seller = require('./DB/productSchema');
const port = 5000;


app.use(express.json())

// Before this an api for seller authentication and a collection for storing sellers separately should be created
// Will store the sellers id in products created by them
// JWT Authentication will give object id ((which i have passed directly in the apis))

app.post('/addproduct',async(req,res)=>{
  try {
    const {name,type,category,price,sellername}=req.body;
      const b = await new Product({
        name,type,category,price,sellername
      })
      const c = await b.save();
      if(b){
        res.status(200).send(b);
      }
  } catch (e) {
    res.status(400).send("Unable to add Product Internal server error");
  }
})

app.post('/addproductmany',async(req,res)=>{
  try {
    const dataarray=req.body;
    console.log(dataarray);
    console.log(req.body)
      const a = await new Product({
        name:dataarray[0].name,
        type:dataarray[0].type,
        category:dataarray[0].category,
        price:dataarray[0].price,
        sellername:dataarray[0].sellername
      })
      const b = await new Product({
        name:dataarray[1].name,
        type:dataarray[1].type,
        category:dataarray[1].category,
        price:dataarray[1].price,
        sellername:dataarray[1].sellername
      })
      const c = await new Product({
        name:dataarray[2].name,
        type:dataarray[2].type,
        category:dataarray[2].category,
        price:dataarray[2].price,
        sellername:dataarray[2].sellername
      })
      const d = await Product.insertMany([a,b,c]);
      if(d){
        res.status(200).send(d);
      }
  } catch (e) {
    console.log(e)
    res.status(400).send("Unable to add Product Internal server error");
  }
})

app.get('/listproductseller',async(req,res)=>{
  try {
    const sellername=req.body.sellername;
    console.log(sellername);
    const a =await Product.find({sellername:sellername});
      if(a){
        res.status(200).send(a);
      }
  } catch (e) {
    console.log(e)
    res.status(400).send("Unable to add Product Internal server error");
  }
})
app.patch('/updateproduct:id',async(req,res)=>{
  try {
    const {name,type,category,price,sellername}=req.body;
    console.log(req.params.id)
    let a = await Product.findById(req.params.id);
    console.log(sellername)
    if(a.sellername===sellername){
      let b = await Product.findByIdAndUpdate(req.params.id,{name:name,type:type,category:category,price:price,sellername:sellername},{new:true})
      console.log(b)
      res.status(200).send(b);
    }
  } catch (e) {
    console.log(e)
    res.status(400).send("Unable to add Product Internal server error");
  }
})

app.delete('/deleteproduct:id',async(req,res)=>{
  try {
    const sellername = req.body.sellername;
    let a = await Product.findById(req.params.id);
    console.log(sellername)
    if(!a){
      res.status(400).send("Product not found")
    }
    else if(sellername===a.sellername){
      let b = await Product.findByIdAndDelete(req.params.id);
      console.log(b)
      res.status(200).send("note deleted successfully")
    }
  } catch (e) {
    console.log(e)
    res.status(400).send("Unable to add Product Internal server error");
  }
})

// CUSTOMER api

app.get('/listproductcustomer',async(req,res)=>{
  try {
    const {name,type,category,min,max}=req.body;
    const a =await Product.find({type:type});
    if(a.price===15000){
    res.send(a)
  }
    console.log(a)
  } catch (e) {
    console.log(e)
    res.status(400).send("Unable to add Product Internal server error");
  }
})


app.listen(port,()=>{
  console.log(`listening at port ${port}`)
})
