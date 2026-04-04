import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import { connectDb } from './config/ConnectMongoDb.js';
import blogRouters from './routes/blogRouter.js';

const app = express();


// takes data from .env 
dotenv.config({quiet:true});
const port = process.env.PORT || 3000;


// middleware to parse json data
app.use(
    express.json(),
);
app.use(express.urlencoded({ extended: true }));


// assigning port 
app.listen(port , ()=>{
    console.log("server started");
});

// connecting with database
connectDb();

// link routes  
app.use("/api/v1",blogRouters);
