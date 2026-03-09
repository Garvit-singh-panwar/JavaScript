import { useState } from "react";
import { FaEyeSlash , FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignUpForm(props){


    const setIsLogedIn = props.setIsLogedIn ;

    const [formData , setFormData] = useState({
        role: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })


    const navigate = useNavigate();

    const [showPassword , setShowPassword] = useState(false);
    const [showConfirmPassword , setShowConfirmPassword] = useState(false);
 
    function changeHandler(event){
        const {name , value , checked , type} = event.target;

        setFormData(prevData => {
            return(
                {
                    ...prevData,
                    [name] : type === 'checkbox' ? checked : value
                }
            )
        })
    }


    function submitHandler(event){
        event.preventDefault();

        if(Object.values(formData).some(value => value === "")){
            toast.error("Please fill in all fields");
            return;

        }

        // The .some() method is a powerful JavaScript array tool used to check if at least one element in an array passes a specific test (provided as a function).
        // It doesn't change the array; it simply returns a boolean (true or false).


        // Think of .some() like a "logical OR" across an entire list.
        // As soon as it finds one item that matches your condition, it stops searching and returns true. 
        // If it reaches the end of the array without finding a match, it returns false.

        // Method                  Requirement to return true
        // .some()                 At least one item must match.
        // .every()                Every single item must match.

        if(formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
            
        console.log("Logging in with:", formData);
    
        setIsLogedIn(true);
            
        toast.success("Logged in successfully!");
            
        navigate('/dashboard');

    }

    return(
        <form onSubmit={submitHandler} >
            <div>
                <label >
                    <p>
                        Student
                    </p>

                    <input type="Radio"
                        checked={formData.role === 'student'}
                        className="hidden" 
                        name="role"
                        onChange={changeHandler}
                        value='student'
                    />
                </label>    
                <label >
                    <p>
                        Instructor
                    </p>

                    <input type="Radio"
                        checked={formData.role === 'instructor'}
                        className="hidden" 
                        name="role"
                        onChange={changeHandler}
                        value='instructor'
                    />
                </label>  
            </div>

            <div>
                <label>
                    <p>First Name</p>
                    <input required 
                        type="text"
                        placeholder="Enter your first name"
                        onChange={changeHandler}
                        value={formData.firstName}
                        name="firstName"
                    />
                </label>
                <label>
                    <p>Last Name</p>
                    <input required
                        type="text"
                        placeholder="Enter your Last name"
                        onChange={changeHandler}
                        value={formData.lastName}
                        name="lastName"
                    />
                </label>
            </div>

            <label>
                <p>Email</p>
                <input required 
                    type="email"
                    placeholder="Enter your Email"
                    onChange={changeHandler}
                    value={formData.email}
                    name="email" 
                />
            </label>

            <div>
                <label >
                    <p>Password</p>
                    <input required
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={changeHandler}
                        name="password"
                    />

                    <span onClick={()=>{setShowPassword(prev => !prev)}}>
                        {showPassword ?  <FaEye/> : <FaEyeSlash/>}
                    </span>
                </label>

                <label >
                    <p>Confirm Password</p>
                    <input required
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Enter confirmPassword"
                        value={formData.confirmPassword}
                        onChange={changeHandler}
                        name="confirmPassword"
                    />

                    <span onClick={()=>{setShowConfirmPassword(prev => !prev)}}>
                        {showConfirmPassword ?  <FaEye/> : <FaEyeSlash/>}
                    </span>
                </label>
            </div>

            <button type="submit">
                Create Account
            </button>
        </form>
    )
}

export default SignUpForm;  