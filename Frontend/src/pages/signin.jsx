import React, { useState } from 'react'
import {Inputbox} from '../components/inputbox'
import {LoadingAnimation} from '../components/loading'
import Newbutton from '../components/Newbutton'
import { useNavigate } from "react-router-dom";
import axios from "axios";




//sigin component
export function Signin({title}) {
    
    const navigate = useNavigate()                                       //navigation state
    const [InputData , setInputData] = useState({                        //data state 
        username : "",
        password : ""
    })
    const [Loading , setLoading] = useState(false)                       //loading state 
    const [errorMessage, setErrorMessage] = useState('');                //error state 
    //handler 
    async function SigninHandler() {
        setLoading(true)
        setErrorMessage('')
        try {
        const response = await axios.post("https://backend.krishnakmar-005.workers.dev/api/v1/login" , InputData)
        if (response.data.error) {
            setErrorMessage(response.data.error); // Assuming the error message is in response.data.error
          } else {
            console.log('Login successful:', response.data);
            localStorage.setItem("token" , response.data.jwt)
            navigate("/dashboard")
          }
    } catch (error) {
        const errorMessage = error.response?.data?.error || 'An error occurred during login.';
        setErrorMessage(errorMessage); // Set the error message
    }finally{
        setLoading(false)
    }
}


  return (
<>  
<div className='min-h-screen'>
    <div className='mx-auto pt-8 flex justify-center text-8xl'>
        <h1 className='font-logo text-royale-yellow tracking-wide'>we</h1>
        <h1 className='font-logo text-royale-yellow font-semibold'>Pay</h1>
    </div>
  
    <div className='mt-20 flex justify-center items-center text-royale-yellow'>
        <div className=' w-[80vw] h-auto bg-pastel-violet-ubg rounded-2xl py-6 px-4 shadow-lg'>

            <div className='flex justify-center'>
                <h1 className='font-bold text-3xl pb-3 mb-4'>{title}</h1>
            </div>

            <Inputbox title='Username or Email' onChange={(e)=> {
                setInputData({
                    ...InputData,
                    username : e.target.value
                })
            }} ></Inputbox>
            <Inputbox title='Password' onChange={(e)=> {
                setInputData({
                    ...InputData,
                    password : e.target.value
                })
            }}></Inputbox>

            <div className='flex justify-center items-center'>
                {Loading ? (<LoadingAnimation/>) :  <Newbutton title={'Login'} onClick={SigninHandler}></Newbutton> }
            </div>

            {errorMessage && <p className='text-red-500 text-center mt-4'>{errorMessage}</p>}

        </div>  
  </div>

  <div className='mt-2 w-full flex flex-col justify-center items-center text-pastel-violet-ubg'>
        <p>Create New Account <button>Signup</button></p>
  </div>    
    
</div>  
</>
)}
