import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import Newbutton from '../components/Newbutton'

export default function Backbutton({onClick}) {
  return <>
<div className='mt-2 text-4xl text-royale-yellow '>
    <Newbutton onClick={onClick} title={<IoIosArrowBack className='w-6 h-6'/>}></Newbutton>
</div>
  
</>
}
