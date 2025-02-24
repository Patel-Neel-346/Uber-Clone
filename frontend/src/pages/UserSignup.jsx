import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { SERVER_URL } from '../App'
import axios from 'axios'
import { UserDataContext } from '../context/userContext'
const UserSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const {userData,setUserData}=useContext(UserDataContext)
    const navigate=useNavigate()
    // const [user, setUser] = useState({})
    const sumbitHandler =async (e) => {
        e.preventDefault();
       try{
        const user={
            fullname: {
                firstname: firstname,
                lastname: lastname
            },
            email: email,
            password: password
        }
        console.log(user)
        const response=await axios.post(`${SERVER_URL}/api/user/register`,user)
        console.log(response.data)
        if(response.status===201){
            // setUserData(response.da
            // console(userData)
            const data=response.data
            setUserData(data.user)
            localStorage.setItem('token1',data.token)
            console.log(data.token)
            navigate('/home')

        }
        

        setEmail('')
        setPassword('')
        setFirstname('')
        setLastname('')
        // console.log(userData)
       }catch(error){
        console.log(error)
       }
       
    };
    return (
        <div className=' p-7 h-screen flex flex-col justify-between '>
            <div>
                <img className=' w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <form action="" onSubmit={sumbitHandler}>
                    <h3 className=' text-lg font-medium mb-2'>What's your Name</h3>
                    <div className=' flex gap-4 mb-5'>
                        <input type="text" className=' bg-[#eeeeee] w-1/2 rounded px-4 py-2 border-[#eeee]   text-lg placeholder:text-base' required placeholder='FirstName' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                        <input type="text" className=' bg-[#eeeeee] w-1/2 rounded px-4 py-2 border-[#eeee]   text-lg placeholder:text-base' required placeholder='LastName' value={lastname} onChange={(e) => setLastname(e.target.value)} />

                    </div>
                    <h3 className=' text-lg font-medium mb-2'>What's your email</h3>
                    <input type="email" className=' bg-[#eeeeee] mb-5 rounded px-4 py-2 border-[#eeee]  w-full text-lg placeholder:text-base' required placeholder='example@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h3 className=' text-lg font-medium mb-2'>Enter Password</h3>
                    <input type="password" className=' bg-[#eeeeee] mb-5 rounded px-4 py-2 border-[#eeee] w-full text-lg placeholder:text-base' required placeholder='enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className=' bg-black text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base '>Register</button>
                    <p className=' text-center'>Already have an account? <Link to={'/login'} className='text-blue-600 '>login here</Link></p>
                </form>
            </div>
            <div>
                <p className=' text-[12px] leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, animi, consequuntur sunt officiis beatae culpa sapiente rem ex, maiores labore assumend</p>
            </div>
        </div>
    )
}

export default UserSignup
