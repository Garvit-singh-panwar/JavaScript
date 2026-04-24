import mongoose from "mongoose";
import { sendMail } from "../postMiddleware/mailSender.js";

const fileSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            required: true,

        },
        imageUrl: {
            type:String
        },
        tags:{
            type:String,
        },
        email:{
            type:String
        }
    }
);

fileSchema.post("save" , async function(doc){
    try {
        console.log("Document saved:", doc);
        await sendMail(doc); // Now 'doc' is defined by Mongoose
    } catch (error) {
        console.error("Error sending email:", error);
    }
});

const File = mongoose.model("File",fileSchema);
export default File;