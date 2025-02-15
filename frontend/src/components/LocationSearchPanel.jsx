import React from 'react'

const LocationSearchPanel = (props) => {
  //sample location
  const locations = [
    "24A,Near Kapor's cafe,Sheryins coding school,Bhopal",
    "24B,Near Kapor's cafe,Sheryins coding school,Bhopal",
    "24C,Near Kapor's cafe,Sheryins coding school,Bhopal",
  ]
  return (
    <div>
      {
        locations.map(function (e) {
          return <div onClick={()=>
            {props.setVehiclePanelOpen(true) 
            props.setPanelOpen(false)}} className='active:border-2 cursor-pointer flex gap-4 p-4 items-center justify-start'>
            <h2 className=' bg-[#eee] h-10 w-12 flex items-center justify-center rounded-full '><i className="ri-map-pin-fill"></i></h2>
            <h4>{e}</h4>
          </div>
        })
      }
      {/* this is just sample data */}


    </div>
  )
}

export default LocationSearchPanel
