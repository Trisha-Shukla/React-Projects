import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { DetailsPage, Header, ListPage } from './components'

function App() {

  return (
    <div className='flex flex-col min-h-screen h-screen'>
      <Header/>
    <Router>
      <Routes >
        <Route path='/' element={<ListPage/>}/>
        <Route path='/details/:id' element={<DetailsPage/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
