import {useState,useEffect,useRef,useCallback} from 'react'

function Retrieve() {
    const [retrieveData,setRetrieveData]=useState([])
    const [displayData,setDisplayData]=useState([])
    const aadharSearch=useRef(null)
    useEffect(()=>{
        const retrieveLocalData=localStorage.getItem("detailsLocalData");
        console.log(retrieveLocalData);
        
        setRetrieveData(JSON.parse(retrieveLocalData));

        
    },[])

    

    const retrieveSubmit=(e)=>{
        e.preventDefault();
        console.log(retrieveData);
        
        const matchedAadhar=retrieveData.filter((data)=>{
            return (aadharSearch.current.value===data.aadhar)
        })
        setDisplayData(matchedAadhar);
        console.log(matchedAadhar);
        
    }
    

  return (
    <div className='w-[92%] h-[75vh] relative border border-collapse border-black'>
      <h1 className=' border-collapse w-fit p-3 border border-b-black border-r-black'>Retrieve information</h1>
      <div className='p-5 space-y-2'>
        <form action="" onSubmit={retrieveSubmit} className='w-[50%] flex gap-2'>
        <input type="number" placeholder='Enter Aadhar' min="100000000000" max='999999999999'className='p-2'  ref={aadharSearch}/> <button className='p-2 bg-blue-600 text-white'>Find</button>
        </form>
        
        {displayData.length === 0 && <div className='text-center font-bold'>No data found</div>}
            {
                // (!displayData?"nodata":'' )
                displayData.map((data,index)=>{
                    return (
                        <div key={"retrieve"+index} className='flex flex-col gap-1 border space-y-2'>
                            <span>Name: {data.name}</span>
                            <span>DOB: {data.dob}</span>
                            <span>Aadhar Number: {data.aadhar}</span>
                            <span>Mobile Number: {data.mobile}</span>
                            <span>Age: {data.age}</span>
                        </div>
                    )
                })
            }
        
      </div>
      </div>
  )
}

export default Retrieve
