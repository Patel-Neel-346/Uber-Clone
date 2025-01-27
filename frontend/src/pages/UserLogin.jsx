import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SERVER_URL } from '../App'
import { UserDataContext } from '../context/userContext'

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {userData,setUserData}=useContext(UserDataContext)
    const navigate=useNavigate()

    // const [user, setUser] = useState({})
    const sumbitHandler = async(e) => {
        e.preventDefault();
        try{
            const user={
                email: email,
                password: password
            }
            const response=await axios.post(`${SERVER_URL}/api/user/login`,user)
            if(response.status===200){
                const data=response.data
                console.log(data)
                setUserData(data.user)
                localStorage.setItem('token1',data.token)
                navigate('/home')

            }
            console.log(user)
            setEmail('')
            setPassword('')
        }catch(error){
            console.log(error)
        }
       
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
                   <p className=' text-center'>New here? <Link to={'/signup'} className='text-blue-600 '>Create New Account</Link></p>
                </form>
            </div>
            <div>
              <Link to={'/captain-login'}><button className=' bg-[#10b461] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base '>Signin as Captain</button>  </Link>
            </div>
        </div>
    )
}

export default UserLogin
