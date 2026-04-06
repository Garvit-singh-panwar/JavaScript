import Comments from "../models/comments.js";
import Blog from "../models/blog.js";

const commentsController = async (req , res) =>{
    try {
            const {id} = req.params;
            const{user , comment } = req.body;

            if( !id || !user || !comment){
                return res.status(400).json(
                                                {
                                                    success: false,
                                                    message: "require postId , userName  ,  comment",
                                                }
                                            );
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


            const newcomment = new Comments({
                                    blog: id , user, comment
                                });

            const updatedComment = await newcomment.save();

            const updatedBlog = await Blog.findByIdAndUpdate(
                                                id,
                                                {
                                                    $push:{comments:updatedComment._id}
                                                },
                                                {new:true}
                                            ).populate("comments")
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
                        data: updatedBlog,
                        message: "commented successfully"
                    }
                )


        } catch (error) {
                                                                    
                console.log(error);
                console.error(error);
                res.status(500)
                    .json(
                            {
                                success : false,
                                error : error.message,
                                message : "Internal server error"

                            }
                        );

            }
}

export {commentsController};