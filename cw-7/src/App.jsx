import { useState,useRef,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [groceryData, setGroceryData] = useState([])
  const [checked, setChecked] = useState([])
  const inputValue=useRef(null)

  useEffect(()=>{
    const getGroceryData=localStorage.getItem("groceryItemData");
    const getCheckedData=localStorage.getItem("setCheckedData");
    if(getGroceryData){
      console.log("locally groceryItemData saved");
      
      setGroceryData(JSON.parse(getGroceryData))
    }
    if(getCheckedData){
      console.log("locally setCheckedData saved");
      
      setChecked(JSON.parse(getCheckedData))
    }
  },[])

  const groceryAdded=(e)=>{
    e.preventDefault()
    const groceyInputValue=inputValue.current.value.trim();

    if(groceyInputValue){
      toast(groceyInputValue+" Added");
      const updatedGroceryData=[...groceryData,groceyInputValue];
      const updatedCheckedData=[...checked,false];

      setGroceryData(updatedGroceryData)
      setChecked(updatedCheckedData)

      
      localStorage.setItem("groceryItemData",JSON.stringify(updatedGroceryData))
      localStorage.setItem("setCheckedData",JSON.stringify(updatedCheckedData))

      inputValue.current.value='';
      
    }    
  }
  console.log(groceryData);

  const toggleCheck=(index)=>{
    const updatedData=checked.map((item,idx)=>{
      if(index===idx){
        return !item
      }
      else{
        return item
      }
    })
    setChecked(updatedData)
    localStorage.setItem("setCheckedData",JSON.stringify(updatedData))
  }

  const delteBtn=(index)=>{
    const copyGroceryData=[...groceryData]
    const copyCheckedData=[...checked]
    
    copyGroceryData.splice(index,1);
    copyCheckedData.splice(index,1);

    setGroceryData(copyGroceryData);
    setChecked(copyCheckedData)

    localStorage.setItem("groceryItemData",JSON.stringify(copyGroceryData))
    localStorage.setItem("setCheckedData",JSON.stringify(copyCheckedData))
  }
  

  return (
    <div className='flex items-center justify-center w-screen h-screen'>
    <div className='shadow-xl p-4	space-y-4'>
      <h1 className='text-3xl font-semibold'>Grocery Bud</h1>
      <form onSubmit={groceryAdded}> 
        <input type="text" className='border p-1'ref={inputValue}/><button className='bg-blue-500 text-white p-1 rounded'>Add Item</button>
        <Toaster />
        </form>
      <div>
        {
          groceryData.map((grocery,index)=>{
              return( <div key={"grocery"+index} className='flex justify-between'>
                <div ><input type="checkbox"checked={checked[index]}  onChange={()=>{
                  toggleCheck(index)
                }}/><span className={checked[index]?'line-through':" "}>{grocery}</span></div> <button className='cursor-pointer' onClick={()=>{
                  delteBtn(index)
                }}>Delete</button>
              </div>

              )
          })
        }
      </div>
    </div>
    </div>
  )
}

export default App
