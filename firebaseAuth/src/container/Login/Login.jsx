import React from 'react'
import  { signInWithPopup} from 'firebase/auth'
import { auth, googleAuthProvider } from '../../config/config'
import { useContext } from 'react'
import { blogContext } from '../../context/context'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

function Login() {
  const ctx=useContext(blogContext);
  console.log(ctx);
  const navigate=useNavigate();
  

    const onGoogleLogin=async()=>{
        try {
            const res= await signInWithPopup(auth,googleAuthProvider);
            ctx.setState(
              {
                ...ctx.state,
                user:res.user,
              }
            )

            
            navigate('/');
        } catch (error) {
          console.error(error)  
        }
    }

    
  return (
    <div>
      Login
      <button onClick={onGoogleLogin}>User Login</button>
    </div>
  )
}

export default Login
