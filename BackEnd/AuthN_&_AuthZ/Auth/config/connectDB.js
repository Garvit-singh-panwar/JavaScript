import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const databaseUrl = process.env.DATABASE_URL;

// function to connect database with server
const connectDB = async()=>{

    // create connection
   await mongoose.connect(databaseUrl)
    // if connected then do this
   .then(console.log("database Connected SuccessFully"))
    // error occur then do this
   .catch((error)=>{
        console.log(error);
        console.error(error);
        process.exit(1);
   });

} 

// exporting connectDb function 
export default connectDB;