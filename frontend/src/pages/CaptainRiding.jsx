import React from 'react'
import CaptainDetails from '../components/CaptainDetails'
import RidePop from '../components/RidePop'
import { Link } from 'react-router-dom'

const CaptainRiding = () => {
  return (
    <div className='h-screen'>
    <div className=' fixed p-3 top-0 flex items-center justify-between w-screen bg-white'>
      <img className=' w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <Link to='/captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="ri-logout-box-r-line"></i>
      </Link>
    </div>
    <div className='h-3/5'>
      {/* <LiveTracking /> */}
      <img className=' h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />

    </div>
    <div className='h-2/5 p-6 '>
     <CaptainDetails />
    </div>
  
  </div>
  )
}

export default CaptainRiding
