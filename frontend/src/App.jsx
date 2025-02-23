import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Main from './pages/Main'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'

export const SERVER_URL = import.meta.env.VITE_API_URL;
function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/captain-riding" element={<CaptainRiding />} />


        <Route path='/home' element={
          <UserProtectedWrapper>
            <Main />
          </UserProtectedWrapper>
        }></Route>
        <Route path='/user/logout' element={<UserProtectedWrapper>
          <UserLogout />
        </UserProtectedWrapper>}></Route>
        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
             <CaptainHome />
          </CaptainProtectWrapper>}></Route>
          <Route path='/captain-logout' element={
            <CaptainProtectWrapper>
              <CaptainLogout/>
            </CaptainProtectWrapper>}></Route>
      </Routes>
    </div>
  )
}

export default App
