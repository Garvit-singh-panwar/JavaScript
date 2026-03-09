import { Outlet } from "react-router-dom"
import Navbar from "./Navbar";


const MainHeader = (props)=>{

    const { isLogedIn , setIsLogedIn } = props;

    return(
        <div   >
            <Navbar  isLogedIn={isLogedIn}  setIsLogedIn={setIsLogedIn} />
            
            <Outlet/>

            
        </div>
    )
}

export default MainHeader;