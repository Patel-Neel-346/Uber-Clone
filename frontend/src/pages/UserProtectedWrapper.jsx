// import React, { useContext, useEffect } from 'react'
// import UserContext, { UserDataContext } from '../context/userContext'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { SERVER_URL } from '../App'
// const UserProtectedWrapper = ({children}) => {
//     const token=localStorage.getItem('token1')
//     const navigate=useNavigate()
//     console.log(token)
//     useEffect(()=>{
//         if(!token){
//             navigate('/login')
//         }
//     axios.get(`${SERVER_URL}/api/user/profile`,{
//       headers:{
//         Authorization:`Bearer ${token}`
//       }
//     })
//     },[token])
    
//   return (
//     <>
//         {children}
//     </>
//   )
// }

// export default UserProtectedWrapper


import React, { useContext, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import  { UserDataContext } from '../context/userContext'
import { SERVER_URL } from '../App'

const UserProtectedWrapper = ({
    children
}) => {
    const token = localStorage.getItem('token1')
    console.log(token)
    const navigate = useNavigate()
    const { userData, setUserData } = useContext(UserDataContext)
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }

        axios.get(`${SERVER_URL}/api/user/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                setUserData(response.data)
                setIsLoading(false)
            }
        })
            .catch(err => {
                console.log(err)
                localStorage.removeItem('token1')
                navigate('/login')
            })
    }, [ token ])

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <>
            {children}
        </>
    )
}

export default UserProtectedWrapper