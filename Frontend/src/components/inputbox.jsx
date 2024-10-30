import React from 'react'

export function Inputbox({title,placeholder,onChange}) {
  return (
    <div className='pb-1 flex relative mb-5 '>
      <input onChange={onChange} type="text" required className='w-full px-3 pb-1 my-1 border-b border-royale-yellow bg-[rgba(0,0,0,0)] focus:text-lylac focus:border-lylac focus:font-bold focus:outline-none  focus:border-b-2 transition-colors duration-500 peer'/>
      <h1 className=' absolute left-0 mx-1 text-lg cursor-text tracking-wide pointer-events-none peer-focus:text-lylac peer-focus:text-xs peer-focus:font-semibold peer-focus:-top-4 transition-all duration-500 peer-valid:-top-4  peer-valid:text-xs'>{title}</h1>
    </div>
  )
}
