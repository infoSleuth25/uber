import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const vehicleTypes = ["car", "motorcycle", "auto"];

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const navigate = useNavigate();

  const submitHandler = async(e) => {
    e.preventDefault();
    const captainData = {
      firstname : firstName,
      lastname : lastName,
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
    if(response.status === 201){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token',data.token);
      navigate('/captain-home');
    }

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  };

  return (
    <div className='py-4 px-6 flex flex-col h-screen justify-between'>
      <div>
        <img className='w-20 ' src='/uberdriver.png' alt='' />
        <form onSubmit={submitHandler}>
          <h3 className='text-base font-medium mb-2'>Enter your name Captain</h3>
          <div className='flex gap-4 mb-4'>
            <input
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base'
              required
              type='text'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder='First name'
            />
            <input
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base'
              required
              type='text'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder='Last name'
            />
          </div>

          <h3 className='text-base font-medium mb-2'>Enter your email Captain</h3>
          <input
            className='bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-base'
            required
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='email@example.com'
          />

          <h3 className='text-base font-medium mb-2'>Enter your password</h3>
          <input
            className='bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-base'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='password'
          />

          <h3 className='text-base font-medium mb-2'>Enter vehicle details</h3>
          <div className='flex gap-4 mb-2'>
            <input
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base'
              required
              type='text'
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              placeholder='Vehicle Color'
            />
            <input
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base'
              required
              type='text'
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              placeholder='Vehicle Plate Number'
            />
          </div>
          <div className='flex gap-4 mb-4'>
            <input
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base'
              required
              type='number'
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(Number(e.target.value))}
              placeholder='Vehicle Capacity'
            />
            <select
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base'
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value='' disabled>
                Select Vehicle Type
              </option>
              {vehicleTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg'>
            Register
          </button>

          <p className='text-center text-sm'>
            Already have an account? <Link to='/captain-login' className='text-blue-600'>Login here</Link>
          </p>
        </form>
      </div>
      <div>
        <p className='text-xs leading-tight'>
          This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and{' '}
          <span className='underline'>Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
