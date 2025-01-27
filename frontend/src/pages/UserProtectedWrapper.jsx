import React, { useContext, useEffect } from 'react'
import { UserDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'

const UserProtectedWrapper = ({children}) => {
    const token=localStorage.getItem('token1')
    const navigate=useNavigate()
    console.log(token)
    useEffect(()=>{
        if(!token){
            navigate('/login')
        }
    },[token])
    
  return (
    <>
        {children}
    </>
  )
}

export default UserProtectedWrapper
