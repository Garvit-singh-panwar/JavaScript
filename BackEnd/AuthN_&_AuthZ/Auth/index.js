import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes.js'; 
import connectDB from './config/connectDB.js';

// used to fetch thing from .env file
dotenv.config();

// making server 
const app = express();

// parser for json data 
app.use(express.json());

// defining port 
const port = process.env.PORT

// connecting database
connectDB();

// initailizing api routes version 1
app.use("/api/v1/", router);


// connecting server to a port
app.listen(port , ()=>{
    console.log(`Server is connected successfully at ${port}`)
} );

