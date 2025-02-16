import React from 'react'
import { Link } from 'react-router-dom'

const CaptainHome = () => {
  return (
    <div className='h-screen'>
      <div className=' fixed p-3 top-0 flex items-center justify-between w-screen bg-white'>
        <img className=' w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-1/2'>
        {/* <LiveTracking /> */}
        <img className=' h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />

      </div>
      <div className='h-1/2 p-4'>
        <div>
          <div>
            <img src="" alt="" />
            <h4>Harsh Patel</h4>
          </div>
          <div>
            <h4>$200</h4>
            <p>Earned</p>
          </div>
        </div>
        <div>
          <div>
            <i class="ri-timer-2-line"></i>
            <h5>10.2</h5>
            <p>Hours Online</p>
          </div>
          <div>
            <i class="ri-speed-up-line"></i>
            <h5>10.2</h5>
            <p>Hours Online</p>
          </div>
          <div>
            <i class="ri-booklet-line"></i>
            <h5>10.2</h5>
            <p>Hours Online</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaptainHome
