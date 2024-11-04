import React,{useState} from 'react'
import {useNavigate,Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import { login as authLogin } from '../store/authSlice'
import authService from '../appwrite/auth'
import {Logo,Input,Button} from './index.js'

function Signup(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {register,handleSubmit,formState:{errors } }=useForm();
    const [serverError,setServerError]=useState('');

    const create=async(data)=>{
        setServerError('');
        try {
            const account= await authService.createAccount();
            if(account){
                const userData=authService.getCurrentUser();
                if(userData) dispatch(authLogin(userData))
                    navigate('/')
            } 
        } catch (error) {
            setServerError(error.message)
        }
    }

    return ( <div className="flex items-center justify-center">
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <Logo width="100%" />
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                Already have an account?&nbsp;
                <Link
                    to="/login"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Sign In
                </Link>
            </p>
            {serverError && <p className="text-red-600 mt-8 text-center">{serverError}</p>}

            <form onSubmit={handleSubmit(create)}>
                <div className='space-y-5'>
                    <Input
                    label="Full Name: "
                    placeholder="Enter your full name"
                    {...register("name", {
                        required: 'Enter Name',
                    })}
                    />
                      {errors.name && <span> {errors.name.message}
                      </span> }
                    <Input
                    label="Email: "
                    placeholder="Enter your email"
                    type="email"
                    {...register("email", {
                        required: 'Enter email id',
                        validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
                    })}
                    />
                    {errors.email && <span> {errors.email.message}
                    </span> }
                    <Input
                    label="Password: "
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", {
                        required: 'Enter password',})}
                    />
                    {errors.password && <span> {errors.password.message}
                    </span> }
                    <Button type="submit" className="w-full">
                        Create Account
                    </Button>
                </div>
            </form>
        </div>

</div>


    )
}

export default Signup;