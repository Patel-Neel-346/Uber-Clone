import React from 'react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
const Main = () => {
  const [pickUp, setPickUp] = React.useState('');
  const [destination, setDestination] = React.useState('');
  const [panelOpen, setPanelOpen] = React.useState(false);
  const panelRef = React.useRef(null);
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
  return (
    <div className='h-screen relative'>
      <img className=' w-16 absolute left-5 top-5  ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <div className=' h-screen w-screen'>
        {/* image for temporary  use */}
        <img className=' h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
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
            <LocationSearchPanel/>

        </div>
      </div>
    </div>
  )
}

export default Main
