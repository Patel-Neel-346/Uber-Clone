import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainProtectWrapper = ({children}) => {
    const token=localStorage.getItem('token')
    // const [isLoading, setIsLoading] = useState(true);
    const navigate=useNavigate()
    const {captain, setCaptain} = useContext(CaptainDataContext)
    console.log(token)
    useEffect(()=>{
        if(!token){
            navigate('/captain-login')
        }
    },[token])
    
    
  return (
    <>
        {children}
    </>
  )
}

export default CaptainProtectWrapper
