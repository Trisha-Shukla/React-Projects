import { useContext, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardContextProvider, { CardContext } from './contextStore/context'
import CardList from './components/CardList'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import trelloData from './content/trello.json'

function App() {
  const listComponent=useContext(CardContext);
  console.log(listComponent);
  
  const [newCard,setNewCard]=useState(false);
  const [cardTitle,setCardTitle]=useState('');
  const titleRef=useRef(null);

  const newCardAdded=()=>{
    setNewCard(true);
    
  }
  const addTitle=()=>{
    setNewCard(false);
    if(cardTitle){
    listComponent.dispatch({type:'ADD_NEW_CARD',payload:{cardTitle:cardTitle}});}

  }
  useEffect(()=>{
    if(newCard && titleRef.current ){
      titleRef.current.focus();
    }
  },[newCard])

  return (
    
      <DndProvider backend={HTML5Backend}>
      <div className='bg-blue-600 min-h-screen h-full '>
        <header className='bg-blue-700 text-gray-600 flex justify-center p-2'>
        <img id="trello-logo" src="https://trello-clone-rts.vercel.app/trello-logo.gif" className='h-4 opacity-50' alt="trello-logo"  />
        </header>
        <main className='flex gap-4 p-8 flex-col lg:flex-row'>
          {listComponent.state.lists.map((item)=>( <CardList title={item.name} key={item.name}/> ))}
          
          {/* <CardList title={"In Progress"} />
          <CardList title={"Done"} /> */}
          {
            (newCard)? (<div className='w-[300px] bg-gray-50 rounded p-2 space-y-2 h-fit'>
              <input type="text" ref={titleRef} placeholder='Enter list title...' className='w-full p-2 border' onChange={(e)=> setCardTitle(e.target.value)}/>
              <div className='space-x-2'><span onClick={addTitle} className='bg-green-600 text-white p-2 rounded cursor-pointer'>Add</span><span onClick={()=>{setNewCard(false)}} className='font-medium text-xl text-gray-600 hover:text-gray-900 cursor-pointer'>X</span></div>
            </div>):(<div className='bg-[#ffffff71] h-fit w-[300px] p-2 text-white cursor-pointer' onClick={newCardAdded}>+ Add another list</div>)
          }
        </main>
      </div>
      </DndProvider>
  )
}

export default App
