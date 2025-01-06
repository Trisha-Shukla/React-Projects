import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './store/dataSlice';
import Card from './components/Card';
import Loader from './components/Loader';

function App() {
  const {data,loading}=useSelector(state=>state.dataSlice)
  const dispatch=useDispatch();
  const [page,setPage]=useState(1);
  const totalItemPerPage=6;
  const totalLength=Math.ceil(data?.length/6);
  const indexOfLastItem=page * totalItemPerPage;
  const indexOfFirstItem=indexOfLastItem-totalItemPerPage;
  const filteredData=data?.slice(indexOfFirstItem,indexOfLastItem);

  async function fetchData(){
    try {
      const res=await fetch("https://jsonplaceholder.typicode.com/posts");
      const data= await res.json();
      console.log(data);
      dispatch(getData(data));
    } catch (error) {
      console.log("error fetching data",error);
      
    }
    
  }

  const handleClick=(page)=>{
    setPage(page);
  }
  useEffect(()=>{
    setTimeout(()=>{
      fetchData();

    },5000)
  },[])

  if(loading){
    return ( <div className='flex w-screen h-screen items-center justify-center'><Loader/></div> )
  }
  return (
    <div className='min-h-screen p-4 flex flex-col w-full gap-4'>
      <Card filteredData={filteredData}/>
      <div className='flex gap-2 w-full items-center justify-center mt-auto'>
        {Array.from({length:totalLength}).map((_,idx)=>(
          <button key={idx} onClick={()=>handleClick(idx+1)} className={`${idx+1===page?"bg-blue-400 text-white":"bg-gray-400 text-black"} p-2 rounded-md`}>{idx +1}</button>
        ))}
      </div>
    </div>
  )
}

export default App
