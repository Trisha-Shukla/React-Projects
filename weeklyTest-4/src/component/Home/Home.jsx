import {useState,useRef,useEffect} from 'react'

function Home() {
    const [details,setDetails]=useState([]);
    const [isVisible,setisVisible]=useState(false);
    const [age,setAge]=useState('');
    const name=useRef(null);
    const dob=useRef(null);
    const aadhar=useRef(null);
    const mobile=useRef(null);

    useEffect(()=>{
        const localData = localStorage.getItem("detailsLocalData");
    if (localData) {
        setDetails(JSON.parse(localData));
    } else {
        setDetails([]);
    }

    },[])

    useEffect(()=>{
        if(details && details.length>0){
            localStorage.setItem("detailsLocalData",JSON.stringify(details));
        }
    },[details])
    const addBtn=()=>{
        setisVisible(true)
        setAge(" ")
    }
    
    const calculateAge=(birthdate)=>{
        const today = new Date();
        const birthDate = new Date(birthdate);
        
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        
        setAge(age);
      }

      const detailsSubmit=(e)=>{
        e.preventDefault();
        const formDetails={
            name: name.current.value,
            dob:dob.current.value,
            aadhar: aadhar.current.value,
            age: age,
            mobile:mobile.current.value,
        }
        const copyDetails=[...details,formDetails];
        setDetails(copyDetails);
        console.log(copyDetails);
        setisVisible(false)
        
        

      }
      const deleteDetail=(index)=>{
        const dublicateDetail=[...details];
        dublicateDetail.splice(index,1);
        setDetails(dublicateDetail)
        if (dublicateDetail.length === 0) {
            localStorage.removeItem("detailsLocalData");
        } else {
            localStorage.setItem("detailsLocalData", JSON.stringify(dublicateDetail));
        }
        
      }

  return (
    <div className='w-[92%] h-[75vh] relative border border-collapse border-black'>
      <h1 className=' w-fit p-3 border border-b-black border-r-black'>Add New Person</h1>
      <div className='lg:p-5 py-2 space-y-2'>
        <table frame='box' rules='all' className='border-collapse border border-gray-300 w-full p-1 '>
            <thead className='bg-blue-600 text-white text-sm'>
                <tr className='h-[35px]'>
                <th className="border border-gray-300 ">Name</th>
                <th className="border border-gray-300 ">Date of Birth</th>
                <th className="border border-gray-300 ">Aadhar Number</th>
                <th className="border border-gray-300 ">Mobile Number</th>
                <th className="border border-gray-300 ">Age</th>
                <th className="border border-gray-300 ">Action</th>
                </tr>
            </thead>
            {(!details.length && (<tbody>
                <tr>
                    <th className='text-center' colSpan={6}> No Data</th>
                </tr>
            </tbody>))}
            {
                details.map((detail,index)=>{
                    return (
                        <tbody key={"detail"+index}>
                             <tr className='h-[35px] text-sm text-center'>
                <td className="border border-gray-300 ">{detail.name}</td>
                <td className="border border-gray-300 ">{detail.dob}</td>
                <td className="border border-gray-300 ">{detail.aadhar}</td>
                <td className="border border-gray-300  ">{detail.mobile}</td>
                <td className="border border-gray-300 ">{detail.age}</td>
                <td className="border border-gray-300 text-blue-600 underline cursor-pointer" onClick={()=>{deleteDetail(index)}}>Delete</td>
                </tr>
            
                        </tbody>
                    )
                })
            }
        </table>
        <button className='absolute bottom-2 right-2 rounded p-2 bg-blue-600 text-white' onClick={addBtn}>Add</button>
        {isVisible && (<div className='bg-blue-500 px-2 py-1'>
            <h1 className='text-white text-center'>Fill form for new entry</h1>
            
                <form action="" className='flex justify-between ' onSubmit={detailsSubmit}>
                <input type="text" placeholder='Name'ref={name} required/>
                <input type="date" required ref={dob} onChange={(e)=>{
                    calculateAge(e.target.value);
                    
                }}/>
                <input type="number" placeholder='Aadhar Number' min="100000000000" max='999999999999' ref={aadhar} required />
                <input type="number" placeholder='Mobile Number' min="1000000000" max='9999999999' ref={mobile} required />
                <input type="number" placeholder='Age'value={age} readOnly />
                <button className='bg-white text-blue-600 underline cursor-pointer' >Save</button>
                </form>
            
        </div>)}
        
      </div>
    </div>
  )
}

export default Home
