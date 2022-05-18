require('./DB/con');
const express = require('express');
const app = express();
const Product = require('./DB/productSchema');
const port = 5000;


app.use(express.json())

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
app.patch('/updateproduct',async(req,res)=>{
  try {
    const sellername=req.body.sellername;
    const name = req.body.name;
    const a =await Product.findOne({name:name,sellername:sellername});
      if(a){
        res.status(200).send(a);
      }
  } catch (e) {
    console.log(e)
    res.status(400).send("Unable to add Product Internal server error");
  }
})




app.listen(port,()=>{
  console.log(`listening at port ${port}`)
})
