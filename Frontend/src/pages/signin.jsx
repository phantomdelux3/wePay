import React from 'react'
import {Inputbox} from '../components/inputbox'
import Newbutton from '../components/Newbutton'




export function Signin({title}) {

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

            <Inputbox title='Username or Email'></Inputbox>
            <Inputbox title='Password'></Inputbox>

            <div className='flex justify-center items-center'>
                <Newbutton title={'Create Account'}></Newbutton> 
            </div>

        </div>  
  </div>

  <div className='mt-2 w-full flex flex-col justify-center items-center text-pastel-violet-ubg'>
        <p>Create New Account <button>Signup</button></p>
  </div>    
    
</div>  
</>
)}
