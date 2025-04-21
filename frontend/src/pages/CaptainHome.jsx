import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';

const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const ridePopUpRef = useRef(null);
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const confirmRidePopUpRef = useRef(null);
 
  useGSAP(function(){
    if(ridePopUpPanel){
      gsap.to(ridePopUpRef.current,{
        transform : 'translateY(0)'
      })
    }
    else{
      gsap.to(ridePopUpRef.current,{
        transform : 'translateY(100%)'
      })
    }
  },[ridePopUpPanel])

  useGSAP(function(){
    if(confirmRidePopUpPanel){
      gsap.to(confirmRidePopUpRef.current,{
        transform : 'translateY(0)'
      })
    }
    else{
      gsap.to(confirmRidePopUpRef.current,{
        transform : 'translateY(100%)'
      })
    }
  },[confirmRidePopUpPanel])

  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="/uberdriver.png" alt="" />
        <Link to='/home' className='h-10  w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
        
        <div className='h-3/5'>
            <img
            src="/uberMap.png"
            alt="Uber Map"
            className="w-full h-full object-cover"
            />
        </div>
        <div className='h-2/5 p-6'>
         <CaptainDetails />
        </div>
        <div ref={ridePopUpRef}  className='fixed w-full z-10 translate-y-full  bottom-0 bg-white px-3 py-6 pt-12'>
          <RidePopUp setRidePopUpPanel = {setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
        </div>
        <div ref={confirmRidePopUpRef} className='fixed w-full h-screen z-10 translate-y-full  bottom-0 bg-white px-3 py-6 pt-12'>
          <ConfirmRidePopUp setRidePopUpPanel = {setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
        </div>
    </div>
  )
}

export default CaptainHome; 