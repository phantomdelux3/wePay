import { useState } from 'react'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import { Signup } from './pages/signup'
import { Signin } from './pages/signin'
import { Dashboard } from './pages/dashboard'
import { Profile } from './pages/profile' 
import { Deposit } from './pages/Deposit'

function App() {
  return <>
  <BrowserRouter>
    <Routes>0000000
      <Route path='/signup' element={<Signup title='SignUp'/>} />
      <Route path='/signin' element={ <Signin title='SignIn'/>} />
      <Route path='/deposit' element={<Deposit/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
  </BrowserRouter>
    
    

    
    

</>
}

export default App
