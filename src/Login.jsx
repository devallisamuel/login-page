import React, { useState } from 'react';
import CustomButton from './CustomComponents/CustomButton';
import CustomInput from './CustomComponents/CustomInput';
import googleIcon from './Images/googleIcon.svg';

const Login = () => {
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPassordError] = useState("")
    const [form, setForm] = useState({
        email: "",
        password:""
    })

    const handleChange = (e) => {
        if(form.email) {
            setEmailError("")
        } else {
            setPassordError("")
        }
        return setForm({...form, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!form.email) {
            setEmailError("Field cannot be empty")
        } else if(!form.password) {
            setPassordError("Field cannot be empty")
        } else {
           alert(`Hello ${form.email}`)
        }
    }

  return (
    <div className='lg:w-2/5 flex justify-center items-center bg-[#2D74DA] text-white h-screen'>
        <div className='w-3/4 m-auto'>
            <h1 className='pt-[20px] text-xl'>SME Better</h1> 
            <h1 className='mt-[50px] text-2xl'>Log into your Business Manager</h1>
            <form onSubmit={handleSubmit}>
                <div className='mt-[26px]'> 
                    <div>
                        <CustomInput
                        placeholder="someone@email.com"
                        name="email"
                        label="Email Address"
                        type="email"
                        required={true}
                        error={emailError}
                        onChange={handleChange}
                        />
                    </div>

                    <div className='mt-6'>
                        <CustomInput
                        placeholder="Password"
                        name="password"
                        label="Enter Your Password"
                        type="password"
                        error={passwordError}
                        required={true}
                        onChange={handleChange}
                        />
                    </div>
                </div>

                <CustomButton 
                className='border w-full h-[46px] rounded mt-[25px]' 
                title="SIGN IN"
                />
            </form>
            <div className='text-center mt-[26px]'>
                <p className='text-gray-400'>Don't have an account? <span className='text-white cursor-pointer font-bold'> <a href="/">Sign Up</a> </span></p>
            </div>
            <div className='text-center mt-[26px] font-bold'>
                <p><a href="/">Forgot Password?</a></p>
            </div>
            <CustomButton 
            className=' bg-white text-gray-400 flex justify-center items-center text-sm w-full h-[46px] rounded mt-[25px]'
            title="Log in with Google"
            icon={googleIcon}
            iconClass="mr-4 mt-1"
            />
        </div>
    </div>
  )
}

export default Login