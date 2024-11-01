import React from 'react'

const Alert = ({status,alertMsg}) => {
  console.log("Alet");
  console.log(status);
  
  return (
    <div className='fixed top-24 right-12 z-10'>
      {
        status ==='Success' && (
            <div className='px-4 py-2 rounded-md bg-emerald-400 shadow-md shadow-emerald-500'>
                <p className='text-lg text-primary'>{alertMsg}</p>

            </div>
        )
      }
      {
        status ==='Warning' && (
            <div className='px-4 py-2 rounded-md bg-yellow-400 shadow-md shadow-yellow-500'>
                <p className='text-lg text-primary'>{alertMsg}</p>

            </div>
        )
      }
      {
        status ==='Danger' && (
            <div className='px-4 py-2 rounded-md bg-red-400 shadow-md shadow-red-500'>
                <p className='text-lg text-primary'>{alertMsg}</p>

            </div>
        )
      }
    </div>
  )
}

export default Alert
