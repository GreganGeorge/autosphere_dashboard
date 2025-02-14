import React,{useEffect,useState} from 'react'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import {Search} from 'lucide-react'

const MechanicBookings = () => {
    const [search,setSearch]=useState("");
    const [filteredRequests,setFilteredRequests]=useState([]);
    const [requests,setRequests]=useState([]);
    const handleChange=(e)=>{
        const term=e.target.value.toLowerCase();
        setSearch(term);
        const filtered=requests.filter(request=>request.mechanic_name.toLowerCase().includes(term));
        setFilteredRequests(filtered);
    }
    const getData = async () => {
        const url = `http://localhost:5059/api/AdminUser/Get5`;
        try {
        const response = await fetch(url);
        const data = await response.json();
        setFilteredRequests(data);
        setRequests(data);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };
    useEffect(()=>{
        getData();
    },[])
  return (
    <div className='flex-1 overflow-auto relative z-10'>
        <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg 
        rounded-xl p-6 border border-gray-700 mb-8' initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}}>
        <div className='flex justify-between items-center mb-6'>
          <div className='relative'>
            <input type='text' onChange={handleChange} value={search} placeholder='Search Mechanic...' className='bg-gray-700 text-white placeholder-gray-400
            rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
            <Search className='absolute left-3 top-2.5 text-gray-400' size={18}/>
          </div>
        </div>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-700'>
            <thead>
              <tr>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider'>Mechanic Name</th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider'>Mechanic Place</th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider'>User Name</th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider'>User Place</th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider'>Date</th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider'>Time</th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider'>Booking Fee</th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider'>Status</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-700'>
              {filteredRequests.map((booking)=>(
                <motion.tr initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}}>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                    {booking.mechanic_name}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                    {booking.place}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                    {booking.username}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                    {booking.user_place}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                    {new Date(booking.date).toLocaleDateString("en-GB")} 
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                    {booking.time}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                    {booking.fee}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                    {booking.status}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}

export default MechanicBookings