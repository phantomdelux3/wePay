import React from 'react'
import Backbutton from '../components/backbutton'
import Newbutton from '../components/Newbutton'
import { Inputbox } from '../components/inputbox'
import {useNavigate} from 'react-router-dom'

export function Profile () {
    const navigate = useNavigate()
  return <>
<div className='w-full h-screen'>
    <nav className='flex justify-between px-5 py-6 sm:px-9 sm:pt-11'>
        <div className='pt-2 flex  text-5xl sm:text-7xl'>
            <h1 className='font-logo text-royale-yellow tracking-wide'>we</h1>
            <h1 className='font-logo text-royale-yellow font-semibold'>Pay</h1>
        </div>
        <Backbutton onClick = {() => navigate('/dashboard')}></Backbutton>
    </nav>

    <div className='pt-10 w-full h-auto flex justify-center'>
        <div className='w-44 h-44 bg-pastel-violet-ubg flex justify-center rounded-3xl border-2'>    
            <img className='' src="https://preview.bitmoji.com/bm-preview/v3/avatar/hair?scale=0.75&transperent=1&gender=1&style=5&rotation=0&beard=-1&body=3&breast=0&brow=1547&cheek_details=-1&clothing_type=3&ear=1424&eye=1616&eyelash=-1&eye_details=-1&eye_size=2&eye_spacing=0&face_lines=-1&face_proportion=4&glasses=1369&hair=1302&hair_tone=2566954&hat=-1&jaw=1398&mouth=2337&nose=1435&outfit=1017912&pupil=2152&pupil_tone=5977116&skin_tone=16764057" alt="Profile" />
        </div>
    </div>

    <div className='flex justify-center text-lg text-[#ffffff] pt-1'>
        <h1>Deadpool1555</h1>
    </div>
    
    <div className='mx-5 my-5 px-6 py-7 bg-pastel-violet-ubg rounded-3xl'>
        <div className='w-full h-auto flex space-x-3  text-royale-yellow '>
            <h2 className='w-20 text-xl'> First Name :-</h2>
            <Inputbox className='' title='Krishna Kumar'></Inputbox>
        </div>
        <div className='w-full h-auto pt-5 flex space-x-3  text-royale-yellow '>
            <h2 className='w-20 text-xl'> Last Name :-</h2>
            <Inputbox className='' title='Krishna Kumar'></Inputbox>
        </div>
        <div className='w-full h-auto pt-5 flex  text-royale-yellow space-x-3'>
            <h2 className='w-20 text-xl'> DOB :-</h2>
            <Inputbox title='21-09-2003'></Inputbox>
        </div>
        <div className='w-full h-auto pt-5 flex  text-royale-yellow space-x-3'>
            <h2 className='w-20 text-xl'> Phone :-</h2>
            <Inputbox title='7982251434'></Inputbox>
        </div>
        <div className='flex justify-center'>
            <Newbutton title='Update info'></Newbutton>
        </div>

    </div>


</div>
  
  
  
  
</>

}
