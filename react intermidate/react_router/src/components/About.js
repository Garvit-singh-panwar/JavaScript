import {useNavigate} from 'react-router-dom'


function About(){

    const navigate = useNavigate();

    function clickHandler(){
        navigate('/');
    }

    return(
        <div>
            <h1>This is About Page</h1>
            <div>
                <button onClick={clickHandler}> Move to Home Page</button>
            </div>
        </div>
    )
}

export default About;
