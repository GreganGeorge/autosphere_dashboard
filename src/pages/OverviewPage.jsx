import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import Card from '../components/Card'
import { Users, Zap } from 'lucide-react'

const OverviewPage = () => {
  const [userCount,setUserCount]=useState([]);
  const [mechanicCount,setMechanicCount]=useState([]);
  const [carWashCount,setCarWashCount]=useState([]);
  const count=async()=>{
    const url = `http://localhost:5059/api/AdminUser/Get7`;
    try {
    const response = await fetch(url);
    const data = await response.json();
    setUserCount(data);
    } catch (error) {
    console.error('Error fetching data:', error);
    }
    const url1 = `http://localhost:5059/api/AdminUser/Get8`;
    try {
    const response = await fetch(url1);
    const data = await response.json();
    setMechanicCount(data);
    } catch (error) {
    console.error('Error fetching data:', error);
    }
    const url2 = `http://localhost:5059/api/AdminUser/Get9`;
    try {
    const response = await fetch(url2);
    const data = await response.json();
    setCarWashCount(data);
    } catch (error) {
    console.error('Error fetching data:', error);
    }
  }
  useEffect(()=>{
    count();
  },[]);
  return (
    <div className='flex-1 overflow-auto relative z-10'>
        <Header title='Overview'/>
        <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
            <motion.div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:1}}>
                <Card name="Total Revenue" icon={Zap} value='₹0' color='#6366F1'/>
                <Card name="Total Users" icon={Users} value={userCount[0]?.user_number} color='#8B5CF6'/>
                <Card name="Total Mechanics" icon={Users} value={mechanicCount[0]?.mechanic_number} color='#EC4899'/>
                <Card name="Total Car Wash Servicers" icon={Users} value={carWashCount[0]?.carwash_number} color='#10B981'/>
            </motion.div>
        </main>
    </div>
  )
}

export default OverviewPage