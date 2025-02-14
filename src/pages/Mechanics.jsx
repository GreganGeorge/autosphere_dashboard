import React, { useState } from 'react'
import Header from '../components/Header'
import RequestsTable from '../components/RequestsTable'
import MechanicBookings from './MechanicBookings';
import MechanicRating from './MechanicRating';
import MechanicRequests from './MechanicRequests';

const Mechanics = () => {
  const [tab,setTab]=useState('verified');
  return (
    <div className='flex-1 overflow-auto relative z-10'>
        {tab==='verified' && <Header title='Mechanics'/>}
        {tab==='requests' && <Header title='Mechanic Requests'/>}
        {tab==='bookings' && <Header title='Mechanic Bookings'/>}
        {tab==='ratings' && <Header title='Mechanic Ratings'/>}
        <button onClick={()=>setTab('verified')} className={`${tab==='verified'&&'bg-blue-800 text-white'} p-2 mx-4 my-4 px-5  rounded-md text-white font-semibold text-[16px] leading-7
          border border-solid border-blue-800`}>Verified</button>
        <button onClick={()=>setTab('requests')} className={`${tab==='requests'&&'bg-blue-800 text-white'} p-2 mr-4 my-4 px-5  rounded-md text-white font-semibold text-[16px] leading-7
          border border-solid border-blue-800`}>Requests</button>
        <button onClick={()=>setTab('bookings')} className={`${tab==='bookings'&&'bg-blue-800 text-white'} p-2 mr-4 my-4 px-5  rounded-md text-white font-semibold text-[16px] leading-7
          border border-solid border-blue-800`}>Bookings</button>
        <button onClick={()=>setTab('ratings')} className={`${tab==='ratings'&&'bg-blue-800 text-white'} p-2 mr-4 my-4 px-5  rounded-md text-white font-semibold text-[16px] leading-7
          border border-solid border-blue-800`}>Ratings</button>
        {tab==='verified' && <RequestsTable title='Mechanics'/>}
        {tab==='requests' && <MechanicRequests/>}
        {tab==='bookings' && <MechanicBookings/>}
        {tab==='ratings' && <MechanicRating/>}
    </div>
  )
}

export default Mechanics