import { Link , NavLink } from "react-router-dom";
import {toast} from 'react-toastify';



function Navbar( props){

    const { isLogedIn, setIsLogedIn} = props;

    return(
        <header className="flex w-[100vw] h-[3rem] border-3  items-center justify-evenly">
            <div className="">
                <Link to={"/"}><img src="" alt="website logo" /></Link>
            </div>

            <nav className="navigation flex w-[50%] justify-evenly ">
                <ul className="Pages flex gap-10">
                    <li> <NavLink to={"/"}>Home</NavLink>  </li>
                    <li> <NavLink to={"/"}>About</NavLink></li>
                    <li> <NavLink to={"/"}>Contact</NavLink></li>
                </ul>
            </nav>

            <div className="userLogs flex gap-10">
                    { isLogedIn ? 
                        <>
                            <Link to={'/'}  > 
                                <button onClick={()=>{
                                                        setIsLogedIn(false);
                                                        toast.success("Loged out Sucessfully...");
                                                    }
                                                }>
                                    Logout
                                </button>
                            </Link>  
                            <NavLink to={'/dashboard'}> 
                                <button >
                                    Dashboard
                                </button>
                            </NavLink> 
                            
                        </>
                        :
                        <>

                            <Link to={'/login'}> 
                                <button >
                                    Log In 
                                </button>
                            </Link> 
                            <Link to={'/signup'}> 
                                <button>
                                    Sign Up 
                                </button>
                            </Link> 
                            
                        </>
                    }
            </div> 
        </header>
    )

}

export default Navbar;