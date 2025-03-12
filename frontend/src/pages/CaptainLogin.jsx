import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainLogin = () => {
  const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const navigate = useNavigate();
    const submitHandler = async(e)=>{
        e.preventDefault();
        const captainData = {
            email : email,
            password : password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData);
        if(response.status === 200){
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token',data.token);
        navigate('/captain-home');
        }
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