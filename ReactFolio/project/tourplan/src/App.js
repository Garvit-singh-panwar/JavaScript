
import { useState } from 'react';
import './App.css';
import Tours from './components/Tours';
import data from './Data';

function App() {

  const [tours , setTours] = useState(data);

  function remove(id){
    const newTour = tours.filter((tour)=>{
      return  tour.id !== id;
     });
     setTours(newTour);
  }

  if(tours.length === 0){
    return(
      <div className='refresh' >
        <h1>
          No Tours Left
        </h1>
        <button className='btn-white' onClick={() => setTours(data) }>
          Refresh
        </button>
      </div>
    )
  }


  return (
    <div className="App">
        <Tours tours = {tours}  remove={remove} />
    </div>
  );
}

export default App;
