import React from 'react'


const RidePopUp = (props) => {
    function ignoreButtonHandler(){
        props.setRidePopUpPanel(false);
    }

    function confirmButtonHandler(){
        props.setConfirmRidePopUpPanel(true);
    }
  return (
    <div >
        <h5 className='p-2 absolute text-center w-[95%] top-0' ><i className="text-xl ri-git-commit-line"></i></h5>
          <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>
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
            <div className='flex w-full items-center justify-evenly mt-5'>
            <button onClick={ignoreButtonHandler}  className=' bg-gray-300 text-gray-700 px-10 font-semibold p-3 rounded-lg'>Ignore</button>
            <button onClick={confirmButtonHandler}  className='  px-10 bg-green-600 text-white font-semibold p-3 rounded-lg'>Accept</button>
            
            </div>
          </div>
    </div>
  )
}

export default RidePopUp