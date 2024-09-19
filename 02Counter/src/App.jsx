import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const updateCounter=()=>{
    if(count<20) setCount(count+1);
  }
  const decrementCounter=()=>{
   if(count>0) setCount(count-1);
  }
  return (
    <>
      <h1>Basic Counter</h1>
      <button onClick={updateCounter}>Update Counter</button>
      <button onClick={decrementCounter}>Decrement Counter</button>
      <div>{count}</div>
    </>
  )
}

export default App
