import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count , setCount] = useState(0);

  function decrementHandler(){

    setCount(count-1);

  }

   function incrementHandler(){
      setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className='  w-[100vw] h-[100vh]  flex flex-col justify-center items-center bg-[#344151] gap-10 ' >

      <div className='text-[#0398d4]  font-medium text-2xl'  >Increment & Decrement</div>
      <div className='bg-white flex justify-center gap-12 py-3 rounded-sm  text-[25px] text-[#344151]  ' >
        <button  onClick={decrementHandler} className='border-r-2 text center w-20 border-[#bfbfbf] text-5xl font-medium' >
          &minus;
        </button>
        <div className='font-medium gap-12 text-5xl text-center'>
            {count}
        </div>
        <button onClick={incrementHandler} className='border-l-2 text center w-20 border-[#bfbfbf] text-5xl font-medium'>
          &#43;
        </button>
      </div>
      
      <button onClick={resetHandler} className='bg-[#0398d4] text-white px-5 py-2  rounded-sm text-lg ' >
        Reset
      </button>
    


    </div>
  )
}

export default App;

