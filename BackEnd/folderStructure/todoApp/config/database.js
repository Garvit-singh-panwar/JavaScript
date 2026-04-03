import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config({quiet:true});

const dbConnect  = ( )=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=> console.log("Database connected sucessfully"))
    .catch((error)=>{
        console.log("Issue in db connection")
        console.error( error.message );
        process.exit(-1);
    })
}


export {dbConnect};