import React, { useEffect, useState } from 'react'
import Delivery from '../assets/img/delivery.png'
import HomeContainer from './HomeContainer'
import {motion} from 'framer-motion'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import {RowContainer,MenuContainer, CartContainer} from './index'
import {useSelector} from 'react-redux'


const MainContainer = () => {
  const [scrollValue,setScrollValue]=useState(0);
  const foodItems=useSelector((state)=> state.products.cartItem)
  const cartShow=useSelector((state)=> state.products.showCart)
  // console.log(foodItems);
  

  useEffect(()=>{

  },[scrollValue])
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer/>
      <section className='w-full my-6 '>
        <div className='w-full flex items-center justify-between'>
          <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100'>
            Our fresh & healthy fruits
          </p>
          <div className='hidden md:flex gap-3 items-center'>
            <motion.div whileTap={{scale:0.75}} onClick={()=>setScrollValue(-200)} className='w-8 h-8 bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center'>
           <MdChevronLeft
            className='text-lg text-white'/>
            </motion.div>
            <motion.div whileTap={{scale:0.75}} onClick={()=>setScrollValue(200)} className='w-8 h-8 bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center'>          
            <MdChevronRight  className='text-lg text-white'/>
            </motion.div>
          </div>
        </div>
        <RowContainer flag={true} scrollValue={scrollValue} data={foodItems?.filter((n) => n.category === "fruits")}/>

      </section>
      <MenuContainer/>
      {cartShow && 
      <CartContainer/>
      
      }
      
      
    </div>
  )
}

export default MainContainer
