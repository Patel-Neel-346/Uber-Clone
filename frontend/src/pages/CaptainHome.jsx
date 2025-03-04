import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePop from '../components/RidePop'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePop from '../components/ConfirmRidePop'
import { CaptainDataContext } from '../context/CaptainContext'
import { SocketContext } from '../context/SocketContext'
const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = React.useState(false)
  const [ConfirmridePopupPanel, setConfirmRidePopupPanel] = React.useState(false)

  const [ride,setRide]=React.useState(null)

  const ConfirmridePopupPanelRef = React.useRef(null)
  const ridePopupPanelRef = React.useRef(null)

  const {captain}=useContext(CaptainDataContext)
  const {socket}=useContext(SocketContext)

  useEffect(()=>{
    socket.emit('join',{
      userType:'captain',userId:captain._id
    })


    const updateLocation=()=>{
      console.log('Location Update')
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
          socket.emit('update-location-captain',{
            userId:captain._id,
            location:{
              ltd:position.coords.latitude,
              lng:position.coords.longitude
            }
          })
        })
      }
    }

    setInterval(updateLocation, 10000);
    // updateLocation()

  },[])

  socket.on('new-ride',(data)=>{
    console.log(data)
    setRide(data)
    setRidePopupPanel(true)
  })

  useGSAP(function () {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, { translateY: '0%' })
    } else {
      gsap.to(ridePopupPanelRef.current, { translateY: '100%' })
    }
  }, [ridePopupPanel])

  useGSAP(function () {
    if (ConfirmridePopupPanel) {
      gsap.to(ConfirmridePopupPanelRef.current, { translateY: '0%' })
    } else {
      gsap.to(ConfirmridePopupPanelRef.current, { translateY: '100%' })
    }
  }, [ConfirmridePopupPanel])
  return (
    <div className='h-screen'>
      <div className=' fixed p-3 top-0 flex items-center justify-between w-screen bg-white'>
        <img className=' w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
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
      <div ref={ridePopupPanelRef} className=' fixed w-full z-10  bottom-0 bg-white p-3 '>
        <RidePop 
            ride={ride}
            setRidePopupPanel={setRidePopupPanel} 
            setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
      </div>
        <div ref={ConfirmridePopupPanelRef} className=' fixed w-full z-10  bottom-0 bg-white p-3 '>
        <ConfirmRidePop setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
      </div>
    </div>
  )
}

export default CaptainHome
