import React from 'react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
const Main = () => {
  const [pickUp, setPickUp] = React.useState('');
  const [destination, setDestination] = React.useState('');
  const [panelOpen, setPanelOpen] = React.useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = React.useState(false);
  const panelRef = React.useRef(null);
  const vechiclePanelRef = React.useRef(null);

  const sumbitHandler = (e) => {
    e.preventDefault();
  }
  
  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, { height:'70%',opacity:1 })
    } else {
       gsap.to(panelRef.current, { height: '0%',opacity:0 })
    }
  },[panelOpen])

  useGSAP(function () {
    if (vehiclePanelOpen) {
      gsap.to(vechiclePanelRef.current, { translateY: '0%' })
    } else {
      gsap.to(vechiclePanelRef.current, { translateY: '100%' })
    }
  },[vehiclePanelOpen])
  return (
    <div className='h-screen relative overflow-hidden'>
      <img className=' w-16 absolute left-5 top-5  ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <div  className=' h-screen w-screen'>
        {/* image for temporary  use */}
        <img  className=' h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='flex flex-col justify-end  h-screen absolute bottom-0 w-full '>
        <div className='h-[30%] bg-white p-5  relative'>
          <h5 onClick={()=>setPanelOpen(false)}  className=' absolute right-6 top-6 text-2xl cursor-pointer'><i  class="ri-arrow-down-wide-line"></i></h5>
          <h4 className='text-2xl font-semibold '>Find a trip</h4>
          <form onSubmit={(e) => sumbitHandler(e)} className='flex flex-col'>
            <div className=' line absolute h-15 top-[47%] rounded-full bg-gray-900  left-9 w-1 '></div>
            <input className=' bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" name="" placeholder='Add a pick up location' value={pickUp} onChange={(e) => setPickUp(e.target.value)} onClick={() => setPanelOpen(true)} id="" />
            <input className=' bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" name="" placeholder='Add your destination' id="" value={destination} onChange={(e) => setDestination(e.target.value)} onClick={() => setPanelOpen(true)} />
          </form>
        </div>
        <div ref={panelRef} className='h-0 bg-white '>
            <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen}/>

        </div>
      </div>
      <div ref={vechiclePanelRef} className=' fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 '>
        <h5 className=' p-4 text-center absolute top-0 right-[3.5%] text-2xl' onClick={()=>{setVehiclePanelOpen(false)}}><i className="ri-arrow-down-wide-line"></i></h5>
        <h3 className=' text-2xl font-semibold mb-3 '>Choose a Vehicle</h3>
        <div className=' mb-3 flex active:border-2 border-black rounded-xl w-full p-3  items-center justify-between '>
          <img className=' h-12 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1568134115/assets/6d/354919-18b0-45d0-a151-501ab4c4b114/original/XL.png" alt="" />
          <div className='w-1/2'>
            <h4 className=' font-medium text-sm'>UberGO <span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className=' font-medium text-xs'>2 mins away</h5>
            <p className=' font-xl text-xs text-gray-600'>Affordable,compact rides</p>
          </div>
          <h2 className=' text-2xl font-semibold'>$20</h2>
        </div>
        <div className='mb-3 flex active:border-2 border-black rounded-xl w-full p-3  items-center justify-between '>
          <img className=' h-12 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="" />
          <div className='w-1/2'>
            <h4 className=' font-medium text-sm'>UberGO <span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className=' font-medium text-xs'>2 mins away</h5>
            <p className=' font-xl text-xs text-gray-600'>Affordable,compact rides</p>
          </div>
          <h2 className=' text-2xl font-semibold'>$20</h2>
        </div>
        <div className='mb-3 flex active:border-2 border-black rounded-xl w-full p-3  items-center justify-between '>
          <img className=' h-12 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='w-1/2'>
            <h4 className=' font-medium text-sm'>UberGO <span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className=' font-medium text-xs'>2 mins away</h5>
            <p className=' font-xl text-xs text-gray-600'>Affordable,compact rides</p>
          </div>
          <h2 className=' text-2xl font-semibold'>$20</h2>
        </div>
      </div>
    </div>
  )
}

export default Main
