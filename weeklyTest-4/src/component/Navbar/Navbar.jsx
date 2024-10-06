import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full'>
      <h1 className='p-5 bg-blue-600 text-center text-white font-bold text-2xl'>Trisha Directory App</h1>
      <div className='p-7 space-x-5 '>
       <Link to='/'><button className='px-2 py-2 bg-blue-600 text-white'> Add New Person</button></Link><Link to='/retrieve'>  <button className='px-2 py-2 bg-blue-600 text-white'>Retrieve Information </button></Link></div>
    </div>
  )
}

export default Navbar
