import React from 'react'

const VehiclePanel = (props) => {
    function vehiclePanelArrowButtonHandler(){
        props.setVehiclePanel(false);
      }
    function clickHandler(){
        props.setConfirmRidePanel(true);
    }
  return (
    <div>
          <h5 className='p-2 absolute text-center w-[95%] top-0' onClick={vehiclePanelArrowButtonHandler}><i className="text-xl ri-arrow-down-wide-line"></i></h5>
          <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
          <div onClick={clickHandler} className='flex w-full mb-2 border-2 active:border-black border-gray-200 p-3 rounded-xl items-center justify-between'>
            <img className='h-12 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="" />
            <div className='w-1/2'>
              <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
              <h5 className='font-medium text-sm' >2 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹193.20</h2>
          </div>

          <div onClick={clickHandler} className='flex w-full mb-2 border-2 active:border-black border-gray-200 p-3 rounded-xl items-center justify-between'>
            <img className='h-12 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
            <div className='w-1/2'>
              <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-fill"></i>3</span></h4>
              <h5 className='font-medium text-sm' >5 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹118.90</h2>
          </div>

          <div onClick={clickHandler} className='flex w-full mb-2 border-2 active:border-black border-gray-200 p-3 rounded-xl items-center justify-between'>
            <img className='h-12 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="" />
            <div className='w-1/2'>
              <h4 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i>1</span></h4>
              <h5 className='font-medium text-sm' >3 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable Motorcycle rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹65.60</h2>
          </div>
    </div>
  )
}

export default VehiclePanel