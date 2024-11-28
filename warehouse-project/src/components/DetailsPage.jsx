import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

const DetailsPage = () => {

  const {id:warehouseId}=useParams();
  console.log(warehouseId);
  const warehouseData=useSelector((state)=> state.warehouseDetails.filteredData);
  console.log(warehouseData);
  
  const filteredData=warehouseData.filter((data)=> data.id == warehouseId)
  console.log(filteredData);
  

  

  return (
    <div className='flex flex-col lg:flex-row p-4 w-full h-full gap-3 '>
      <div className='w-full lg:w-[70%] h-full flex justify-center items-center' >
        <img src={filteredData[0].image} alt="" className='w-full h-full'/>
      </div>
      <div className='w-full h-full flex flex-col justify-center items-center gap-4 text-xl border-2 shadow-xl bg-yellow-100 '>
        <div className='flex flex-col items-start gap-3 border-2 shadow-xl p-4 bg-white rounded-md'>

      <p>Name: {filteredData[0].name}</p>
      <p>City: {filteredData[0].city}</p>
      <p>Cluster: {filteredData[0].cluster}</p>
      <p>Code: {filteredData[0].code}</p>
      <p>Space: {filteredData[0].space_available}</p>
      <p>Type: {filteredData[0].type}</p>
      <p>Registered: {filteredData[0].is_registered?"Registerd":"Not Registered" }</p>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage

