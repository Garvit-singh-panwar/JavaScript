    import express from 'express';

    // Controllers

    import {signupController} from "../controllers/signUpController.js"
    import { loginController } from '../controllers/loginController.js';


    // middlewares 

    import { adminAuthorization } from '../middlewares/adminAuthorization.js';
    import { studentAuthorization } from '../middlewares/studentAuthorization.js';
    import { authentication } from '../middlewares/authentication.js';
    const router = express.Router();


    // non Protected routes 

    router.post("/signup" , signupController);
    router.post("/login" , loginController);


    // Protected Routes

    router.get("/student" , authentication , studentAuthorization , async(req,res)=>{
        res.send("welcome to the students page");
    });

    router.get("/Admin" , authentication , adminAuthorization , async(req,res)=>{
        res.send("welcome to the Admin page");
    })

    export default router;