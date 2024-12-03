import React, { useEffect, useState } from 'react'
import {MdOutlineKeyboardBackspace} from 'react-icons/md'
import {RiRefreshFill} from 'react-icons/ri'
import {motion} from 'framer-motion'
import EmptyCart from '../assets/img/emptyCart.svg'
import {useSelector,useDispatch} from 'react-redux'
import { setCartShow, setClearCart } from '../store/slice/cartItemSlice'
import {CartItem} from './index'


const CartContainer = () => {
  const [tot, setTot] = useState(0);
  const cartShow=useSelector((state)=> state.products.showCart)
  const cartInfo=useSelector((state)=> state.products.cartInfo)
  const user=useSelector((state)=> state.users.userData);
  const dispatch=useDispatch();

  const showCartContainer=()=>{
    dispatch(setCartShow(!cartShow));
  }

  const clearCart=()=>{
    dispatch(setClearCart());
  }
  useEffect(()=>{
    const total=cartInfo.reduce((acc,data)=> acc + data.qty*data.price,0)
    setTot(total);
  },[cartInfo])


  return (
    <motion.div
    initial={{opacity:0, x:200}}
    animate={{opacity:1, x:0}}
    exit={{opacity:0, x:200}}
     className='fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]'>
      <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
        <motion.div whileTap={{scale:0.75}} onClick={showCartContainer}>
            <MdOutlineKeyboardBackspace className='text-textColortext text-3xl'/>
        </motion.div>
        <p className='text-textColor text-lg font-semibold'>Cart</p>
        <motion.p
        whileTap={{scale:0.75}}
        className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md cursor-pointer text-textColor text-base' onClick={clearCart}>
            Clear <RiRefreshFill/>
        </motion.p>
      </div>
      {/* bottom section */}
      {
        cartInfo && cartInfo.length > 0 ? (<div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col'>
          <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
              {/* cart item */}
              {
                (cartInfo.map((item)=>(
                  <CartItem key={item.id} item={item}/>
                )))
              }
          </div>
          {/* Total item */}
          <div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2'>
            <div className='w-full flex items-center justify-between'>
              <p className='text-gray-400 text-lg'>Sub Total</p>
              <p className='text-gray-400 text-lg'>$ {tot}</p>
            </div>
            <div className='w-full flex items-center justify-between'>
              <p className='text-gray-400 text-lg'>Delivery</p>
              <p className='text-gray-400 text-lg'>$ {tot+8.5}</p>
            </div>
  
            <div className='w-full border-b border-gray-600 my-2'></div>
  
            <div className='w-full flex items-center justify-between'>
              <p className='text-gray-400 text-lg'>Total</p>
            <p className='text-gray-400 text-lg'>$ {8.5}</p>
  
            </div>
            {
              user && (<motion.button className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg '>
                Check Out
                </motion.button>)
            }
  
          </div>
        </div>):(
          <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
            <img src={EmptyCart} alt="" className='w-300 ' />
            <p>Add some items to your cart</p>
          </div>
        )
      }
    </motion.div> 
  )
}

export default CartContainer
