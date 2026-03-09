import { useState } from "react";
import { FaEyeSlash , FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LogInForm(props){

    const setIsLogedIn = props.setIsLogedIn ;

    const [formData , setFormData] = useState({
        email: '',
        password: '',
    })


    const navigate = useNavigate();


    const [showPassword , setShowPassword] = useState(false);

    function changeHandler(event){

        const {name , value , type , checked} = event.target;

        setFormData((prevData)=>{
            return({
                ...prevData,
                [name] :   type === `checkbox` ? checked : value  
            })
        })

    }

    function submitHandler(event){
            event.preventDefault();

            if(!formData.email || !formData.password) {
                toast.error("Please fill in all fields");
                return;
            }
            
            console.log("Logging in with:", formData);
    
            setIsLogedIn(true);
            
            toast.success("Logged in successfully!");
            
            navigate('/dashboard');
    
        }

    return(
       <form onSubmit={submitHandler} >
            <label>
                <p>Email Address <sup>*</sup></p>
                <input type="text" 
                    required
                    placeholder="Enter email id" 
                    onChange={changeHandler}
                    value={formData.email}
                    name="email"
                />
            </label>

            <label >
                <p>
                    password <sup>*</sup>
                </p>
                <input type={showPassword ? 'text' : 'password'}
                    required
                    name="password"
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter your password"
                 />
                 <span onClick={()=>{setShowPassword(prev => !prev )}}>
                    {!showPassword ? <FaEyeSlash/> : <FaEye/>}
                 </span>
                <Link to="#">
                    <p>
                        Forget Password
                    </p>
                </Link>
            </label>

            <button type="submit">
                Log In
            </button>
       </form>
    )
}

export default LogInForm;   