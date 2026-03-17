import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [num , setNum] = useState(0);

  function expensiveTask(num){
    console.log("inside expensive task");
    for(let i = 0 ; i <= 1000000000 ; i++){}
    return num*2;

  }

  let doubleValue = useMemo(() => expensiveTask(num) , [num]);

  return (
    <>
      <section id="center">
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count : {count}
        </button>

      < input type="number"
        placeholder='Enter number' 
        value={num}
        onChange={(e)=>{ setNum(e.target.value) }}
      />
        <p>Double : {doubleValue}</p>
      </section>

    </>
  )
}

export default App
