import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import Layout from './component/Layout/Layout'
import Home from './component/Home/Home'
import Retrieve from './component/Retrieve/Retrieve'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='/retrieve' element={<Retrieve/>}/>
      </Route>
      </Routes>
    </>
  )
}

export default App
