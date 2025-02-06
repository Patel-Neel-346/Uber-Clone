import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'
import { SERVER_URL } from '../App'

const CaptainLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {captain, setCaptain} = useContext(CaptainDataContext)
    const navigate = useNavigate()

    const sumbitHandler = async(e) => {
        e.preventDefault();
        const captain={
            email: email,
            password: password
        }
        const response=await axios.post(`${SERVER_URL}/api/captain/login`,captain)

        if(response.status===200){
            const data=response.data
            console.log(data)
            setCaptain(data.captain)
            localStorage.setItem('token',data.token)
            navigate('/captain-home')
        }

        setEmail('')
        setPassword('')
        // console.log(userData)
    };
    return (
        <div className=' p-7 h-screen flex flex-col justify-between '>
            <div>
                <img className=' w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <form action="" onSubmit={sumbitHandler}>
                    <h3 className=' text-lg font-medium mb-2'>What's your email</h3>
                    <input type="email" className=' bg-[#eeeeee] mb-7 rounded px-4 py-2 border-[#eeee]  w-full text-lg placeholder:text-base' required placeholder='example@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <h3 className=' text-lg font-medium mb-2'>Enter Password</h3>
                    <input type="password" className=' bg-[#eeeeee] mb-7 rounded px-4 py-2 border-[#eeee] w-full text-lg placeholder:text-base' required placeholder='enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <button className=' bg-black text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base '>Login</button>
                   <p className=' text-center'>Want to join a fleet <Link to={'/captain-signup'} className='text-blue-600 '>Register as a Captain</Link></p>
                </form>
            </div>
            <div>
              <Link to={'/login'}><button className=' bg-[#d5622d] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base '>Signin as User</button>  </Link>
            </div>
        </div>
    )
}

export default CaptainLogin
