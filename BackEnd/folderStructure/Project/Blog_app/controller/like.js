import Likes from "../models/likes.js";
import Blog from "../models/blog.js";


const likeController = async (req , res)=>{
        try {
            const {  id  } = req.params;
            const { user } = req.body;

            if(!id || !user){
                return res.status(400)
                .json(
                    {
                        success: false,
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

            const like =  new Likes({
                blog: id, user: user
            })

            const updatedLike = await like.save();

            const updatedBlog = await Blog.findByIdAndUpdate(
                                id ,
                                {
                                    $push: {likes: updatedLike._id}
                                },
                                { new: true },
                            ).populate(("likes"))
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
                    message: "you liked this blog",
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

export {likeController}