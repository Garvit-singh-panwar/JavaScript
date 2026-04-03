import  Todo  from "../models/todo.js";

const getTodo = async (req,res)=>{

    try {
        // fetch all todo items from database
        const todos = await Todo.find({});
        res.status(200)
        .json(
            {
                success:true,
                data:todos,
                message:"Entire todo Data is fetched",
            }
        );

    } catch (error) {
        console.error(error);
        res.status(500)
        .json(
            {
                success :   false,
                error   :   error.message,
                message :   "Internal server error",
            }
        );
        
    }

}

const getTodoById = async (req,res)=>{

    try {
        const {id} = req.params ;
        const todo = await Todo.findById(id);

        if(!todo){
            return res.status(404)
            .json(
                {
                    success:false,
                    message:"No data is found with given Id",
                }
            );
        }

        res.status(200)
        .json(
            {
                success:true,
                data: todo,
                message:"Todo data is fetched successfully",
            }
        );

    } catch (error) {

        console.log(error);
        console.error(error);
        res.status(500)
        .json(
            {
                success:false,
                error: error.message,
                message:"Internal server error",
            }
        );
        
    }

}

export { getTodo};
export {getTodoById};
// mongoose library give you a lot of function like 
// create , findOne , findById , findByIdAndDelete , findByIdAndUpdate