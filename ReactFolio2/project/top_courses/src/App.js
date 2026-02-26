import logo from './logo.svg';
import { filterData , apiUrl } from './data';
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { toast } from 'react-toastify';


function App() {
 
const [courses , setCourses] = useState(null);
const [loading,setLoading] = useState(true);
const [category,setCategory] = useState(filterData[0].title)
  
async function fetchApiData(){

  setLoading(true);

  try {

    const response = await fetch(apiUrl);
    const output = await response.json();
    setCourses(output.data);
    
  } catch (error) {
    console.log("something went wrong network error");
    toast("something went wrong error");
  }

  setLoading(false)

}


useEffect(()=>{
  fetchApiData();
},[])

  return(
    <div className="min-h-screen flex-col flex bg-bgDark2">
      <div>
        <Navbar/>
      </div>
      <div className="bg-bgDark2" >
        <div>
          <Filter filterData = {filterData} setCategory = {setCategory} category={category}/>
        </div>
        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
         {loading ? <Spinner/> : <Cards courses = {courses} category={category}/> } 
        </div>
      </div>
    </div>
  )

}


export default App;