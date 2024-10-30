import React, { useState } from 'react';
import {Inputbox} from '../components/inputbox';
import Newbutton from '../components/Newbutton';
import { LoadingAnimation } from '../components/loading';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export function Signup({title}) {
  const navigate = useNavigate()
  const [InputData, setInputData] = useState({
    firstName : "",
    lastName : "",
    username : "",
    email : "",
    password : "",
    confirmPassword: ""
  })
  const [Loading , setLoading] = useState(false);
  const [ErrorMessage ,setErrorMessage] = useState("");

  async function signupHandler(){
    setLoading(true)
    setErrorMessage('')
    try {
      const response = await axios.post(`https://backend.krishnakmar-005.workers.dev/api/v1/signup` , InputData)
      if (response.data.error) {
        setErrorMessage(response.data.error); // Assuming the error message is in response.data.error
      } else {
        localStorage.setItem("token" , response.data.jwt)
        navigate("/dashboard")
      }
    } catch (error) {
      console.log(error)
      const errorMessage = error.response?.data?.error || 'An error occurred during signup.';
      setErrorMessage(errorMessage); // Set the error message      
    }finally{
      setLoading(false)
    }
  }


  return (
<> <div className='w-screen min-h-screen'>


  <div className='mx-auto pt-8 flex justify-center text-8xl'>
    <h1 className='font-logo text-royale-yellow tracking-wide'>we</h1>
    <h1 className='font-logo text-royale-yellow font-semibold'>Pay</h1>
  </div>
  
  <div className=' mt-10 flex justify-center items-center text-royale-yellow'>
    <div className=' w-[80vw] h-auto bg-pastel-violet-ubg rounded-2xl py-6 px-4 shadow-lg'>

      <div className='flex justify-center'>
        <h1 className='font-bold text-3xl pb-3 mb-4'>{title}</h1>
      </div>

      <Inputbox title='First Name' onChange={(e)=> {setInputData({...InputData , firstName : e.target.value})}}></Inputbox>
      <Inputbox title='Last Name' onChange={(e)=> {setInputData({...InputData , lastName : e.target.value})}}></Inputbox>
      <Inputbox title='Username' onChange={(e)=> {setInputData({...InputData , username : e.target.value})}}></Inputbox>
      <Inputbox title='Email' onChange={(e)=> {setInputData({...InputData , email : e.target.value})}}></Inputbox>
      <Inputbox title='Password' onChange={(e)=> {setInputData({...InputData , password : e.target.value})}}></Inputbox>
      <Inputbox title='Confirm Password' onChange={(e)=> {setInputData({...InputData , confirmPassword : e.target.value})}}></Inputbox>

      <div className='flex justify-center items-center'>
        {Loading ? <LoadingAnimation/> : <Newbutton title={'Create Account'} onClick={signupHandler}></Newbutton>}  
      </div>
      {ErrorMessage && <p className='text-red-500 text-center mt-4'>{ErrorMessage}</p>}
    </div>  
  </div>

  <div className='mt-2 w-full flex flex-col justify-center items-center text-pastel-violet-ubg'>
    <p>if you have an Account <button>Signin</button></p>
  </div>



</div>  
</>
)}
