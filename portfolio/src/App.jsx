import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Home from './Components/Home/Home'


function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />}></Route>
          <Route path='skills' element={<Skills />}></Route>
          <Route path='prjects' element={<Projects />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='about' element={<About />}></Route>
        </Route>
      </Routes>

    </>
  )
}

export default App
