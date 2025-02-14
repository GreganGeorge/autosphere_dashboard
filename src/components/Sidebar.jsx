import React from 'react'
import { Link } from 'react-router-dom'
const sidebar_items=[
    {
        name:'Overview',path:'/overview'
    },
    {
        name:'Users',path:'/users'
    },
    {
        name:'Mechanics',path:'/mechanics'
    },
    {
        name:'Car Wash Servicers',path:'/carwashservicers'
    },
    {
        name:'Car Wash Servicer Requests',path:'/servicerrequests'
    },
    {
        name:'Messages',path:'/messages'
    },
    {
        name:'Sign Out',path:'/'
    }
]
const Sidebar = () => {
  return (
    <div className='h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700 w-60'>
        <nav className='mt-4 flex-grow'>
        <Link to='/overview'><h1 className="text-3xl font-bold mb-10 ml-6">Auto<span className='text-green-400'>Sphere</span><span> Admin</span></h1></Link>
            {sidebar_items.map((item,index)=>(
                <Link to={item.path}>
                    <div className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors'>
                        <span className='ml-4 w-full break-words whitespace-normal'>{item.name}</span>
                    </div>
                </Link>
            ))}
        </nav>
    </div>
  )
}

export default Sidebar