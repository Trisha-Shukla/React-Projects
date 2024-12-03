import React from 'react'
import Delivery from '../assets/img/delivery.png'
import HeroBg from '../assets/img/heroBg.png'
import { heroData } from '../utils/data'

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 w-full' id='home'>
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-4'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>
            Bike Delivery
          </p>
          <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
              <img src={Delivery} alt="delivery"  className='w-full h-full object-contain'/>
          </div>
        </div>
        <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor '>
          The Fastest Delivery in 
          <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span>
        </p>
        <p className='text-base text-textColor text-center md:text-left'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non veritatis libero ad est molestiae suscipit saepe facere fugit deleniti temporibus omnis placeat hic, expedita quisquam dolorum atque rerum dolor accusantium!
        </p>
        <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-200'>
        Order Now
        </button>
      </div>
      <div className='py-2 relative flex-1 flex items-center overflow-y-hidden'>
        <img src={HeroBg} alt="herobg" className='lg:h-[650px] lg:w-auto h-420 w-full ml-auto' />
        <div className='h-full w-full absolute top-0 left-0 flex flex-wrap gap-2 items-center justify-center lg:px-32  py-4'>
            {heroData && heroData.map((data)=>(
                <div key={data.id} className='lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center '>
                <img src={data.imageSrc} alt="i1" className='lg:w-40 w-20 -mt-10 lg:-mt-20 ' />
                <p className='lg:text-lg text-base font-semibold text-textColor mt-2 lg:mt-4'>{data.name}</p>
                <p className='text-[10px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>
                    {data.decp}
                </p>
                <p className='text-sm text-headingColor font-semibold'>
                    <span className='text-xs text-red-600'>$</span> {data.price}
                </p>
            </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default HomeContainer
