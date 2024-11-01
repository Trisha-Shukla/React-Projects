import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const UserAuth = ({ label, placeholder, Icon, isPass, setStateFunction,setGetEmailValidationStaus }) => {
    const [value, setValue] = useState('');
    const [showPass, setShowPass] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true); // Initialize to true if you want valid by default

    const handleInput = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue);
        setStateFunction(inputValue);

        // Only validate email if the input is for an email field
        if (placeholder === 'Email') {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const isValid = emailRegex.test(inputValue);
            setIsEmailValid(isValid);
            setGetEmailValidationStaus(isValid)
        }
    }

    return (
        <div className='flex flex-col items-start justify-start gap-1'>
            <label htmlFor={placeholder} className='text-sm text-gray-300'>{label}</label>
            <div className={`flex items-center justify-center gap-3 w-full md:w-96 rounded-md px-4 py-1 bg-gray-200 ${!isEmailValid && value.length>0 && placeholder==='Email' ? 'border-2 border-red-500':" "}`}>
                <Icon className='text-text555 text-2xl' />
                <input 
                    type={(isPass && showPass) ? 'password' : 'text'} 
                    id={placeholder}
                    placeholder={placeholder}
                    className={`flex-1 w-full h-full py-2 outline-none  bg-transparent text-text555 text-lg border-none}`}
                    value={value}
                    onChange={handleInput}
                />
                {
                    isPass && (
                        <div className='cursor-pointer' onClick={() => setShowPass(!showPass)}>
                            {showPass ? <FaEye className='text-text555 text-2xl' /> : <FaEyeSlash className='text-text555 text-2xl' />}
                        </div>
                    )
                }
            </div>
            {/* Optional feedback for invalid email */}
            {!isEmailValid && placeholder === 'Email' && (
                <p className='text-red-500 text-sm'>Please enter a valid email address</p>
            )}
        </div>
    )
}

export default UserAuth;
