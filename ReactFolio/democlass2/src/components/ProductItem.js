import "./ProductItem.css"
import ProductDate from "./ProductDate";
import Card from "./Card";
import { useState } from "react";


const ProductItem = (props)=>{



const [title,setTItle] = useState(props.title);

    function clickHandler(){
        setTItle("popcorn")
        console.log("Button Clicked");
    }
    return(
        <Card className='product-item'>
            <ProductDate date={props.date}/>
            <div className="product-item_description" >
                <h2>{title}</h2>
            </div>
            <button onClick={clickHandler}>Add to cart</button>
        </Card>   
    )
}

export default ProductItem;