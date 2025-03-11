import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='bg-[url("/homeimage.jpeg")] bg-center bg-cover h-screen pt-8 flex justify-between flex-col w-full'>
            <img className='w-16 ml-8' src="https://freelogopng.com/images/all_img/1659768779uber-logo-white.png" alt="" />
            <div className='bg-white pb-7 py-5 px-4'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start;