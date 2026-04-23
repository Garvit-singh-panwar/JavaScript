import mongoose, { connect } from "mongoose";
import { Env } from "../utils/Env.js";

export const connectDB = async()=>{
    try {
        
        await mongoose,connect(Env.MONGO_URI)
        console.log("Database connected successfully");

    } catch (error) {
        
        console.error(error.message);
        process.exit(1);

    }
}