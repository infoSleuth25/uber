import React from 'react'

const LocationSearchPanel = ({setPanelOpen,setVehiclePanel}) => {
  function clickHandler(){
    setVehiclePanel(true);
    setPanelOpen(false);
  }
  const locations = ['8, Laxminarayan Sunderdham, Mashrul, Nashik','A-2 Flat 504, Sai Kasturi, near water tank, Pune','1205, Vasant Park, near PCMC police station, Pune'];
  return (
    <div>
      {locations.map(function(element,index){
        return <div key={index} onClick={clickHandler} className='flex border-2 p-3 rounded-xl border-gray-50 active:border-black  gap-4 my-2 items-center justify-start'>
        <h2 className='bg-[#eee] h-8 w-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
        <h4 className='font-medium'>{element}</h4>
      </div>
      })}
      {/* This is just a sample data */}
      
    </div>
  )
}

export default LocationSearchPanel