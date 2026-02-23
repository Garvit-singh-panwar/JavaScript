import './NewProduct.css'
import ProductForm from './ProductForm';


function NewProduct(props){

    function reciveAndGiveObj(obj){
        console.log("I am inside NewProducts component ");
        console.log("I recived a object ", obj , "I am now Passing it to App" );
        props.NewObj(obj);
    }  

    return(
       <div className='new-product'>    
        <ProductForm newProduct={reciveAndGiveObj} />
       </div>
    )

}


export default NewProduct;