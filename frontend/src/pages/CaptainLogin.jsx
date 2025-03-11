import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
  const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [captainData,setCaptainData] = useState({});
    const submitHandler = (e)=>{
        e.preventDefault();
        setCaptainData({
            email : email,
            password : password
        })
        console.log(captainData);
        setEmail('');
        setPassword('');
    }
  return (
    <div className='p-7 flex flex-col h-screen justify-between '>
            <div>
                <img className='w-18 mb-10' src="/uberdriver.png" alt="" />
                <form onSubmit={(e)=>{
                    submitHandler(e);
                }}>
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    
                    <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
                    value = {email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    required 
                    type="email" 
                    placeholder='email@example.com' 
                    />
                    
                    <h3 className='text-lg font-medium mb-2'>Enter your password</h3>
                    <input 
                    className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
                    value = {password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    type="password" 
                    required 
                    placeholder='password' 
                    />

                    
                    <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>

                    <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
                </form>
            </div>
            <div>
                <Link to='/login' className='bg-[#d5662d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as User</Link>
            </div> 
        </div>
  )
}

export default CaptainLogin