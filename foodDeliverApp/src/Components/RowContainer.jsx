import React, { useEffect, useRef } from 'react'
import { motion} from 'framer-motion'
import { MdShoppingBasket } from 'react-icons/md'
import NotFound from '../assets/img/NotFound.svg'
import {useDispatch, useSelector} from 'react-redux'
import { setCartInfo } from '../store/slice/cartItemSlice'

const RowContainer = ({flag,scrollValue,data}) => {
  const rowContainer=useRef(0);
  const dispatch=useDispatch();
  const cartInfo=useSelector((state)=> state.products.cartInfo);
  

  const addToCart=(item)=>{
    dispatch(setCartInfo(item));
    const setLocalstorage=[...cartInfo,item]
    localStorage.setItem("cartInfo",JSON.stringify(setLocalstorage))
  }

  useEffect(()=>{
    
    rowContainer.current.scrollLeft+=scrollValue;
  },[scrollValue])
  return (
    <div ref={rowContainer} className={`w-full flex items-center gap-3 scroll-smooth my-12 ${flag? 'overflow-x-scroll scrollbar-none': 'overflow-x-hidden flex flex-wrap justify-center'}`}>
      
      {
        data && data.length>0 ? data.map((item)=>(
          <div key={item.id} className='w-275 h-[225px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className="w-full flex items-center justify-between">
              <motion.div
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <img
                  src={item?.image}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>
            <motion.div
            whileTap={{scale:0.75}}
            className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md' onClick={()=>addToCart(item)}
            >
                <MdShoppingBasket className='text-white'/>
            </motion.div>

        </div>

        <div className='w-full flex flex-col items-end justify-end'>
            <p className='text-textColor font-semibold text-base md:text-lg'>
                {item.name}
            </p>
            <p className='mt-1 text-sm text-gray-500'>
                {item.calories} Calories
            </p>
            <div className='flex items-center gap-8'>
                <p className='text-lg text-headingColor font-semibold'>
                    <span className='text-sm text-red-500'>$</span>{item.price}
                </p>
            </div>

        </div>

      </div>
        )) :(
          <div className='w-full flex flex-col items-center justify-center'>
            <img src={NotFound} className='h-340' alt="" />
            <p>Items not Available</p>
          </div>
        )
      }
    </div>
  )
}

export default RowContainer
