import User from "../models/UserModel.js";
import bcryptjs from 'bcryptjs';


// function to hash password
 const hashPassword = async (password) => {
            return await bcryptjs.hash(password, 10);
        };

// making controller for signup 
const signupController = async(req, res)=>{
    try {
        const {username , email , password , role } = req.body;

        // check user send all the required fields  in request body
        if(!username || !email || !password  || !role){
            return res.status(400).json(
                {
                    success: false,
                    message: "please send all the required data"
                }
            );
        }

        // checking email is correct or not 
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Enter the email carefully"
                }
            )
        }

        // check password length is grater than 8 or not 
        if(password.length < 8){
            return res.status(400).json(
                {
                    success: false,
                    message: "minimum length of password is 8"
                }
            )
        }

        // hashing pasword
        const hashedpassword = await hashPassword(password);

        // entrying it in usermodel 
        const user = new User({
            username,
            email,
            password: hashedpassword,
            role
        })

        // saving it in database 
        const newUser = await user.save();

        if(!newUser){
            return res.status(401).json(
                {
                    success: false,
                    message: "something went wrong "
                }
            )
        }

        res.status(200).json(
            {
                success: true,
                message: "User created successfully"
            }
        );
    } catch (error) {

        console.error(error);
        res.status(500).json(
            {
                success: false,
                error: error.message,
                message: "Internal server error"
            }
        );
        
    }


}


export {signupController};
export {hashPassword};