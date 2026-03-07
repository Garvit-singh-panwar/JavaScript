import { useNavigate } from "react-router-dom";


function Home(){

    const navigate = useNavigate();

    function clickHandler(){
        navigate(-1);
    }

    return(
        <div>
            <h1>This is Home Page</h1>
            <div>
                <button onClick={clickHandler} > GO Back</button>
            </div>
        </div>
    )
}

export default Home;