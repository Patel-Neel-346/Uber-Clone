import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
    <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
      props.setWaitingForDriver(false)
    }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>

    <div className='flex items-center justify-between'>
      <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
      <div className='text-right'>
        <h2 className='text-lg font-medium capitalize'>{props.ride?.captain.fullname.firstname} {props.ride?.captain.fullname.lastname}</h2>
        {/* <h2 className='text-lg font-medium capitalize'>John Doe</h2> */}
        <h4 className='text-xl font-semibold -mt-1 -mb-1'>{props.ride?.captain.vehicle.plate}</h4>
        {/* <h4 className='text-xl font-semibold -mt-1 -mb-1'>MH 12 1234</h4> */}
        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
        <h1 className='text-lg font-semibold'>  {props.ride?.otp} </h1>
        {/* <h1 className='text-lg font-semibold'>  1234 </h1> */}
      </div>
    </div>

    <div className='flex gap-2 justify-between flex-col items-center'>
      <div className='w-full mt-5'>
        <div className='flex items-center gap-5 p-3 border-b-2'>
          <i className="ri-map-pin-user-fill"></i>
          <div>
            <h3 className='text-lg font-medium'>562/11-A</h3>
            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
            {/* <p className='text-sm -mt-1 text-gray-600'>123 Maple Street, Springfield, IL 62704, USA</p> */}
          </div>
        </div>
        <div className='flex items-center gap-5 p-3 border-b-2'>
          <i className="text-lg ri-map-pin-2-fill"></i>
          <div>
            <h3 className='text-lg font-medium'>562/11-A</h3>
            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
            {/* <p className='text-sm -mt-1 text-gray-600'>45 Baker Street, London W1U 8EW, United Kingdom</p> */}
          </div>
        </div>
        <div className='flex items-center gap-5 p-3'>
          <i className="ri-currency-line"></i>
          <div>
            <h3 className='text-lg font-medium'>₹{props.ride?.fare} </h3>
            {/* <h3 className='text-lg font-medium'>100</h3> */}
            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default WaitingForDriver
