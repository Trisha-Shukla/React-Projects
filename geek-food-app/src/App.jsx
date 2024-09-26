import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Quotes from './components/Quotes/Quotes'
import MainPanel from './components/MainPanel/MainPanel'

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<MainPanel />}>
          <Route path='' element={<Home />}></Route>
          <Route path='quotes' element={<Quotes />}></Route>
        </Route>
      </Routes>

    </>
  )
}

export default App
