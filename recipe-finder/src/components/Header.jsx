import React from 'react'
import Chef from '../assets/Images/chef.jpg'
import Food from '../assets/Images/food.jpg'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='p-4 w-full text-3xl bg-yellow-100 flex justify-between'>
      <Link to='/'>
      <img src={Chef} alt="Chef" className='w-[50px] h-[40px] rounded-full'/>
      </Link>
      <p className=''>A Recipe Finder</p>
      <Link to='/'>
      <img src={Food} alt="Chef" className='w-[50px] h-[40px] rounded-full'/>
      </Link>
      
    </header>
  )
}

export default Header