import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const UserLogin = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const {user,setUser} = React.useContext(UserDataContext);
    const submitHandler = async(e)=>{
        e.preventDefault();
        const userData = {
            email : email,
            password : password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData);
        if(response.status === 200){
            const data = response.data;
            setUser(data.user);
            localStorage.setItem('token',data.token);
            navigate('/home');
        }
        setEmail('');
        setPassword('');
    }
    return (
        <div className='p-7 flex flex-col h-screen justify-between '>
            <div>
                <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
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

                    <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
                </form>
            </div>
            <div>
                <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
            </div> 
        </div>
  )
}

export default UserLogin