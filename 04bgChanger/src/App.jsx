import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor, setbgColor] = useState("pink");

  return (
    <div className='w-screen h-screen px-8' style={{backgroundColor:bgColor}} >
      <div className='fixed flex justify-center items-center    bottom-12 inset-x-0 '>
        <div className='flex flex-wrap justify-center items-center  gap-5 px-2 py-2 bg-slate-50 rounded'>
          <button className='px-2 py-1 rounded text-white bg-red-500' onClick={()=>{
            setbgColor("Red");
          }}>
            Red
          </button>
          <button className='px-2 py-1 rounded text-white bg-blue-500' onClick={()=>{
            setbgColor("blue");
          }}>
            Blue
          </button>
          <button className='px-2 py-1 rounded text-white bg-green-500' onClick={()=>{
            setbgColor("green");
          }}>
            Green
          </button>
          <button className='px-2 py-1 rounded text-white bg-purple-500' onClick={()=>{
            setbgColor("purple");
          }}>
            Purple
          </button>
          <button className='px-2 py-1 rounded text-white bg-yellow-500' onClick={()=>{
            setbgColor("yellow");
          }}>
            Yellow
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
