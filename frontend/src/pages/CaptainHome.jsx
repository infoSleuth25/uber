import React from 'react'
import { Link } from 'react-router-dom';

const CaptainHome = () => {

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
          <div className='flex items-center justify-between' >
            <div className='flex items-center justify-start gap-4'>
              <img className='h-10 w-10 rounded-full object-cover' src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="" />
              <h4 className='text-lg font-medium'>Siddhesh Borse</h4>
            </div>
            <div>
              <h4 className='text-xl font-semibold'>₹ 295.20</h4>
              <p className='text-sm text-gray-600'>Earned</p>
            </div>
          </div>
          <div  className='flex p-3 bg-orange-100 mt-6 rounded-xl justify-center gap-4 items-start'>
            <div className='text-center'>
              <i className="text-3xl mb-2 font-thin  ri-timer-2-line"></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
              <i className="text-3xl mb-2 font-thin  ri-speed-up-line"></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
              <i className="text-3xl mb-2 font-thin  ri-booklet-line"></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p> 
            </div>
          </div>
        </div>
    </div>
  )
}

export default CaptainHome; 