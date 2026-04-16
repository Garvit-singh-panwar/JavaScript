import mongoose from "mongoose";


// making schema of user 
const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            index: true,
            trim: true
        },
        email :{
            type : String,
            required : true,
            unique: true,
            index: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        role:{
            type:String,
            enum: ["Admin" , "student" , "visitor"],
            default: "visitor"
        }
    },
    { timestamps: true }
)
// making model of user then exporting it 
export default mongoose.model("User" , userSchema);