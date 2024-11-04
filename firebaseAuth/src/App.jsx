import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter  as Router,Routes,Route} from 'react-router-dom'
import Layout from './component/Layout'
import Login from './container/Login/Login'
import BlogContextProvider from './context/context'
import BlogList from './container/BlogList/BlogList'
import CreateBlog from './container/CreateBlog/CreateBlog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BlogContextProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='' element={ <BlogList/> }/>
            <Route path='/create' element={ <CreateBlog/> }/>
        </Route>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
    </BlogContextProvider>
  )
}

export default App
