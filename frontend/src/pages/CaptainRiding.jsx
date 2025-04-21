import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { set } from 'mongoose';

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);
  useGSAP(function(){
    if(finishRidePanel){
      gsap.to(finishRidePanelRef.current,{
        transform : 'translateY(0)'
      })
    }
    else{
      gsap.to(finishRidePanelRef.current,{
        transform : 'translateY(100%)'
      })
    }
  },[finishRidePanel])

  function buttonClickHandler(){
    setFinishRidePanel(true);
  }
  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="/uberdriver.png" alt="" />
        <Link to='/home' className='h-10  w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
        
        <div className='h-4/5'>
            <img
            src="/uberMap.png"
            alt="Uber Map"
            className="w-full h-full object-cover"
            />
        </div>
        <div onClick={buttonClickHandler} className='h-1/5 p-6 flex items-center relative justify-between'>
        <h5 className='p-1 text-center absolute w-[88%] top-0 '>
          <i className="text-3xl ri-arrow-up-wide-line"></i>
          </h5>
          <h4 className='text-xl font-semibold'>4 KM away</h4>
          <button  className=' px-10 bg-green-600 text-white font-semibold p-3 rounded-lg'>Completed Ride</button>
        </div>
        <div ref={finishRidePanelRef} className='fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-6 pt-12'>
          <FinishRide setFinishRidePanel={setFinishRidePanel} />
        </div>
    </div>
  )
}

export default CaptainRiding