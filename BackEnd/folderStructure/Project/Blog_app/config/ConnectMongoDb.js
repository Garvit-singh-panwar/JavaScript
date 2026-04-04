import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config({quiet:true});
const dbURL = process.env.MONGODB_URL;

const connectDb = ()=>{
    
    mongoose.connect(dbURL).then(
        ()=>{
            console.log("Database connected successfully")
        }
    ).catch((error)=>{
            console.log(error);
            console.error(error);
            process.exit(-1);
        }
    )

} 

export {connectDb};