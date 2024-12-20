import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { MdAttachMoney, MdCloudUpload, MdDelete, MdFastfood, MdFoodBank } from 'react-icons/md';
import { categories } from '../utils/data';
import Loader from './Loader';

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const deleteImage=()=>{
  }
  const uploadImage=(e)=>{
    setIsLoading(true)
    const imageFile=e.target.files[0];
    console.log(imageFile);
    
    
  }
  const saveDetails=()=>{

  }
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='w-[90%] md:w-[50%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4'>
        {fields && (
          <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus=== 'danger' ? 'bg-red-400 text-red-800':'bg-emerald-400 text-emerald-800'} '`}
          >
            {msg}
          </motion.p>
        )}
        <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
          <MdFastfood className='text-xl text-gray-700'/>
          <input type="text" required value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='Give me a title...'
          className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'/>

        </div>
        {/* select */}
        <div className='w-full'>
          <select onChange={(e)=> setCategory(e.target.value)} className='w-full outline-none border-b-2 text-base p-2 rounded-md border-gray-200 cursor-pointer'>
            <option value='other' className='bg-white'>
            Select Category
            </option>
            {
              categories && categories.map((item)=>(
                <option key={item.id} className='text-base border-0 outline-none capitalize
                bg-white text-headingColor'
                value={item.urlParamName}>
                  {item.name}
                </option>
              ))
            }
          </select>

        </div>
        {/* loader */}
        <div className='group flex flex-col justify-center items-center w-full h-225 md:h-420 cursor-pointer rounded-lg border-2 border-gray-300 border-dotted'>
          {
            isLoading? <Loader/>:<>
            { !imageAsset ? <>
            <label className='w-full h-full flex items-center flex-col justify-center cursor-pointer'>
                <div className='w-full h-full flex items-center flex-col justify-center  gap-2'>
                  <MdCloudUpload className='text-3xl text-gray-500 hover:text-gray-700'/>
                  <p className='text-gray-500 hover:text-gray-700'>Click here to upload</p>
                </div>
                  <input type="file" name="uploadimage" accept='image/*' id="" onChange={uploadImage} className='w-0 h-0'/>
            </label>
            </>:<>
            <div className='relative h-full'>
              <img src={imageAsset} alt="upload-image" className='w-full h-full object-contain' />
              <button className='absolute right-3 bottom-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out'onClick={deleteImage}>
                <MdDelete className='text-white'/>
              </button>
              </div></>
            }
            </>
          }
        </div>
        
        <div className='w-full flex flex-col md:flex-row items-center gap-3 '>
          {/* calories */}
          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <MdFoodBank className='text-gray-700 text-2xl'/>
            <input type="text"  value={calories} onChange={(e)=>setCalories(e.target.value)} required placeholder='Calories' className='w-full h-full text-textColor text-lg bg-transparent outline-none border-none placeholder:text-gray-400' />
          </div>
          {/* price */}
          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <MdAttachMoney className='text-gray-700 text-2xl'/>
            <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} required placeholder='Price' className='w-full h-full text-textColor text-lg bg-transparent outline-none border-none placeholder:text-gray-400' />
          </div>

        </div>
        <div className='flex items-center w-full'>
          <button type='button' className='ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold' onClick={saveDetails}>Save</button>
        </div>
      </div>
      
    </div>
  )
}

export default CreateContainer
