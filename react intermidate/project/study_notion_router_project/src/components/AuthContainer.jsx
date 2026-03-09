import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";
import frameImg from '../assets/frameImg.png'

function AuthContainer(props){

    const formType = props.formType;
    const title = props.title;
    const desc1 = props.desc1;
    const desc2 = props.desc2;
    const setIsLogedIn = props.setIsLogedIn;
    const image = props.image;


    return(
        <div>   
            <div>
                <h2>{title}</h2>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

                {formType === "signup" ? <SignUpForm setIsLogedIn = {setIsLogedIn}/> : <LogInForm setIsLogedIn = {setIsLogedIn} />}

                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>
 
                <button>
                    <p>Sign up with Google</p>
                </button>
            </div>
            <div>
                <img src={image} alt="students image" />
                <img src={frameImg} alt="back frame image" />
            </div>
        </div>
    )
}


export default AuthContainer;