import AuthContainer from "./AuthContainer"
import signupImg from '../assets/signupImg.webp'

function SignUp(props){

    const setIsLogedIn = props.setIsLogedIn;
    return(
        <>
            <AuthContainer
                title="Join the millions learning to code with studyNotion for free"
                desc1="Build skills for today, tomorrow and beyond."
                desc2="Education to future-proof your career."
                image={signupImg}
                formType="signup"
                setIsLogedIn={setIsLogedIn}
            />
        
        </>
    )
}

export default SignUp;