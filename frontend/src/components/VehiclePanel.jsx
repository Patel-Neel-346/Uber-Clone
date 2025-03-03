import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
       <h5 className=' p-4 text-center absolute top-0 right-[3.5%] text-2xl' onClick={()=>{props.setVehiclePanelOpen(false)}}><i className="ri-arrow-down-wide-line"></i></h5>
        <h3 className=' text-2xl font-semibold mb-3 '>Choose a Vehicle</h3>
        <div onClick={()=>{
          props.setConfirmedRide(true)
          props.selectVehicle('car')
          }} className=' mb-3 flex active:border-2 border-black rounded-xl w-full p-3  items-center justify-between '>
          <img className=' h-12 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1568134115/assets/6d/354919-18b0-45d0-a151-501ab4c4b114/original/XL.png" alt="" />
          <div className='w-1/2'>
            <h4 className=' font-medium text-sm'>UberGO <span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className=' font-medium text-xs'>2 mins away</h5>
            <p className=' font-xl text-xs text-gray-600'>Affordable,compact rides</p>
          </div>
          <h2 className=' text-2xl font-semibold'>₹{props.fare.car}</h2>
        </div>
        <div onClick={()=>{
          props.setConfirmedRide(true)
          props.selectVehicle('moto')
          }} className='mb-3 flex active:border-2 border-black rounded-xl w-full p-3  items-center justify-between '>
          <img className=' h-12 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="" />
          <div className='w-1/2'>
            <h4 className=' font-medium text-sm'>UberGO <span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className=' font-medium text-xs'>2 mins away</h5>
            <p className=' font-xl text-xs text-gray-600'>Affordable,compact rides</p>
          </div>
          <h2 className=' text-2xl font-semibold'>₹{props.fare.moto}</h2>
        </div>
        <div onClick={()=>{
          props.setConfirmedRide(true)
          props.selectVehicle('auto')
          }} className='mb-3 flex active:border-2 border-black rounded-xl w-full p-3  items-center justify-between '>
          <img className=' h-12 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='w-1/2'>
            <h4 className=' font-medium text-sm'>UberGO <span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className=' font-medium text-xs'>2 mins away</h5>
            <p className=' font-xl text-xs text-gray-600'>Affordable,compact rides</p>
          </div>
          <h2 className=' text-2xl font-semibold'>₹{props.fare.auto}</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
