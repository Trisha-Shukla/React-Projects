import React, { useRef } from 'react'
import  Background from '../assets/Images/bg.jpg'
import { FaSearch } from "react-icons/fa";
import {useSelector,useDispatch} from 'react-redux'
import { searchRecipe } from '../store/recipeSlice/recipeSlice';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const inputRef=useRef();
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleClick=()=>{
        dispatch(searchRecipe(inputRef.current.value));
        localStorage.setItem("searchResult",inputRef.current.value)
        navigate('/recipe')

    }
  return (
    <section className='h-full w-full flex items-center justify-center ' style={{backgroundImage: `url(${Background})`}}>
        <div className='flex items-center justify-center h-fit bg-yellow-100 rounded-md pl-1'>
        <input type="text" placeholder='Search for recipes' className='p-4 text-2xl bg-yellow-100 text-amber-900 placeholder:text-amber-900 placeholder:text-2xl outline-none border-none' ref={inputRef}/>
        <FaSearch
  className="bg-amber-900 text-yellow-100 text-3xl h-[4rem] w-[2.5rem] px-2 rounded-r-md cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200 ease-in-out"
  onClick={handleClick}
/>

        </div>
      </section>
  )
}

export default Home