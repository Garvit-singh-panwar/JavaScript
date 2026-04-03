import express from 'express';
import dotenv from 'dotenv';
import todoRoutes from './routes/todos.js';
import { dbConnect } from './config/database.js';

const app = express();

// load config.env file
dotenv.config({quiet:true});
const port = process.env.PORT || 4000;


app.listen(
    port ,
    ()=>{
        console.log(`server started sucessfully at  port ${port}`);
    }
)
// connect to the database
dbConnect();

// middleware to parse json data
app.use(
    express.json(),
);
app.use(express.urlencoded({ extended: true }));


app.get("/" , (req,res)=>{
    res.send("you are at home page");
})


// mount the todo API routes
app.use('/api/v1',todoRoutes);