import { useState } from 'react'
import './App.css'
import {Routes , Route} from 'react-router-dom'
import MainHeader from './components/MainHeader'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import AuthContainer from './components/AuthContainer'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {

  const [isLogedIn , setIsLogedIn] = useState(false);


  return (
    <div className=''>  

      <Routes>
        <Route path='/' element={<MainHeader isLogedIn = {isLogedIn} setIsLogedIn = {setIsLogedIn} />}>
          <Route index element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/login' element={<Login setIsLogedIn={setIsLogedIn}/>} />
          <Route path='/signup' element={<SignUp setIsLogedIn={setIsLogedIn}/>}/>
        </Route>
      </Routes>

    </div>
  )
}

export default App;
