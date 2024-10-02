import React from 'react'

function Cart({url,mobileName,price, index, add,quantity,reduce,remove}) {
    
    
  return (
    <div className='flex justify-between items-center p-4'>
          <div className='flex items-center'>
            <img src={url} alt={mobileName} className='w-[100px]'/>
            <div>
              <h2>{mobileName}</h2>
              <h5>${price}</h5>
              <h6 onClick={remove} className='cursor-pointer text-blue-600'>remove</h6>
            </div>
          </div>
          <div className='flex flex-col'>
            <span className='cursor-pointer' onClick={()=>{
                add(index)
            }}><i class="fa-solid fa-chevron-up"></i></span><span>{quantity}</span><span className='cursor-pointer' onClick={()=>{
                reduce(index)
            }}><i class="fa-solid fa-chevron-down"></i></span>
          </div>
        </div>
  )
}

export default Cart
