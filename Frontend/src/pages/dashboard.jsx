import React from 'react'
import Newbutton from '../components/Newbutton'
import {useNavigate} from 'react-router-dom'

export function Dashboard() {
    const navigate = useNavigate()
  return (
<>
<div className='w-screen min-h-screen'>
    <nav className='flex justify-between px-5 py-6 sm:px-9 sm:pt-11'>
        <div className='pt-2 flex  text-5xl sm:text-7xl'>
            <h1 className='font-logo text-royale-yellow tracking-wide'>we</h1>
            <h1 className='font-logo text-royale-yellow font-semibold'>Pay</h1>
        </div>
        <button onClick={() => navigate('/profile') }>
            <div className='w-13 h-17 sm:w-[85px] sm:h-[95px] relative  rounded-3xl bg-pastel-violet-ubg border-2 sm:border-[5px] border-pastel-violet-ubg'>
            
                <div className=' w-14 h-16 sm:w-[76px] sm:h-[85px] rounded-3xl bg-pastel-violet-bg ' style={{ clipPath: 'inset(50% 0 0 0)' }}>
                </div> 
                <div className='absolute -top-2 sm:-top-4 left-[10px] sm:left-1 rounded-full  w-9 h-9 sm:w-16 sm:h-16 flex flex-col justify-center items-center' >
                    <img className=' ' src="https://preview.bitmoji.com/bm-preview/v3/avatar/hair?scale=0.75&transperent=1&gender=1&style=5&rotation=0&beard=-1&body=3&breast=0&brow=1547&cheek_details=-1&clothing_type=3&ear=1424&eye=1616&eyelash=-1&eye_details=-1&eye_size=2&eye_spacing=0&face_lines=-1&face_proportion=4&glasses=1369&hair=1302&hair_tone=2566954&hat=-1&jaw=1398&mouth=2337&nose=1435&outfit=1017912&pupil=2152&pupil_tone=5977116&skin_tone=16764057" alt="Profile" />
                    <p className='absolute top-12 sm:top-[70px]  text-[10px] sm:text-[16px] text-[#ffffff]'>Krishna</p>
                </div>
            </div>   
        </button>
        
    </nav>
    <div className='px-10 py-7'>
        <div className='w-full h-52 sm:h-60 px-7 sm:px-10 py-5 sm:py-8 bg-royale-yellow rounded-3xl '>
            <div className='flex space-x-1 sm:space-x-2 text-pastel-violet-bg pointer-events-none'>
                <h3 className='font-logo font-semibold text-lg sm:text-2xl'>wePay</h3>
                <h3 className='pt-[2px] text-base sm:text-lg font-medium'>balance</h3>
            </div>
            <div className='pt-2 text-pastel-violet-bg text-4xl sm:text-5xl font-semibold flex space-x-1 pointer-events-none'>
                <h3 className='font-logo text-4xl font-bold tracking-wider'>&#8377;</h3>
                <h3 className='font-logo text-4xl font-bold tracking-wider'>100.00</h3>
                <h3>INR</h3>
            </div>
            <div className='pt-7 flex space-x-3 sm:space-x-7 justify-center'>
                <Newbutton onClick={() => navigate('/deposit')} title ='Deposit' varient='1'></Newbutton>
                <Newbutton title ='Withdraw' varient='1'></Newbutton>
            </div>    
        </div>
        <div className='pt-10'>
            <div className='relative flex'>
                <div className='w-[16vw] h-[16vw] rounded-2xl bg-[#edc08c] absolute top-1 left-1 grid place-items-center text-[#48426d] custom-border'>
                    <button className='w-full h-full rounded-2xl active:bg-pastel-violet-ubg flex justify-center items-center'>
                        <div className='w-[10vw] h-[10vw] '>
                            <svg enable-background="new 0 0 32 32" id="Glyph" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z" id="XMLID_223_" fill={'#373358'}/></svg>
                        </div>
                    </button>
                </div>
                    <svg className='w-full h-auto' viewBox="0 0 264 224" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 84V206C0 216.493 8.50659 225 19 225H245C255.493 225 264 216.493 264 206V19C264 8.50659 255.493 0 245 0H83.1214C72.628 0 64.1214 8.50659 64.1214 19V46C64.1214 56.4934 55.6149 65 45.1214 65H19C8.50659 65 0 73.5066 0 84Z" fill="#373258" />
                </svg>
            </div>
        </div>



    </div>
    




</div>
</>
  )
}
