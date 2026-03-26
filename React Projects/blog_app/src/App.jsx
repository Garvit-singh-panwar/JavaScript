import './App.css'
import Header from './components/Header';
import Pagination from './components/Pagination';
import {Outlet} from 'react-router-dom'

function App() {

  return (
    <div className='relative w-full h-full '>
      <Header/>
      <Outlet />
      <Pagination/>
    </div>
  )
}

export default App;
