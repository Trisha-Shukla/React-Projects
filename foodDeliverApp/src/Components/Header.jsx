import React, { useState } from 'react';
import Logo from '../assets/img/logo.png';
import Avatar from '../assets/img/avatar.png';
import { MdAdd, MdLogout, MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/slice/userSlice';
import { setCartShow } from '../store/slice/cartItemSlice';

const Header = () => {
  const [isMenu,setIsMenu]=useState(false);
  const googleAuthProvider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users?.userData);
  const cartShow=useSelector((state)=> state.products.showCart)
  const cartInfo=useSelector((state)=> state.products.cartInfo)
  
  

  const login = async () => {
    console.log("login Clicked");
    if(!user){

      try {
        console.log(isMenu);
        
        const response = await signInWithPopup(auth, googleAuthProvider);
        console.log(response);
        dispatch(setUser(response.user.providerData[0]));
        localStorage.setItem('user', JSON.stringify(response.user.providerData[0]));
        
      } catch (error) {
        console.error("Login failed", error);
      }
    }
    else{
      setIsMenu(!isMenu);
    }
  };

  const logout=()=>{
    setIsMenu(false);
    localStorage.clear();
    dispatch(setUser(null));
  }

  const showCartContainer=()=>{
    dispatch(setCartShow(!cartShow));
  }

  return (
    <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary'>
      {/* Desktop & tablet */}
      <div className='hidden md:flex w-full h-full justify-between'>
        <Link to={'/'} className='flex items-center gap-2'>
          <img src={Logo} alt="logo" className='w-8 object-cover' />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>

        <div className='flex items-center gap-8'>
          <motion.ul 
          initial={{opacity:0, x:200}}
          animate={{opacity:1, x:0}}
          exit={{opacity:0, x:200}}
          className='flex items-center gap-8 ml-auto'>
            <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>Home</li>
            <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>Menu</li>
            <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>About Us</li>
            <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>Service</li>
          </motion.ul>
          <div className='flex items-center justify-center relative' onClick={showCartContainer}>
            <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
            {(cartInfo && cartInfo.length>0) && (<div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
              <p className='text-xs text-white font-semibold'>{cartInfo.length}</p>
            </div>)}
          </div>
          {/* Profile */}
          <div className='relative'>
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user?`${user?.photoURL}`:Avatar}
              alt="userName"
              className='w-10 h-10 min-w-[40px] min-h-[40px] shadow-lg cursor-pointer rounded-full'
              onClick={login} // Only trigger login if the user is not logged in
            />
            {
              isMenu && (
                <motion.div 
                initial={{opacity:0, scale:0.6}}
                animate={{opacity:1, scale:1}}
                exit={{opacity:0, scale:0.6}}
                className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 '>
              {(user && user.email==='tshukla025@gmail.com') && (
                <Link to={'/createItem'}>
                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base' onClick={()=>setIsMenu(false)}>New Item <MdAdd/></p>
                </Link>                
                )}
              
              <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base' onClick={logout}>Logout <MdLogout/></p>
            </motion.div>
              )
            }
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className='flex md:hidden w-full h-full items-center justify-between'>
        {/* cart */}
      <div className='flex items-center justify-center relative' onClick={showCartContainer}>
            <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
            {(cartInfo && cartInfo.length>0) && (<div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
              <p className='text-xs text-white font-semibold'>{cartInfo.length}</p>
            </div>)}
          </div>
          {/* logo */}
      <Link to={'/'} className='flex items-center gap-2'>
          <img src={Logo} alt="logo" className='w-8 object-cover' />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>
        {/* profile */}
        <div className='relative'>
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user?`${user?.photoURL}`:Avatar}
              alt="userName"
              className='w-10 h-10 min-w-[40px] min-h-[40px] shadow-lg cursor-pointer rounded-full'
              onClick={login} // Only trigger login if the user is not logged in
            />
            {
              isMenu && (
                <motion.div 
                initial={{opacity:0, scale:0.6}}
                animate={{opacity:1, scale:1}}
                exit={{opacity:0, scale:0.6}}
                className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 '>
              {(user && user.email==='tshukla025@gmail.com') && (
                <Link to={'/createItem'}>
                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'onClick={()=>setIsMenu(false)}>New Item <MdAdd/></p>
                </Link>                
                )}

          <ul  className='flex flex-col'>
            <li className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base' onClick={()=>setIsMenu(false)}>Home</li>
            <li className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base' onClick={()=>setIsMenu(false)}>Menu</li>
            <li className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base' onClick={()=>setIsMenu(false)}>About Us</li>
            <li className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base' onClick={()=>setIsMenu(false)}>Service</li>
          </ul>
              
              <p className=' m-2 p-2 rounded-md px-4 py-2 flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base' onClick={logout}>Logout <MdLogout /></p>
            </motion.div>
              )
            }
          </div>
      </div>
    </header>
  );
};

export default Header;
