import React from 'react'


function EmployeeList({dispatch,employeeList,teamList}) {
 console.log(employeeList);
 
 

  return (
    <div className='w-full h-full overflow-auto p-4 border shadow-md rounded' >
      <h1 className='text-2xl font-bold text-center'>Employee</h1>

      {employeeList.map((list)=>{
        const isPresent=teamList.some((tlist)=>(tlist.id===list.id));
        return <div key={list.id} className={`${isPresent? 'text-white': 'text-black'}  bg-gray-200 flex justify-between gap-2 p-3  items-center text-xl mt-5`}>
          <div className='space-x-3'><span>{list.first_name} </span> <span>{list.age}</span></div>
          {
             !isPresent && 
          (<button className='bg-blue-400 text-white p-2 rounded' onClick={()=>{dispatch({type:'add', payload:list})}}>Add</button>)
          }
          </div>
      })}
    </div>
  )
}

export default EmployeeList
