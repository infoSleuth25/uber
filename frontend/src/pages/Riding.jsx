import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    function buttonClickHandler(){

    }
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed h-10 right-2 top-2 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="text-lg font-medium ri-home-4-fill"></i>
        </Link>
        <div className='h-1/2'>
            <img
            src="/uberMap.png"
            alt="Uber Map"
            className="w-full h-full object-cover"
            />
        </div>
        <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between'>
        <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="" />
        <div className='text-right'>
          <h2 className='text-lg font-medium'>Sarthak</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 9981</h4>
          <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
        </div>
        </div>
          <div className='flex gap-2 flex-col justify-between items-center'>
            <div className='w-full mt-5'>
                <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
                    <i className="text-lg ri-map-pin-user-fill"></i>
                    <div >
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Kankaria Talab, Nashik</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3'>
                    <i className="text-lg ri-currency-line"></i>
                    <div >
                        <h3 className='text-lg font-medium'>₹ 193.20</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Cash</p>
                    </div>
                </div>
            </div>
          </div>
          <button onClick={buttonClickHandler} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>

        </div>
    </div>
  )
}

export default Riding