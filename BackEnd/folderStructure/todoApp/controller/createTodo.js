import  Todo  from "../models/todo.js";

// define route handler

const createTodo = async (req,res)=>{

    try {
        // extract title and description form request body
        const  {title , description} = req.body;
        //Create  a new todo object and insert in the database   
        const response = await Todo.create({title,description});

        // send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data: response,
                message: "Entry Created Successfully",
            }
        )

    } catch (error) {
        
        console.error(error);
        console.log(error),
        res.status(500)
        .json({
            success:false,
            data:"Internal server error",
            message:error.message
        })

    }

}

export {createTodo};