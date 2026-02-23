
import './App.css'
import Products from './components/Products';
import NewProduct from './components/NewProduct';

const App = () =>{

  const products = [
    {
      id: 'p1',   
      title: 'Nrima',
      amounts: 100,
      date: new Date(2021,8,10),
    },
    {
      id: 'p2',
      title: 'Sirf Excel',
      amounts: 200,
      date: new Date(2021,2,2),
    },
    {
      id: 'p3',
      title: 'Tide',
      amounts: 130,
      date: new Date(2021,12,28),
    },
    {
      id: 'p4',
      title: 'Arial',
      amounts: 180,
      date: new Date(2021,5,5),
    }        
  ];

  function newProduct(obj){
    console.log("I am inside the app")
    console.log(obj);

  }

  return(
    <div>
      <NewProduct NewObj={newProduct} />
      <Products items={products} ></Products>
      
    </div>
  )

}




export default App
