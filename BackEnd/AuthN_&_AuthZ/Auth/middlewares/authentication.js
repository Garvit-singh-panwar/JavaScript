    import jwt from 'jsonwebtoken';
    import dotenv from 'dotenv'
    import User from '../models/UserModel.js';

    dotenv.config();

    // checking the user is a valid user or not 
    const authentication = async(req , res , next)=>{
    try {

            // parsing token from req ki body
            const  {token}  = req.body ;

            // checking token present or not 
            if(!token){
                return res.status(400).json(
                    {
                        success:false,
                        message: "login your account "
                    }
                )
            }


            // decoding token
            // and
            // checking token is decoding or not
            try {
                const decode = jwt.verify(token,process.env.JWT_SECRET);
                
            // kept decode in req.user
                req.user = decode;
                
            } catch (error) {
                return res.status(401).json(
                    {
                        success: false,
                        message: "access to student failed wrong token login again"
                    }
                )
            }

            // calling next middleware
            next();

    // Handling error 
    }catch (error) {
        
            console.log(error);
            res.status(500)
            .json(
                {
                    success:false,
                    message: "server Error while Authentication"
                }
            );

    }

    };

    export {authentication};