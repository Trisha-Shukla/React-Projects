import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import ImageElement from './components/ImageElement/ImageElement'
import SearchImages from './components/SearchImages/SearchImages'

function App() {
  return (
    
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />  {/* Use 'index' for default route */}
          <Route path='/photo/:id' element={<ImageElement />} />  {/* Dynamic Route */}
          <Route path='/search/:searchQuery' element={<SearchImages />} />  {/* Dynamic Route */}
        </Route>
      </Routes>
    
  )
}

export default App
