import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='grid grid-cols-[150px_1fr] bg-transparent fixed top-0 inset-x-0 z-50 p-5 items-center'>
      <img src="https://shloksomani.github.io/react-portfolio/static/media/male1.3ec3891b.png" alt="profile" />
      <div className='lg:hidden text-white font-semibold text-lg justify-self-end'>=</div>
      <ul className='hidden lg:flex space-x-8 text-lg justify-self-center text-white font-semibold '>
     {/* <li >Home</li>
     <li >About</li>
     <li >Projects</li>
     <li >Skills</li>
     <li >Contact</li> */}
        <li><NavLink to="/" className={({isActive})=>` ${isActive?"underline":" "}`}>Home</NavLink></li>
        <li><NavLink to="/about" className={({isActive})=>` ${isActive?"underline":" "}`}>About</NavLink></li>
        <li><NavLink to="/prjects" className={({isActive})=>` ${isActive?"underline":" "}`}>Projects</NavLink></li>
        <li><NavLink to="/skills" className={({isActive})=>` ${isActive?"underline":" "}`}>Skills</NavLink></li>
        <li><NavLink to="/contact" className={({isActive})=>` ${isActive?"underline":" "}`}>Contact</NavLink></li>
      </ul>
    </div>
  )
}


export default Navbar
