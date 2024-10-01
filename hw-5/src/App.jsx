import React, { useState,useEffect } from 'react';

function App() {
  const [details, setDetails] = useState([]);
  const [subject, setSubject] = useState('');
  const [hours, setHours] = useState('');
  

  useEffect(()=>{
    const plannerData=localStorage.getItem("plannerData");
    if(plannerData){
      console.log("locally saved");
      
      setDetails(JSON.parse(plannerData))
    }

  },[])

  const btnClick = () => {
    console.log("btn clicked");

    const detailsSet = [...details, { sub: subject, hours: hours }];
    
    
    if (subject && hours) {
      console.log("entered");

      setDetails(detailsSet);
      detailsSet.forEach((detail) => {
      });

      localStorage.setItem("plannerData", JSON.stringify(detailsSet));
    } else {
      alert("Enter both hour and subject");
    }

    setHours("");
    setSubject("");
};

  const btnPlus=(index)=>{
   const updatedDetails=[...details]
   updatedDetails[index]["hours"]= Number(updatedDetails[index]["hours"])+1;
   setDetails(updatedDetails);
  }
  const btnDecrement=(index)=>{
   const updatedDetails=[...details]
   
  if(updatedDetails[index]["hours"]>0) updatedDetails[index]["hours"]-=1;
   setDetails(updatedDetails);
  }

  return (
    <div className='flex justify-center items-center flex-col h-screen w-screen'>
      <div className='text-center space-y-4'>
        <h1 className='text-2xl'>Geekster Education Planner</h1>
        <div className='space-y-2'>
          <input
            type='text'
            placeholder='subject'
            className='border p-2'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <input
            type='number'
            placeholder='hours'
            className='border p-2 w-[50px]'
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
          <button
            className='bg-blue-500 p-2 rounded'
            onClick={btnClick}
          >
            Add
          </button>

        </div>
        {
          details.map((detail,index)=>{
            return (
              <div key={"details"+index} className='flex justify-between'>
                <div>
                {detail["sub"]}
                </div> <span>{detail["hours"]} Hours</span> <div> <button className='bg-green-700 px-2' onClick={()=>{
                btnPlus(index)
              }}>+</button >  <button className='bg-red-700 px-2' onClick={()=>{
                btnDecrement(index)
              }}>-</button> </div></div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
