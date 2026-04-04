import Blog from "../models/blog.js";

const createBlog = async (req,res)=>{
    
    try {
        const {author , title , description} = req.body;
        const response = await Blog.create(
                                    {
                                        author: author,
                                        title: title,
                                        description: description,
                                    }
                                );
        res.status(200)
        .json(
            {
                success: true,
                data: response,
                message: "blog created successfully",
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

export {createBlog};