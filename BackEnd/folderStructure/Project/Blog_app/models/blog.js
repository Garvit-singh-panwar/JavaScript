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
        body:{
            type: String,
            required: true,
        },
        likes:[
            {
                type: mongoose.Types.ObjectId,
                ref : "Likes"
            },
        ],
        dislikes:[
            {
                type: mongoose.Types.ObjectId,
                ref : "Dislikes"
            },
        ],
        comments:[
            {
                type: mongoose.Types.ObjectId,
                ref : "Comments"
            },
        ],
        
    },
    { timestamps: true }
);


export default mongoose.model("Blog" , BlogSchema);