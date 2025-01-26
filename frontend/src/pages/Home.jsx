import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1538563188159-070c4db2bc65?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen w-full pt-8  flex justify-between flex-col  bg-red-400'>
        <img className=' w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className='bg-white py-5 px-10'>
            <h2 className=' text-2xl font-bold '>Get Stareted With Uber</h2>
            <Link to={'/login'}> <button className=' w-full bg-black text-white py-3 rounded mt-2'>Continue</button> </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
