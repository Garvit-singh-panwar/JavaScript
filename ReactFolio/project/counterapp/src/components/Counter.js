import { useState } from "react";
import './Counter.css'
import Button  from "./Button";

function Counter(){

    const [i , setCountI] = useState(0);

    function incrementCount(){
        let num = i;
        setCountI(++num);
    }

    function decrementCount(){
        let num = i;
        setCountI(--num);
    }

    return(
        <div className="counter-countainer">
            <Button fun = {incrementCount} icon="&#43;" />            
            <div className="counter-value">
                {i}
            </div>
            <Button fun = {decrementCount} icon = "&minus;"/>           
        </div>
    )
}


export default Counter;