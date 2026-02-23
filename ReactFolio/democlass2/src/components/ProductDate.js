import './ProductDate.css';
import Card from "./Card";



const ProductDate = (props)=>{
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const  day = props.date.toLocaleString('en-US', { day: '2-digit'});
    const year  = props.date.getFullYear();

    return(
        <Card className='product-date' >
            <div className="product-date_month">{month}</div>
            <div className="product-date_year">{year}</div>
            <div className="product-date_day">{day}</div>
        </Card>
    );
    
};

export default ProductDate;