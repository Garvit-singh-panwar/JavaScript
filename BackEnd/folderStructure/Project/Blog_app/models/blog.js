import mongoose from "mongoose";

// post schema 
// It contain all detail about post
const BlogSchema = new mongoose.Schema(
    {
        author:{
            type: String,
            required: true,
            maxLength: 50,
        },
        title: {
            type: String,
            required: true,
            maxLength: 100,
        },
        description:{
            type: String,
            required: true,
        },
        likes: {
            type: Number,
            default: 0,
        },
        unlike: {
            type: Number,
            default: 0,
        }

    }
);


export default mongoose.model("Blog" , BlogSchema);