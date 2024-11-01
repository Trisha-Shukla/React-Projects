import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {FaChevronDown} from 'react-icons/fa'
import { menu, onClickSignOut } from '../utils/helpers';
import {Link} from 'react-router-dom'

const UserProfileDetails = () => {
    const user=useSelector((state)=> state.users?.userData);
    console.log(user?.photoURL);
    
    const [isMenu,setIsMenu]=useState(false);

  return (
    <div className='flex items-center justify-center gap-4 relative'>
        <div className='w-14 h-14 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer bg-emerald-500'>
            {
                user?.photoURL ?( <img className='w-full h-full object-cover' src={`${user?.photoURL}`} /> ): ( <p className='text-white text-xl font-semibold capitalize'>{user?.email[0]}</p> )
            }
        </div>
      {/* down arrow */}
      <div 
        className="p-4 rounded-md flex items-center justify-center bg-secondary cursor-pointer transition-transform duration-200"
        onClick={() => setIsMenu(!isMenu)}
      >
        <FaChevronDown className={`text-primaryText transform transition-transform duration-200 ${isMenu ? 'rotate-180' : 'rotate-0'}`} />
      </div>

      <div
        className={`bg-secondary absolute top-16 right-0 px-4 py-3 rounded-xl shadow-md z-10 flex flex-col items-start justify-start gap-4 min-w-[225px] overflow-hidden transition-all duration-300 ease-in-out ${
          isMenu ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'
        }`}
      >
        {menu.map((item) => (
          <Link
            key={item.name}
            to={item.uri}
            className="text-primaryText text-lg hover:bg-[rgba(256,256,256,0.05)] px-2 py-1 w-full rounded-md"
          >
            {item.name}
          </Link>
        ))}
        <p
          onClick={onClickSignOut}
          className="text-primaryText text-lg cursor-pointer hover:bg-[rgba(256,256,256,0.05)] px-2 py-1 w-full rounded-md active:scale-95 transition-transform duration-200"
        >
          SignOut
        </p>
      </div>
    </div>
  );
};

export default UserProfileDetails
