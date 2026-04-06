import DisLikes from "../models/disLikes.js";
import Blog from "../models/blog.js";


const dislikeController = async (req , res)=>{
        try {
            const {id} = req.params;
            const {user} = req.body;

            if(!id || !user){
                return res.status(400)
                .json(
                    {
                        success:false,
                        message: "Blog ID or User is required",
                    }
                )
                
            }
            const haveBlog = await Blog.findById(id);
            if(!haveBlog){
                return res.status(404).json(
                                            {
                                                success:false,
                                                message: "Blog not found for given Id"
                                            }
                                        );
            }

            const dislike = new DisLikes({
                blog:id , user:user,
            })

            const updatedDislike = await dislike.save();

            const updatedBlog = await Blog.findByIdAndUpdate(
                                id ,
                                {
                                    $push:{dislikes: updatedDislike._id}
                                },
                                { new: true },
                            ).populate("dislikes")
                            .exec();

            if(!updatedBlog){
                return res.status(404)
                .json(
                    {
                        success:false,
                        message: "some error occured in fetching updated blog",
                    }
                )
            }
            

            res.status(200)
            .json(
                {
                    success: true,
                    message: "you unlike this blog",
                    blog: updatedBlog,
                }
            )

        } catch (error) {

            res.status(500)
            .json(
                {
                    success: false,
                    error: error.message,
                    message: "Internal server error",
                }
            )
            
        }
}

export {dislikeController};