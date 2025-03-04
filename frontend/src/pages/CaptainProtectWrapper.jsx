// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { CaptainDataContext } from '../context/CaptainContext'

// const CaptainProtectWrapper = ({children}) => {
//     const token=localStorage.getItem('token')
//     // const [isLoading, setIsLoading] = useState(true);
//     const navigate=useNavigate()
//     const {captain, setCaptain} = useContext(CaptainDataContext)
//     console.log(token)
//     useEffect(()=>{
//         if(!token){
//             navigate('/captain-login')
//         }
//     },[token])
    
    
//   return (
//     <>
//         {children}
//     </>
//   )
// }

// export default CaptainProtectWrapper
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { SERVER_URL } from '../App'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainProtectWrapper = ({
    children
}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [ isLoading, setIsLoading ] = useState(true)




    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
        }

        axios.get(`${import.meta.env.VITE_API_URL}/api/captain/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                setCaptain(response.data.captain)
                setIsLoading(false)
            }
        })
            .catch(err => {

                localStorage.removeItem('token')
                navigate('/captain-login')
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

export default CaptainProtectWrapper