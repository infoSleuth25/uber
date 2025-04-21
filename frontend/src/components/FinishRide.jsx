import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
    function wideArrowHandler(){
        props.setFinishRidePanel(false);
    }
  return (
    <div>
            <h5 onClick={wideArrowHandler} className='p-2 absolute text-center w-[95%] top-0'><i className="text-xl ri-arrow-down-wide-line"></i></h5>
          <h3 className='text-2xl font-semibold mb-5'>Finish this ride</h3>
          <div className='flex items-center justify-between p-3 mt-4 rounded-lg bg-yellow-300'>
            <div className='flex items-center gap-3 '>
                <img className='h-10 w-10 rounded-full object-cover' src="https://images.unsplash.com/photo-1463453091185-61582044d556?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <h2 className='text-lg font-medium'>Harsh Patil</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.2 KM</h5>
          </div>

          <div className='flex gap-2 flex-col justify-between items-center'>
            <div className='w-full mt-5'>
                <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
                    <i className="text-lg ri-map-pin-2-fill"></i>
                    <div >
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Kankaria Talab, Nashik</p>
                    </div>
                </div>
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
            <div className='w-full mt-6'>
                <Link to='/captain-home' className='w-full mt-5 flex  justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Finish Ride</Link>
                <p className='mt-4 text-xs leading-tight'>Click on the finish ride button if you have completed the payment.</p>
            </div>
          </div>
    </div>
  )
}

export default FinishRide