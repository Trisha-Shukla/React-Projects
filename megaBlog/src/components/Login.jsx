import React,{useState} from 'react'
import {useNavigate,Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import { login as authLogin } from '../store/authSlice'
import authService from '../appwrite/auth'
import {Logo,Input,Button} from './index.js'

function Login() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {register,formState:{error},handleSubmit}=useForm()
    const [serverError,setServerError]=useState();

    const loginSubmit=async(data)=>{
        setServerError('');
        try {
            const session=await authService.login(data);
            if(session){
                const userData= await authService.getCurrentUser();
                if (userData) dispatch(authLogin(userData));
                navigate('/');
            }
        } catch (error) {
            setServerError(error.message);
        }
    }
  return (
    <div className='flex items-center justify-center w-full' >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {serverError && <p className="text-red-600 mt-8 text-center">{serverError}</p>}
        <form onSubmit={handleSubmit(loginSubmit)} className='mt-8'>
            <div className='space-y-5'>
        <Input type='email' label='Email' placeHolder='Enter your Email' {...register('email',{
            required:'Email is required',
            validate: {
                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
            }
        })}/>
        {error.email && <span> {error.email.message}
        </span> }
        <Input type='password' label='Password' placeHolder='Enter your Password' {...register('password',{
            required:"Enter Valid Password"
            
        })}/>
        {error.password && <span> {error.password.message}
        </span> }

        <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
        </form>

        </div>
      
    </div>
  )
}

export default Login
