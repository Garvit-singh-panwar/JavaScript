import { useState } from 'react'
import { useRef } from 'react';
import './App.css'

function App() {
  const [time, setTime] = useState(0);

  let timerRef = useRef(null);

  const startTimer = ()=>{
    timerRef.current = setInterval(()=>{
      setTime(prev => prev+1) 
    }
      ,
      1000
    );
  }

  const stopTimer = ()=>{
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  const resetTimer = ()=>{
    
    stopTimer();
    setTime(0);

  }

  return (
    <>
     
     <h1>StopWatch: {time} second </h1>

     <button onClick={startTimer} >Start</button>
     <br /> <br />
     <button onClick={stopTimer}>Stop</button>
     <br /><br />
     <button onClick={resetTimer}>Reset</button>


    </>
  )
}

export default App;
