import { useState ,useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef=useRef(null)

  const copyText=()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }
  const generatePassword=useCallback(()=>{
    let pass="";
    let char="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let num="0123456789"
    let specialChar="!@#$%^&*()_+"
    if(numbers){
      char+=num;
    }
    if(characters){
      char+=specialChar
    }
    for(let i=0;i<length;i++){
      
      let index=Math.floor(Math.random()*char.length);
      pass+=char.charAt(index);
      
      

    }
    console.log(pass);
    setPassword(pass);
  },[length,numbers,characters])

  useEffect(()=>{
generatePassword();
  },[length,numbers,characters]);
  const checkedNumbers=()=>{
    setNumbers(!numbers);
    if(numbers){

    }
  }

  return (
    <>
     <div className='flex flex-col gap-3  max-w-lg w-full  bg-gray-700 text-white mx-auto mt-[150px] rounded-lg px-4 py-3'>
      <h1 className='text-xl text-center'>Password Generator</h1>
      <div className='flex  '>
      <input type="text"  value={password} ref={passwordRef} readOnly className='w-full rounded-l-lg px-4 py-2 outline-none text-black' />
      <button className='bg-blue-600 text-white rounded-r-lg px-4 py-2 shrink-0' onClick={copyText}>Copy</button>
      </div>
      <div className='flex justify-center items-center gap-2'> 
        <input type="range" min={6} max={100} value={length}  onChange={(e)=>{
          setLength(e.target.value);
        }}/>
        <label >Length: {length}</label>
        <input type="checkbox" id="numbers" value={length}  onClick={()=>{setNumbers(!numbers)}}/>
        <label htmlFor="numbers">Numbers</label>
        <input type="checkbox" id="characters" onClick={(prevChar)=>{setCharacters(!characters)}}/>
        <label htmlFor="characters">Special Characters</label>
      </div>
     </div>
    </>
  )
}

export default App
