import './ProductForm.css'
import { useState } from 'react';


function ProductForm(props){


    const [newTitle,setTitle] = useState('');
    const [newDate,setDate] = useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value);
    }

    function dateChangeHandler(event){
        setDate(event.target.value);
    }
    
    function formSubmitHandler(event){

        event.preventDefault();
        const productDate = {
            title: newTitle,
            date: newDate
        }

        passNewProduct(productDate);
        
        setTitle('');
        setDate('');

        
    }
    const passNewProduct = props.newProduct();

    return(
        <form onSubmit={formSubmitHandler}>

            <div className='new-product_controls'>
                <div className='new-product_control'>
                    <label>Title</label>
                    <input type='text' value={newTitle}  onChange={titleChangeHandler} ></input>
                </div>
                <div className='new-product_control'>
                    <label>Date</label>
                    <input type='date' value={newDate}  onChange={dateChangeHandler}  min='2023-01-01' max='2023-12-12'></input>
                </div>
                <div className='new-product_button'>
                    <button type='submit'>Add Product</button>
                </div>
            </div>

        </form>
    ) 

}

export default ProductForm;