import React from 'react'

function TeamList({dispatch,teamList}) {
    console.log(teamList);
    
    
    
  return <div className='w-full h-full p-4 overflow-auto'>
        <h1 className='text-2xl font-bold text-center'>Team</h1>
  {( teamList && teamList.length> 0 )? ( <div className='  flex flex-col gap-2 justify-between h-[95%] '>

    <div className='flex flex-col gap-2'>
        <div className='flex justify-end'>
    <button onClick={()=>{
        dispatch({type:'sort by age'})
    }} className=' p-2 bg-pink-400 rounded text-white'>Sort by Age</button>
    </div>
    {teamList.map((list)=>{
        return <div key={list.id} className='bg-gray-200 flex justify-between gap-2 p-3 text-black  items-center text-xl'>
            <div className='space-x-4'><span>{list.first_name} </span> <span>  {list.age}</span></div>
            <button  className='bg-blue-400 text-white p-2 rounded' onClick={()=>{dispatch({type:'remove', payload:list})}}>remove</button>
        </div>
    })}
    </div>
    <div className='bg-gray-200 text-black text-xl p-2 flex justify-between'> <span> Average Age:</span> <span> {(teamList.reduce((acc,item)=>(acc+item.age),0)/teamList.length).toFixed(2)}</span></div>
  </div> ):( <div className='text-center text-xl'>No items in the List</div> )}
  </div>
}

export default TeamList
