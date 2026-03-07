import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import PageNotExist from './components/PageNotExist';
import Contact from './components/Contact';
import Support from './components/Support';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li> <NavLink to="/"> Home</NavLink> </li>
          <li> <NavLink to="/about">About</NavLink> </li>
          <li> <NavLink to={'/contact'}>Contact</NavLink> </li>
          <li> <NavLink to={'/support'}>Support</NavLink> </li>
        </ul>
      </nav>


      <Routes>
        {/* The Parent Route */}
        <Route path='/' element={<MainHeader />}>    
            {/* The default page when path is "/" */}
              <Route index element={<Home />} /> 
              
              {/* Child Routes */}
              <Route path='/about' element={<About />} /> 
              <Route path='/support' element={<Support />} /> 
              <Route path='/contact' element={<Contact />} /> 
              
              {/* Catch-all for undefined paths */}
              <Route path='*' element={<PageNotExist />} /> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
