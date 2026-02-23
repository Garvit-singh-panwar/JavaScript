import './Items.css';

// props is like we are parameters  its like we are passing objects in the arguments we can accesss the property of our arguments
function Items(props){

    let name = props.name; // using this we are accessing the name property which we passed inside our component 

    return (
        <>
        
            <p className='nirma'>{name}</p>
            {props.children}
        
        </>


    )

}

export default Items;