import React, { useState, useCallback, useEffect } from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";
import { IoHome } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { logo } from '../assets';
import { Projects, ProtectedRoute, SignUp } from '../container/index';
import { useDispatch, useSelector } from 'react-redux';
import { UserProfileDetails } from '../component';
import { setSearchTerm } from '../store/slice/codepenslice';
import debounce from 'lodash/debounce';

const Home = () => {
  console.log("Entered Home");
  
  const [isSideMenu, setIsSideMenu] = useState(false);
  const user = useSelector((state) => state.users?.userData);
  const searchTerm = useSelector((state) => state.users?.searchTerm || '');
  
  const dispatch = useDispatch();

  // Create a debounced function to delay dispatching the search term
  const navigate=useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    dispatch(setSearchTerm(value));
  };
  const handleStartCodingClick = () => {
    if (!user) {
      // If not signed in, redirect to sign-up page
      navigate('/auth');
    } else {
      // If signed in, go to the new project page
      navigate('/newProject');
    }
  };



  return (
    <div className='flex'>
      <div className={`${isSideMenu ? 'w-2' : 'w-2/5 xl:w-1/5'} min-h-screen max-h-screen relative bg-secondary transition-all duration-200 ease-in-out flex flex-col items-center justify-start px-3 py-6 group`}>
        <div className='group absolute w-8 h-8 -right-8 top-0 py-6 flex items-center justify-center cursor-pointer' onClick={() => { setIsSideMenu(!isSideMenu) }}>
          {
            isSideMenu ? <HiChevronDoubleRight className='hover:text-white group-hover:text-white text-xl text-transparent transition-colors duration-200 ease-in-out' /> :
              <HiChevronDoubleLeft className='hover:text-white group-hover:text-white text-xl text-transparent transition-colors duration-200 ease-in-out' />
          }
        </div>
        <div className='group overflow-hidden w-full flex flex-col gap-4'>
          <Link to={'/'}>
            <img src={logo} alt="logo" className='w-72 object-contain h-auto' />
          </Link>
          {/* Start Coding Button */}
          <div onClick={handleStartCodingClick} className='px-6 py-3 flex justify-center items-center rounded-xl border border-gray-400 cursor-pointer hover:border-gray-200 '>
            <p className='text-gray-400 text-xl hover:text-gray-200 capitalize'>Start Coding</p>
          </div>
          {user && (
            <Link to={'/projects'}>
              <div className='flex justify-center items-center gap-4 text-xl cursor-pointer text-gray-400 hover:text-gray-200'>
                <IoHome />
                <p>Home</p>
              </div>
            </Link>
          )}
        </div>
      </div>
      <div className='w-full px-4 md:px-12 md:py-12 flex flex-col min-h-screen max-h-screen overflow-y-scroll justify-start items-start'>
        {/* Top bar */}
        <div className='w-full flex items-center justify-between gap-3'>
          {/* Search bar */}
          <div className='flex items-center gap-4 justify-start w-full bg-secondary px-4 py-2 rounded'>
            <FaSearchPlus className='text-gray-400' />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder='Search here...'
              className='bg-secondary w-full text-gray-200 border-none outline-none focus:outline-none focus:border-none'
            />
          </div>
          {/* Sign Up */}
          {!user && (
            <div className='flex justify-center items-center'>
              <Link to='/auth' className='bg-emerald-500 px-4 py-2 rounded-md text-white cursor-pointer hover:bg-emerald-700 active:scale-95 transition-transform duration-200 '>SignUp</Link>
            </div>
          )}
          {/* User profile */}
          {user && <UserProfileDetails />}
        </div>
        
        {/* Home */}
        <div className='w-full'>
          <Routes>
            <Route path='/*' element={<ProtectedRoute><Projects /></ProtectedRoute>} /> 
            <Route path='/auth' element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Home;
