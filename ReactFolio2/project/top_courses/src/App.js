import logo from './logo.svg';
import { filterData , apiUrl } from './data';
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';

function App() {
  const [courses, setCourses] = useState([]); // Stores ALL courses from API
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title); // Default to "All"

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      // Most APIs for this project return { data: { ... } }
      setCourses(output.data); 
    } catch (error) {
      console.log("Network error");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App"> 
      <Navbar/>
      {/* We pass 'setCategory' to the Filter component. 
        When a button is clicked, it updates the category state here in App.js 
      */}
      <Filter 
        data={filterData} 
        category={category} 
        setCategory={setCategory} 
      />
      
      {/* We pass the category to Cards so it knows 
        to only show "Web Development" or "Design" 
      */}
      <Cards courses={courses} category={category} />
    </div>
  );
}


export default App;