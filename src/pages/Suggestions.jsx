import React, { useState,useEffect } from 'react'
import Header from '../components/Header'
import { motion } from 'framer-motion';

const Suggestions = () => {
    const [data,setData]=useState([]);
    const getData = async () => {
        const url = `http://localhost:5059/api/Suggestion`;
        try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
      };
    useEffect(()=>{
        getData();
    },[])
  return (
    <div className='flex-1 overflow-auto relative z-10'>
        <Header title='Messages'/>
        <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg 
        rounded-xl p-6 border border-gray-700 mb-8' initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}}>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-700'>
            <thead>
              <tr>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider'>Name</th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider'>Email</th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider'>Message</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-700'>
              {data.map((message)=>(
                <motion.tr initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}}>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                    {message.username}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                    {message.email}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                    {message.suggestion}
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

export default Suggestions