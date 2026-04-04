import Blog from "../models/blog.js";

const getAllPost = async (req,res)=>{
    try {
        const blogs = await Blog.find({});

        if(!blogs){
            return res.status(404).json(
                    {
                        success: false,
                        message: "no post found",
                    }
                );
        }

        res.status(200)
        .json(
            {
                success: true,
                data: blogs,
                message: "all post are fetched successfully"
            }
        )

        
    } catch (error) {
        
        console.log(error);
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

export {getAllPost};