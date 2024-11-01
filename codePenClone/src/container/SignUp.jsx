import React, { useState, useEffect } from 'react';
import { logo } from '../assets';
import { UserAuth } from '../component';
import { FaEnvelope } from 'react-icons/fa';
import { MdPassword } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { signInWithGithub, signInWithGoogle } from '../utils/helpers';
import { createUserWithEmailAndPassword, getRedirectResult, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firbaseConfig';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [getEmailValidation, setGetEmailValidation] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlerMessage] = useState('');
  const navigate=useNavigate();

  const createNewUser = async () => {
    console.log("signup clicked");
    if (getEmailValidation) {
      try {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        if (userCred) {
          console.log(userCred);
        }
        
      } catch (error) {
        console.log(error);
      }
    }
  };
  const loginUser = async () => {
    console.log("login clicked");
    
    if (getEmailValidation) {
      try {
        const userCred = await signInWithEmailAndPassword(auth, email, password);
        
        if (userCred) {
          console.log(userCred);
        }
        navigate('/home/*')


      } catch (error) {
        console.log("Error Code:", error.code);
  console.log("Error Message:", error.message);

  if (error.code === 'auth/user-not-found') {
      setAlert(true);
    setAlerMessage("No account found with this email.");
  } else if (error.code === 'auth/wrong-password') {
    setAlert(true);
    setAlerMessage("Incorrect password.");
  } else if (error.code === 'auth/invalid-email') {
    setAlert(true);
    setAlerMessage("Invalid email format.");
  } else if (error.code === 'auth/invalid-credential') {
    setAlert(true);
    setAlerMessage("Invalid credentials. Please try again.");
  } else {
    setAlert(true);
    setAlerMessage("An unknown error occurred. Please try again later.");
  }

  setInterval(() => {
    setAlert(false);
  }, (5000));
      }
    }
  };
  

  return (
    <div className='w-full p-6'>
      <img src={logo} alt="logo" className='w-32 object-contain h-auto opacity-50' />
      <div className='w-full flex flex-col justify-center items-center py-8'>
        <p className='py-12 text-2xl text-primaryText'>Join with us!</p>
        <div className='px-8 w-full md:w-auto py-4 rounded-xl bg-secondary shadow-md flex flex-col items-center justify-center gap-8'>
          
          <UserAuth label={'Email'} placeholder={'Email'} isPass={false} Icon={FaEnvelope} setStateFunction={setEmail} setGetEmailValidationStaus={setGetEmailValidation}/>
          <UserAuth label={'Password'} placeholder={'Password'} isPass={true} Icon={MdPassword} setStateFunction={setPassword} setGetEmailValidationStaus={setGetEmailValidation}/>
          

          {/* alert */}
          {
            (alert && <p className='text-red-600 '>{alertMessage}</p>  )
          }
          {/* login/signup */}
          <div className='w-full flex justify-center items-center' onClick={()=>{
            isLogin?loginUser():createNewUser()
          }}>
            <p className='bg-emerald-500 px-4 py-2 rounded-md text-white cursor-pointer w-full text-center hover:bg-emerald-700 active:scale-95 transition-transform duration-200 '>
              {isLogin ? 'LogIn' : 'SignUp'}
            </p>
          </div>

          <p className='text-primaryText'>
            {isLogin ? 'Don’t have an account?' : 'Already have an account?'} 
            <span className='cursor-pointer text-emerald-400' onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? ' SignUp here' : ' Login here'}
            </span>
          </p>

          <div className='flex justify-center items-center gap-9'>
            <div className='w-24 h-[1px] bg-gray-500 rounded'></div>
            <p className='text-gray-400 text-sm'>OR</p>
            <div className='w-24 h-[1px] bg-gray-500 rounded'></div>
          </div>

          <div className='flex justify-center items-center gap-3 bg-[rgba(256,256,256,0.2)] w-full py-3 rounded-xl cursor-pointer hover:bg-[rgba(256,256,256,0.4)] active:scale-95 transition-transform duration-200' onClick={signInWithGoogle}>
            <FcGoogle className='text-3xl text-white'/>
            <p className='text-xl text-white'>Sign in with Google</p>
          </div>

          <div className='flex justify-center items-center gap-9'>
            <div className='w-24 h-[1px] bg-gray-500 rounded'></div>
            <p className='text-gray-400 text-sm'>OR</p>
            <div className='w-24 h-[1px] bg-gray-500 rounded'></div>
          </div>

          <div className='flex justify-center items-center gap-3 bg-[rgba(256,256,256,0.2)] w-full py-3 rounded-xl cursor-pointer hover:bg-[rgba(256,256,256,0.4)] active:scale-95 transition-transform duration-200' onClick={signInWithGithub}>
            <FaGithub className='text-xl text-white'/>
            <p className='text-xl text-white'>Sign in with Github</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
