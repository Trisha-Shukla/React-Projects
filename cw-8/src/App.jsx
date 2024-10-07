import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import 'animate.css';

function App() {
  const [languages, setLanguages] = useState([])
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('hi');
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const fetchLanguages = async () => {
    try {
      const response = await axios.get('https://text-translator2.p.rapidapi.com/getLanguages', {
        headers: {
          'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
          'x-rapidapi-key': 'cf6cd21533msh413f0800c4a27f0p173288jsn1fb5359eaacb'

        }
      });
      setLanguages(response.data.data.languages); 
    } catch (error) {
      console.error('Error fetching languages:', error);
    }
    console.log("api called");
  };
  useEffect(()=>{
    fetchLanguages();
    console.log("api call over");
    
  },[])

  const translate=()=>{
    if(inputText){
    async function tranlateLanguage(){
    try{
      const response=await axios.post('https://text-translator2.p.rapidapi.com/translate',{
        source_language: sourceLanguage,
        target_language: targetLanguage,
        text: inputText
      }, {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
          'X-RapidAPI-Key': 'cf6cd21533msh413f0800c4a27f0p173288jsn1fb5359eaacb'
        }
      }
    );
    console.log(response.data.data.translatedText);
    
    setTranslatedText(response.data.data.translatedText)
    
    }
    catch(error){
      console.error('Error in translating languaage:', error);
    }
  }
  tranlateLanguage();
}
else{
  alert("enter text")
}
  }
  

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-red-200'>
      <div className='p-5 shadow rounded bg-blue-200 text-red-300 text-lg space-y-2'>
     <h1 className='text-3xl text-bold text-center animate__animated animate__zoomIn'>Translator App</h1>
     <div className='flex justify-between gap-3'>
      <div className='flex flex-col'>
     <label htmlFor="language">Select Language</label>
     <select name="" id="language" value={sourceLanguage} onChange={(e)=>{setSourceLanguage(e.target.value)}}>
      {
        languages.map((lang)=>{
          return (
            <option key={lang.code} value={lang.code}>{lang.name}</option>
          )
        })
      }
     </select>
     <label htmlFor="text">Enter Text</label>
     <textarea name="" id="text" value={inputText} className='min-h-[70px] max-w-[300px] h-[150px]' onChange={(e)=>{
      setInputText(e.target.value)
     }}></textarea>
     </div>
     <div className='flex flex-col'>
     <label htmlFor="target">Select language</label>
     <select name="" id="target" value={targetLanguage} onChange={(e)=>{setTargetLanguage(e.target.value)}}>
     {
        languages.map((lang)=>{
          return (
            <option key={lang.code} value={lang.code}>{lang.name}</option>
          )
        })
      }
     </select>
     <label htmlFor="">Translated Text</label>
     <p className='h-[150px] overflow-auto max-w-[200px] bg-white'>{translatedText}</p>
     </div>
     </div>
     <button className='text-center w-full bg-red-300 text-white' onClick={translate}>Translate</button>
     </div>
    </div>
  )
}

export default App
