import { useState } from "react";

function Card( {id , image , info , price , name , remove }){

    const [readMore,setReadMore] = useState(false);

    const description = readMore ? info : `${info.substring(0,200)}.....`;


    function readMoreHandler(){
        setReadMore(!readMore);
    }

    function removeTour(){
        remove(id);
    }

    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">

                <div className="tour-details">
                    <h4 className="tour-price"> ₹{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description} 
                    <span className="readmore" onClick={readMoreHandler}>{readMore? `Show Less` : `Read More`}</span>
                </div>

            </div>
            
            <button className="btn-red" onClick={removeTour}>
                Not Interested
            </button>
        </div>
    )

}

export default Card;
