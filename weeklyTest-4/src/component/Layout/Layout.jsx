import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'


function Layout() {
  return (
    <div className='flex flex-col items-center'>
      <Navbar/>  
      <Outlet/>
    </div>
  )
}

export default Layout