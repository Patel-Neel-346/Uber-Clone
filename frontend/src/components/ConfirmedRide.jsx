import React from 'react'

const ConfirmedRide = (props) => {
  return (
    <div>
    <h5 className='p-4 text-center absolute top-0 right-[3.5%] text-2xl' onClick={() => {
        props.setConfirmedRide(false)
    }}><i className="ri-arrow-down-wide-line"></i></h5>
    <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

    <div className='flex gap-2 justify-between flex-col items-center'>
        <img className='h-20' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
        <div className='w-full mt-5'>
            <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
                <i className="ri-map-pin-user-fill"></i>
                <div>
                    <h3 className='text-lg font-medium'>562/11-A</h3>
                    {/* <p className='text-sm -mt-1 text-gray-600'>{props.pickup}</p> */}
                    <p className='text-sm -mt-1 text-gray-600'>{props.pickUp} </p>

                </div>
            </div>
            <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
                <i className="text-lg ri-map-pin-2-fill"></i>
                <div>
                    <h3 className='text-lg font-medium'>562/11-A</h3>
                    {/* <p className='text-sm -mt-1 text-gray-600'>{props.destination}</p> */}
                    <p className='text-sm -mt-1 text-gray-600'>{props.destination}</p>

                </div>
            </div>
            <div className='flex items-center gap-5 p-3 '>
                <i className="ri-currency-line"></i>
                <div>
                    {/* <h3 className='text-lg font-medium'>₹{props.fare[ props.vehicleType ]}</h3> */}
                    <h3 className='text-lg font-medium'>₹{props.fare[props.vehicleType]}</h3>

                    <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                </div>
            </div>
        </div>
        <button onClick={() => {
            // props.setVehicleFound(true)
            // props.setConfirmRidePanel(false)
            // props.createRide()
            props.setConfirmedRide(false)
            props.setLookingForRider(true)
            props.CreateRide()
        }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
    </div>
</div>
  )
}

export default ConfirmedRide
