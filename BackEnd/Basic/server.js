
// server Instantiate
import express from "express";
import mongoose from "mongoose";

const app = express(); 


// specially parse json data & add it to the request.body object
app.use(express.json());

// activate the server on port 3000 
const port = 3000;
app.listen(port , ()=>{
    console.log("server started"); //
})


//Routes
app.get('/' , (request,response)=>{
    response.send("hello ji , kaise ho saare");
} )

app.post('/api/cars' , (request,response)=>{
   const {name,brand} =  request.body;
   console.log(name);
   console.log(brand);
   response.send("car submited sucessfully.");
});


mongoose.connect("mongodb://127.0.0.1:27017/whatsapp" )
.then(()=>{console.log("connection sucessfull")})
.catch((error)=>{console.log("recived an error",error)});