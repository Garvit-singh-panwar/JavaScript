
const adminAuthorization = async(req,res,next) =>{

    try{
        // parsing role from req.user
        const { role } = req.user;
        
        // checking the role is admin or not 
        if(role !== "Admin"){
            return res.status(403).json(
                {
                    success: false,
                    message: "you are not allowed to access Admin route"
                }
            )
        }

        // calling next Middleware
        next();

// Error Handling
    }catch(error){
        console.error(error);
        res.status(500).json(
            {
                success: false,
                message: "Server Error something went wrong while accessing the admin route"
            }
        )
    }

};

export {adminAuthorization};