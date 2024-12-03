import React, { useState } from 'react'
import {BiMinus,BiPlus} from 'react-icons/bi'
import { motion} from 'framer-motion'
import {useDispatch} from 'react-redux'
import { setRemoveFromCart, setUpdateCart } from '../store/slice/cartItemSlice'

const CartItem = ({item}) => {
  const [qty, setQty] = useState(item.qty)
  const dispatch=useDispatch();

  const updateQty=(action)=>{
    let updatedQty=qty;
    if (action === "add") {
      updatedQty += 1; // Increment quantity
    } else if (action === "subtract" && qty > 0) {
      updatedQty -= 1; // Decrement quantity but keep it > 0
    }

    if(updatedQty===0){
      removeItemFromCart();
    }else{
      setQty(updatedQty);
  
      const updatedItem = { ...item, qty: updatedQty };
      dispatch(setUpdateCart(updatedItem));

    }
  }
  const removeItemFromCart = () => {
    dispatch(setRemoveFromCart(item.id)); // Remove from Redux store
    const cart = JSON.parse(localStorage.getItem("cartInfo")) || [];
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id); // Exclude the removed item
    localStorage.setItem("cartInfo", JSON.stringify(updatedCart)); // Update local storage
  };

  return (
    <div className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2'>
                  <img src={item.image} alt="" 
                  className='w-20 h-20 max-w-[60px] rounded-full object-contain'/>
                  {/* name sec */}
                  <div className='flex flex-col gap-2'>
                      <p className='text-base text-gray-50'>{item.name}</p>
                      <p className='text-sm block text-gray-300 font-semibold'>$ {parseFloat(item?.price)*qty}</p>
                  </div>
                  {/* button sec */}
                  <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
                  <motion.div whileTap={{scale:0.75}} onClick={() => updateQty("subtract")}>
                  <BiMinus className='text-gray-50'/>
                  </motion.div>
                  <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'>{qty}</p>
                  <motion.div whileTap={{scale:0.75}}>
                  <BiPlus className='text-gray-50' onClick={() => updateQty("add")}/>
                  </motion.div>
                  </div>
              </div>
  )
}

export default CartItem