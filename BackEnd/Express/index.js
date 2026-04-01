import express from 'express'

const app = express();


// port  are logical end point of a network connection  that is used to exchange information between webserver and web clint 
// think of it like that the ports present in our device ore physical ports like charging port and  aux cable port , usb port means a path to connect external device with our computer we called them ports 
// like that a point or place or path where our server connects with our clint 

app.listen( 3000,()=>{
    console.log("server Started");
});
// when we call localhost:3000  we can see  a text there cannot GET /
// it is a type of error which means you server is running but it is not sending any response 


// how to send response 
// 1. we can use app.use    it listens every request get , post or if we send to any url it listens to every request and according to that we have a call back which will execute when our server gets any request

// app.use((req,res)=>{
//     console.log("request recived");
//     res.send("this is a basic request")
// })

// now lets talk about app.get
// whenever a get request comes to our browser it will respond  
// it checks the path if the path matches it executes the callback   
// "/" is our root path 
app.get("/" , (req,res)=>{
    res.send("this is root path");
})

// if we want to sent response to the path which we havent define we give path "*"  
// note but it is no longer valid  instead you can use app.use at the end
// app.get("(.*)", (req,res)=>{
//     res.send("this path is not define");
// })


// now lets talk about app.post 
// whenever a post request comes to our browser it will respond  
// it checks the path if the path matches it executes the callback   
// "/" is our root path 

app.post("/" , (req,res)=>{
    res.send("this is post request ");
})



// path parameters 
// they are like a variable values which we can send in our request The client (user) sends values through the URL, and the server uses those values to generate a response.
// we can define variable in the path like this  :variablename  
// eg   /path/:username/:id   like this or
app.get("/:userName/:id",(req,res)=>{
    console.log(req.params);
    res.send("I am root");
})

// query parameters
// when we send something in the url like this path?q=something this will store in our requesr.query object as key value pair 
// we can send multiple query by just putting & after a query  like path?fruit=apple&color=green  
// [Object: null prototype] { fruit: 'apple', color: 'green' } this is our result for  http://localhost:3000/search?fruit=apple&color=green this path
// we can access them by dstructuring them 
// now let see the example 
app.get("/search" , (req,res)=>{
    console.log(req.query);
    res.send("no results");
})




app.use((req,res)=>{
    res.send("page not found wrong page");
})