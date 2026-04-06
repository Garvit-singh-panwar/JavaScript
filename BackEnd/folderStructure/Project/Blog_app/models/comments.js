import mongoose from "mongoose";

const commentSchema  = new mongoose.Schema(
    {

        blog:{
            type: mongoose.Schema.ObjectId,
            ref: "Blog",
            required: true,
        },
        user:{
            type: String,
            required: true,
            maxLength: 50,
        },
        comment:{
            type:String,
            required: true,
            maxLength: 300,
        }

    },
    { timestamps: true },
)

export default mongoose.model("Comments" , commentSchema);