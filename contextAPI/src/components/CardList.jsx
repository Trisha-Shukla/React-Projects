import React, { useContext,useState ,useRef, useEffect} from 'react'
import { CardContext } from '../contextStore/context'
import Card from './Card';
import { useDrop } from 'react-dnd';

export const accept='ACCEPT';

function CardList( {title}) {
    const listData=useContext(CardContext);
    const [cardclick, setCardclick]=useState(false)
    const inputRef= useRef(null) 
    console.log(title);
    const findCard= listData.state.lists.find((list)=>(
      list.name=== title
    ))
    
    // console.log(listData.state);
    // console.log(listData.state[title]);
    

    const [collectedProps, drop] = useDrop(() => ({
      accept:accept,
      drop: (item)=>{
        listData.dispatch({type:'MOVE_TARGET',payload:{
          targetList:title,
          item:item,
          sourceList:item.sourceList
        }})
      },
      collect: (monitor)=>({
        hovered: monitor.isOver(),
      }),
    }))

    useEffect(()=>{
      if (cardclick && inputRef.current){
        inputRef.current.focus();
      }

    },[cardclick])
    const addCardClick= ()=>{
      setCardclick(true);
      
    }
    const addingCard=(e)=>{
      e.preventDefault();
      // inputRef.current.focus(); 
      const inputData=inputRef.current.value;
      if (inputData){
      listData.dispatch({type:'ADD ITEM',payload:{
        data:{ id: Date.now(), title: inputData }, 
        listname:title,
      }})}

      setCardclick(false);
    }
    
  return (
    <div className='border shadow-md p-4 w-[300px] h-fit bg-gray-100'>
      <div className='flex justify-between items-center pb-2'><h1>{title}</h1> <span className='text-lg text-gray-600 font-bold px-2 rounded hover:text-gray-900 hover:bg-gray-50'>...</span></div>
      <div className=' space-y-2' ref={drop}>
      {
      
      findCard.cards.map((data)=>{
        return ( <Card key={data.id} title={data.title} id={data.id} sourceList={title}/> )
      })
      }
      {(cardclick) ?( <div >
        <form action="" onSubmit={addingCard} className='space-y-2'>
        <input type='text' placeholder='Enter text here' ref={inputRef} className='w-full p-2' style={{ caretColor: 'black' }}   />
        <div><button className='bg-green-600 text-white rounded p-2'>Add</button> <span className='text-xl font-medium cursor-pointer text-gray-800 hover:text-gray-900' onClick={()=>{
          setCardclick(false);
        }}>X</span>
         </div>
         </form>
        </div> ): (<p onClick={addCardClick}>+ Add Card</p>)}
      
      </div>
    </div>
  )
}

export default CardList
