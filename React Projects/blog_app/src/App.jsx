import { createContext, useState } from 'react'
import './App.css'
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <Header/>
      <Blogs/>
      <Pagination/>
    </>
  )
}

export default App;
