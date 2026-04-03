import Todo from "../models/todo.js";

const UpdataTodo = async (req,res)=>{
    try {
        const {id} = req.params;
        const {title,description} = req.body;

        if(!id){
            return res.status(404)
                   .json(
                    {
                        success:false,
                        message: "no data found with this given id",
                    }
                   )
        }

         const update = await Todo.findByIdAndUpdate(
                id,
                {title:title,description:description,updatedAt:Date.now()},
                { new: true, runValidators: true }
         );

        if (!update) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        res.status(200)
        .json(
            {
                success:true,
                data: update,
                message: "data updated successfully",
            }
         )

       

    } catch (error) {
        
        res.status(500)
        .json(
            {
                success:false,
                error: error.message,
                message: "Internal server Error",
            }
        )

    }

}



export {UpdataTodo};