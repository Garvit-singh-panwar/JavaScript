import mongoose from "mongoose";

const likeSchems = new mongoose.Schema(
    {
        blog:{
            type: mongoose.Types.ObjectId,
            ref: "Blog",
            required: true,
        },
        user:{
            type: String,
            maxLength: 50,
            required: true,
        }

    }
)


export default mongoose.model("Likes" , likeSchems);