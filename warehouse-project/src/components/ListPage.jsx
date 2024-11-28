import React from 'react'
import FilterBar from './FilterBar'
import WarehouseItem from './WarehouseItem'
import {useSelector,useDispatch} from 'react-redux'
import {  searchByName } from '../store/slice/warehouseSlice'

const ListPage = () => {
  const warehouseData=useSelector((state)=> state.warehouseDetails.filteredData);
  
  
  const dispatch=useDispatch();
   const inputChange=(e)=>{
    dispatch(searchByName(e.target.value))
   }

  return (
    <div className='w-full bg-yellow-50'>
      <div className='w-full flex flex-col lg:flex-row p-4 justify-between items-center gap-2'>
      {/* search sec */}
        <input type="text" placeholder='Search Warehouse' className='p-2 placeholder-red-950 text-xl rounded-md border-4 border-red-950' onChange={inputChange}/>
      {/* filter */}
      <FilterBar />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 p-4'>
        {
          warehouseData.map((data)=>(
            <WarehouseItem key={data.id} data={data}/>

          ))
        }
      {/* <WarehouseItem/>
      <WarehouseItem/> */}

      </div>
    </div>
  )
}

export default ListPage