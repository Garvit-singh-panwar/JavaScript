import mongoose from "mongoose";

const dislikesSchema = new mongoose.Schema(
    {
        blog:{
            type: mongoose.Types.ObjectId,
            required: true,
            ref : "Blog"
        },
        user:{
            type: String,
            required: true,
            maxLength: 50,
        }
    }
);

export default mongoose.model("Dislikes" , dislikesSchema);
