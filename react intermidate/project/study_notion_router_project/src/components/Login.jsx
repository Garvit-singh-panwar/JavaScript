import AuthContainer from "./AuthContainer"
import loginImg from '../assets/loginImg.webp'

function Login(props){
    const setIsLogedIn = props.setIsLogedIn;
    return(
        <>
        <AuthContainer
            title="Welcome Back"
            desc1="built for today, tomorrow and beyond."
            desc2="Education to future-proof your Career."
            image={loginImg}
            formType="login"
            setIsLogedIn={setIsLogedIn}
        />
        </>
    )
}

export default Login;