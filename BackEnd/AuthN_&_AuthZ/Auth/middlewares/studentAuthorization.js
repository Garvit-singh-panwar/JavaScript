
const studentAuthorization = async(req , res , next)=>{
    try {
        
        // parsing role from req.role
        const {role} = req.user;


        // checking role is correct or not 
        if(role !== "student"){
            return res.status(403).json(
                {
                    success:false,
                    message: "you are not allowed to access student route",
                }
            )
        }


        // calling next Middleware
        next();

        // Handling middleware
    } catch (error) {
        
        console.error(error);
        res.status(500).json(
            {
                success: false,
                message: "Server error something went wrong while accessing student route"
            }
        );

    }

};


export {studentAuthorization};