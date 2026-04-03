import Todo from "../models/todo.js";

const deleteTodo = async (req,res)=>{

    try {
        
        const {id} = req.params;
        if(!id){
            return res.status(404)
            .json(
                {
                    success:false,
                    message: "no data found from given id",
                }
            )
        }
        const deletedTodo = await Todo.findByIdAndDelete(id);

        if(!deletedTodo){
             return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        res.status(200)
        .json(
            {
                success:true,
                data:deletedTodo,
                message: "Todo deleted successfully",
            }
        )


    } catch (error) {

        console.log(error);
        console.error(error);
        res.status(500)
        .json(
            {
                success:false,
                error:error.message,
                message: "Internal server error",
            }
        )
        
    }

}

export {deleteTodo};