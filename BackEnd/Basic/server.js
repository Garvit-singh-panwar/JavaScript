
// server initiate
const express = require("express");
const App = express();

// USED TO parse request.body in express generally in post and put 
const bodyParser = require('body-parser');

App.use(bodyParser.json());


// activate the server on 3000 port 
const port = 3000;
App.listen(port , ()=>{
    console.log("server started");
})


// 
App.get('/' , (request,response)=>{
    response.send("hello ji , kaise ho saare");
} )

App.post('/api/cars' , (request,response)=>{
   const {name,brand} =  request.body;
   console.log(name);
   console.log(brand);
   response.send("car submited sucessfully.");
})

