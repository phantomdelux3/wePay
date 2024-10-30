import React from "react";
import Newbutton from "../components/Newbutton";
import { useNavigate } from "react-router-dom";


export function Home(){
    const navigate = useNavigate()
return <>
<div className="w-full h-max">
    <Newbutton title={"Signup"} onClick={() => navigate('/signup') } />
        <br />
    <Newbutton title={"Signin"} onClick={() => navigate('/signin') } />
</div>

</>
}