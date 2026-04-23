import express from "express";
import { Env } from "./utils/Env.js";
import { connectDB } from "./config/connectDB.js";
import { connectCloudnary } from "./config/cloudnary.js";
import fileUpload from "express-fileupload";
import upload from "./routes/upload.routes.js";


const app = express();
app.use(express.json());
app.use(fileUpload());

app.use("/api/v1/upload",upload);



const startServer = async()=>{
    try {
 
        await connectDB();
        app.listen(Env.PORT , ()=>{
            console.log("server connected successfully at port " , Env.PORT);
        });
        

    } catch (error){
        console.error("something went wrong while starting server");
    }
}

startServer();
connectCloudnary();

