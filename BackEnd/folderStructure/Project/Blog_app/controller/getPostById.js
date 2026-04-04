import Blog from "../models/blog.js";

const getPostById = async (req , res)=>{
    try {
        
        const {id} = req.params;
        const blog = await Blog.findById(id);

        if(!blog){
            return res.status(404).json(
                {
                    success:false,
                    message: "post not found"
                }
            )
        }

        res.status(200)
        .json(
            {
                success: true,
                data: blog,
                message: "post fetched successfully",
            }
        )

    } catch (error) {
        console.log(error),
        console.error(error);
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

export {getPostById};