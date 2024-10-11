import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [photos, setPhotos] = useState([])
  const [pages, setPages] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  const fetchPhotos=async(url)=>{
    try{
      const response=await axios(url,{
        params:{
          query:searchValue,
          page:pages,
        },
        headers:
        {
          Authorization:`Client-ID ${import.meta.env.VITE_ACCESS_KEY}`
        },
      })
      console.log(response.data.results);

    
    setPhotos((prev)=>[...prev,...response.data.results])
    setIsVisible(true);
    

  }
  catch(error){
    console.error('Error fetching photos: ', error)
  }
  }

  const inputSubmit=(e)=>{
    e.preventDefault();
    if (!searchValue.trim()) {
      alert('Please enter a search term');
      return;
    }
    setPages(1);
    setPhotos([]);
    fetchPhotos('https://api.unsplash.com/search/photos')
  }
  const showMore=()=>{
    
    setPages((prevPages) => prevPages + 1);
  }
  useEffect(() => {
    if (pages > 1) {
      fetchPhotos('https://api.unsplash.com/search/photos');
    }
    console.log(photos);
    
  }, [pages]);

  return (
    <>
     <div className='flex flex-col justify-center items-center w-screen min-h-screen bg-gray-100'>
      <div className='shadow-lg p-5 space-y-5 max-w-[540px] w-full bg-white' >
        <h1 className=' text-3xl font-semibold'>Image Generation App</h1>
        <form action=""  onSubmit={inputSubmit}>
        <input className='p-2 border w-full ' type="text" placeholder='Search Image...' value={searchValue} onChange={(e)=>{ setSearchValue(e.target.value)}} />
        </form>
       
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-5 p-5 ">
            {photos.map((photo) => (
              <div  key={photo.id} className='w-full'>
              <img
               
                src={photo.urls.small}
                alt={photo.alt_description}
                className="w-full h-[200px]"
              />
              </div>
            ))}
          </div>
       {isVisible && (<button onClick={showMore} className='p-2 rounded text-center w-fit text-white bg-blue-600'>Show More</button>  )} 
     </div>
    </>
  )
}

export default App
