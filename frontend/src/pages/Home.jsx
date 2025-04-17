import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vechiclePanel, setVehiclePanel] = useState('');
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
          <LocationSearchPanel vechiclePanel={vechiclePanel} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>
      <div className='fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-8'>
          <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
          <div className='flex w-full mb-2 border-2 border-gray-500 bg-gray-100 p-3 rounded-xl items-center justify-between'>
            <img className='h-12 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="" />
            <div className='w-1/2'>
              <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
              <h5 className='font-medium text-sm' >2 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹193.20</h2>
          </div>

          <div className='flex w-full mb-2 border-2 border-gray-500 bg-gray-100 p-3 rounded-xl items-center justify-between'>
            <img className='h-12 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
            <div className='w-1/2'>
              <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-fill"></i>3</span></h4>
              <h5 className='font-medium text-sm' >5 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹118.90</h2>
          </div>

          <div className='flex w-full mb-2 border-2 border-gray-500 bg-gray-100 p-3 rounded-xl items-center justify-between'>
            <img className='h-12 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="" />
            <div className='w-1/2'>
              <h4 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i>1</span></h4>
              <h5 className='font-medium text-sm' >3 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable Motorcycle rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹65.60</h2>
          </div>

          
      </div>
    </div>
  )
}  

export default Home