import { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { increment,decrement } from './features/counter/CounterSlice'
import './App.css'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function incrementHandler(){
    dispatch(increment());

  }

  function decrementHandler(){
    dispatch(decrement());
  }

  return (
    <>
      <div>
        <button onClick={incrementHandler}> + </button>
        <div> <p> <span> Count :  </span> {count} </p></div>
        <button onClick={decrementHandler} >−</button>
      </div>
    </>
  )
}

export default App
