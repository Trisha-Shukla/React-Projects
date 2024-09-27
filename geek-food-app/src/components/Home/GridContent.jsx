import React from 'react'

function GridContent({para}) {
  return (
    <>
      <div className="p-5"><div className="bg-gray-300 p-5 rounded-md shadow-md"><p>{para}</p></div>
            <div className="flex gap-2 items-center p-4">
                <img src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" alt="" className="w-12 h-12 rounded-full object-cover"/>
                
                <div className=""><h5 className="font-bold">Header</h5><p>Lorem of dolor.</p>
                </div>
            </div>
            </div>
        
    </>
  )
}

export default GridContent
