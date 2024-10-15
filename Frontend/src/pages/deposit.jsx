import React from 'react'
import Backbutton from '../components/backbutton';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { Inputbox } from '../components/inputbox';
import Newbutton from '../components/Newbutton';
import {useNavigate} from 'react-router-dom'



export function Deposit() {
    const navigate = useNavigate();
  return <>

<div className='w-full h-screen'>
    <nav className='flex justify-between px-5 py-6 sm:px-9 sm:pt-11'>
        <div className='pt-2 flex  text-5xl sm:text-7xl'>
            <h1 className='font-logo text-royale-yellow tracking-wide'>we</h1>
            <h1 className='font-logo text-royale-yellow font-semibold'>Pay</h1>
        </div>
        <div>
            <Backbutton onClick = { () => navigate('/dashboard') }></Backbutton>
        </div>
    </nav>

    <div className='flex justify-center'>
        <div className='my-5 text-6xl text-royale-yellow font-semibold'>
            <h1>
                Deposit
            </h1>
        </div>
    </div>

    <div className='flex justify-center'>
        <div className='mt-5 w-72 h-auto bg-pastel-violet-ubg'>
            <img src="https://lh3.googleusercontent.com/fife/ALs6j_HB96lJPokv1Jp_n2N-TxKpgBZAleh12R3MibVNsG9CCZPa5eYDMxQXutoi31wWlBrnBJJLRURMeKWY1exFdNxGc9esIoJ6XCGTC18clAGH5pU_Y_AMjZyTUZB-7ByPPNB0ELmvGM9KcV-uGK_d3GjHSGaOVqY1qiVj5P66JeU0UMKKfERD7sNSoFXZWUEdK-lkXTQtEdqX2s8AormcDY6BMAYFHi5P7Lsl16bYnsWeTLU5OUQAj2hHP47mr0tXODpNY6zC-_fIW563XF68fnVLeuSPMq7rz94UKX9Rah7FpCdial94ktb91wUCkYj-OVnxHRYDYAZisrwK1MRc1qtNt46VY30hnF-BAFF5GhCB4aSZqs-f4W-u7spNxBnXW9hEKVaC1lBzOzBsCvw4LRE22_Yg9akDiipF-EqY949a3IKAz-SeWF_ZFYowXuSqWHYjND3ZVtzrOH7CIbJUlq4LTCDGBZPu-S8dIWVYQDenOiJMQ2BhDRU9TdwoFFEYIkHe1zBhNSksnz2Vzj0lS5WKdOzVlGhmM7dHhkqdFQDx8rW_Uw6IGSHJITMeg8J2N_8lvU9j8UU1JSo51cBEU7_XeZAFSwd4Jq1M4qO-Att6oebT0s9kckJv_y4D7iWUWsCGs5Q2kJBv2phzkjVbkgNWB_yz4_M6ACk1G3cdeAgL3q4psaK_l6PI_3QYVeTyeV694i5Gc0WZp1NL6rW1zFTMz1yF_h7hRJFV7hPCoJbUIXaDnxbdYIbyXtA8XhOpVZKRQ6mYfkKXDQtGKMKC-QIEAw8ZeWBBLJuTHbvUWfRFIxvZeK87meIIsUJKXYv-d87eu4lnuI1vEaxPvFk6mlgWsiRMKbvYqvt9uWQOf2CKIRld2dvnqq6W0jwtf9aZ-cIC6ADBC3WIL8ezXiWa26GGTh3bR6OfU7bPZ1wb-F9m9-pN-e93PIeBa5o4K3attP7dpWz0eHLDThOS9S8ssG9j6pBphWQrJfbKZkZcDwtqfQ3SxoIbUuVIwzfNWn0kBlQvrbovCFUBZ6k-rbz3IbdKq9UNC4Q-pSdv3XBlSI9bTjOwaq_DePuwy3Ic-3l_gbT6SJJ67CThAiLucmIkt22pYgsIbw2P1J9Zv_mHQwqgZZafqxBQpYK2wbGaKCwfsYOZhEyHILmjhdfpZ59zZPSCiAeIk7qwc3V4xw1MoXPZ7XJTclzhccxildoGyILPYsoHO6HQybBywKDsK_kEC0ZUp8bK06UUNEJJvnaRmOQdU-bS4UyE8JQh3rZoyxknZ1-Y5likjF4l9yvaqs8PedFjf1ddk8xe1_x7OXMK6vFD3I5w8ZHyUdj7hMzAbjF7So0Zuycw-HQQhMbHvI5zYtkEw-4_8ma14kNOwO5TjJmuigdwBoR3sBc28mIjtPo2DXI9lm3hoqvUrf-XmmDk2PbI84kdtTvdCKLPedp7ipWIM8Mh0S2z4R_ArAz3XTFFtmZPj0o9zH2hLcmSMi103vU4qhOeDttI547hPPNhuCZ8Ua1ojvzpKq5_eD6WGtSBSsuUO3mCpKTSEEltXMTq4Ju9-QfqHLYyXeGibtRbIauLtqDmED0gFqR3C1wrBA5XyBauiMqdJbj7ZZqpg8Ew5Qr3c2XGINWsgZPO8l8v7QAFSkxzwdVHEIMdiuGPeB9jDphrhGOVoYb8XF3JGmvZXY1IjYOmvx8lyHkHCAqiK3okmkybmTtYJgb_K2zM3EehReCbKis7lLxvc43O3mf_8Qt-mFeeDwgh=w4000-h8220" alt="QR" />
        </div>
    </div>
    <div>

    </div>
    <div className='mt-5 flex justify-center'>
        <div className='text-sm text-red-500 '>
            <p>Please wait for 10min for verifying the transaction.</p>
            <p className='w-72 h-auto'>Invalid Payments will lead not to reflect the amount in your Account. </p>
        </div>
    </div>
    <div className='mt-5 flex justify-center'>
        <div className='p-1 h-10 bg-pastel-violet-ubg rounded-3xl shadow-lg flex justify-between'>
            <button className=' start-0 w-10 h-auto rounded-3xl bg-royale-yellow active:bg-pastel-violet-bg active:text-royale-yellow text-pastel-violet-bg'>
                <div className='w-10 h-auto flex justify-center '>
                    <FaMinus />
                </div>
            </button>
            <input className='w-20 text-center focus:outline-none bg-transparent text-xl tracking-widest font-logo text-royale-yellow font-bold appearance-none custom-number-input' defaultValue='0' type="number" max='100000'
                onInput={(e) => {
                    if (e.target.value > 100000) e.target.value = 100000;
                }}
            />
            <button className=' w-10 h-auto rounded-3xl bg-royale-yellow active:bg-pastel-violet-bg active:text-royale-yellow text-pastel-violet-bg'>
                <div className='w-10 h-auto flex justify-center '>
                    <FaPlus />
                </div>
            </button>
        </div>
    </div>

    <div className='mt-10 flex justify-center text-royale-yellow'>
        <div className='w-72'>
            <Inputbox  title = 'Enter UTR Number'/>
        </div>
    </div>
    <div className='flex justify-center'>
        <Newbutton title = 'Submit'></Newbutton>
    </div>

</div>  

</>
}
