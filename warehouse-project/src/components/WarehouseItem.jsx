import React from 'react'
import {Link} from 'react-router-dom'

const WarehouseItem = ({data}) => {

  return (
    <div className='flex flex-col gap-2 max-w-[350px] bg-white p-4 shadow-2xl rounded-md '>
        <Link to={`/details/${data.id}`} className='w-[300px] h-[200px] overflow-hidden cursor-pointer active:scale-95 transition-transform duration-200 ease-in-out'>
        <img src={data.image} alt="" className='w-full h-full overflow-hidden'/>
        </Link>
        <div className='flex justify-between text-xl text-red-950'>
        <div>{data.name}</div>
        <div>{data.city}</div>
        </div>
        <Link to={`/details/${data.id}`} className='w-full bg-red-950 text-center text-white text-xl rounded-lg p-2 active:scale-95 transition-transform duration-200 ease-in-out'>
            view
            </Link>
    </div>
    
  )
}

export default WarehouseItem