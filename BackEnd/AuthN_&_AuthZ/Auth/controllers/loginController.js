import User from "../models/UserModel.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';


dotenv.config();

// controller for login 
const loginController = async ( req,res )=>{
   try {

        // fetching email and password from request body
        const {email , password} = req.body;

        // if not present return response for bad request
        if(!email || !password){
            return res.status(400).json(
                {
                    success: false,
                    message: "give all the required fields"
                }
            );
        }

        // if present then find the user
        const user = await User.findOne({email}).lean();

        // if not found then send response
        if(!user){
            return res.status(400).json(
                {
                    success:false,
                    message: "no user found for the given email",
                }
            );
        }
        
        // if user found then check password is correct or not
        const isMatch = await bcrypt.compare(password, user.password);


        // if password ont match then return response
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Incorrect password"
            });
        }
        

        // inatilize payload of jwt token
        const payload = {
            email: user.email,
            role: user.role
        };

        // initialize options of cookies
        const options = {
            httpOnly: true, // prevents JS access
            secure: true,   // use HTTPS
            maxAge: 3 * 24 * 60 * 60 * 1000 // 3 days
        }

        // making token
        const token = jwt.sign(payload ,process.env.JWT_SECRET,{ expiresIn: "3d" })

        // defining user object data token
        user.token = token;
        delete user.password ;  // remove sensitive field

        // sending tiken in cookies
        res.cookie("token", token , options)
        .status(200)
        .json(
            {
                success: true,
                data: user,
                message: "login successfull"

            }
        )

   } catch (error) {

    // if something happens or they throw error we execute this 
        console.error(error);
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "Server error"
        });
    
   }

}

export {loginController}