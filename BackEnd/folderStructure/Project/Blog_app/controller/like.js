import blog from "../models/blog.js";

const likeBlog = async (req , res)=>{
        try {
            const {id} = req.params;

            if(!id){
                return res.status(404)
                .json(
                    {
                        success: false,
                        message: "Blog ID is required",
                    }
                )
                
            }

            const updatedBlog = await blog.findByIdAndUpdate(
                                id ,
                                {
                                    $inc:{likes: 1}
                                },
                                { new: true },
                            );

            if(!updatedBlog){
                return res.status(404)
                .json(
                    {
                        success:false,
                        message: "Blog not found for given ID",
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

export {likeBlog};