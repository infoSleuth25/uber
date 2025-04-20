import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel,setConfirmRidePanel ] = useState(false);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const [vehicleFound, setVehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null);
  const WaitingForDriverRef = useRef(null);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height : '70%',
        padding : 25
      })
      gsap.to(panelCloseRef.current,{
        opacity : 1
      })
    }
    else{
      gsap.to(panelRef.current,{
        height : '0%',
        padding : 0
      })
      gsap.to(panelCloseRef.current,{
        opacity : 0
      })
    }
  },[panelOpen])

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform : 'translateY(0)'
      })
    }
    else{
      gsap.to(vehiclePanelRef.current,{
        transform : 'translateY(100%)'
      })
    }
  },[vehiclePanel])

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform : 'translateY(0)'
      })
    }
    else{
      gsap.to(vehicleFoundRef.current,{
        transform : 'translateY(100%)'
      })
    }
  },[vehicleFound])

  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
        transform : 'translateY(0)'
      })
    }
    else{
      gsap.to(confirmRidePanelRef.current,{
        transform : 'translateY(100%)'
      })
    }
  },[confirmRidePanel])

  useGSAP(function(){
    if(waitingForDriver){
      gsap.to(WaitingForDriverRef.current,{
        transform : 'translateY(0)'
      })
    }
    else{
      gsap.to(WaitingForDriverRef.current,{
        transform : 'translateY(100%)'
      })
    }
  },[waitingForDriver])

  function submitHandler(e){
    e.preventDefault();
  }
  function pickupHandler(e){
    setPickup(e.target.value);
  }
  function destinationHandler(e){
    setDestination(e.target.value);
  }
  function onClickHandler(e){
    setPanelOpen(true)
  }
  function arrowHandler(){
    setPanelOpen(false);
  }



  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='h-screen w-screen'>
      <img
          src="/uberMap.png"
          alt="Uber Map"
          className="w-full h-full object-cover"
        />
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] bg-white p-6 relative'>
          <h5 ref={panelCloseRef} onClick={arrowHandler} className='absolute top-6 right-6 text-2xl opacity-0'>
          <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e)=>{
            submitHandler(e);
          }}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input onClick={onClickHandler} onChange={pickupHandler} value={pickup} className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5 mb-3' type="text" placeholder='Add a pick-up location' />
            <input onClick={onClickHandler} onChange={destinationHandler} value={destination} className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full' type="text" placeholder='Enter your destination' />
          </form>
        </div>
        <div ref={panelRef} className='h-0  bg-white '>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-10 pt-12'>
          <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>

      <div ref={confirmRidePanelRef} className='fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-6 pt-12'>
          <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} setVehiclePanel={setVehiclePanel} />
      </div>

      <div  ref={vehicleFoundRef} className='fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-6 pt-12'>
         <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>

      <div ref={WaitingForDriverRef} className='fixed w-full z-10   bottom-0 bg-white px-3 py-6 pt-12'>
         <WaitingForDriver setWaitingForDriver= {setWaitingForDriver} />
      </div>
    </div>
  )
}  

export default Home