import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'


function MainPanel() {
  return (
    <div>
       <Header/>
       <Outlet/>
       <Footer/>
    </div>
  )
}

export default MainPanel
