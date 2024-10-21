import React, { useContext, useEffect, useRef, useState } from 'react'
import { accept } from './CardList'
import { useDrag } from 'react-dnd'
import { CardContext } from '../contextStore/context';

function Card({title,id,sourceList}) {
  const listData=useContext(CardContext);
  const [edit,setEdit]=useState(false);
  const [saveCard,setSaveCard]=useState(title);
  const inputRef=useRef(null);

  const deleteCard=()=>{
    
    listData.dispatch({type:'DELETE_TARGET',payload:{id,sourceList}})

  }

  const editBtn=()=>{
    setEdit(true);

  }
  const handleCard=(e)=>{
    setSaveCard(e.target.value);
  }

  const saveEdit = (e) => {
    // Make sure the click is outside the card (not just hovering)
    setEdit(false);
    // Dispatch the updated value to the store
    listData.dispatch({
      type: 'EDIT_CARD',
      payload: { id, sourceList, newTitle: saveCard },
    });
  }

  const closeEdit=(e)=>{
    setEdit(false);
  }

  const [{isDragging}, drag] = useDrag(() => ({
    type:accept,
    item:{id,title,sourceList},
    collect: (monitor)=>({
      isDragging : monitor.isDragging(),
    }),
  }))

  useEffect(()=>{
    if (edit && inputRef.current){
      inputRef.current.focus();
    }

  },[edit])
  return (
<>
    {
      (edit && <div className='w-screen h-screen inset-0 bg-[rgba(0,0,0,0.4)] fixed z-40'onClick={closeEdit} ></div> )
    }
    <div className={`p-2 border rounded w-full bg-white ${isDragging ? 'opacity-50' : 'opacity-100'} text-transparent hover:text-gray-900 hover:bg-[#f9f4f4] group relative `} ref={drag} >
      {(edit)? <div className='relative z-50 w-full'><textarea type="text" value={saveCard} onChange={handleCard}  ref={inputRef} className='h-20 w-full  px-1 border text-black '></textarea>
      </div> :<p className='text-black ' >{title}</p> }

      {(edit)?(<div className='relative z-50'><span className='bg-green-600 text-white p-1 rounded cursor-pointer' onClick={saveEdit}>Save</span> <span onClick={closeEdit} className='text-black text-lg cursor-pointer hover:text-white'>X</span></div>):
      <div className=" absolute right-3 top-2 bg-transparent group-hover:bg-[#f9f4f4b8] transition-bg duration-300 space-x-1">
        <span className='p-1 hover:bg-gray-400 rounded cursor-pointer' onClick={editBtn}><i className="fa-solid fa-pencil"></i></span> <span className='p-1 cursor-pointer hover:bg-gray-400 rounded' onClick={deleteCard } ><i className="fa-solid fa-trash-can"></i></span>
      </div>
      
      }
      
    </div>
    </>
  )
}

export default Card
