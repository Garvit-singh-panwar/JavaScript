import './Button.css'

function Button(props){

    let func = props.fun;

    return(
        <div className="btn-container">
            <button onClick={func}>
                {props.icon}
            </button>
        </div>
    )
}

export default Button;