import React from 'react'
import Header from '../components/Header'
import RequestsTable from '../components/RequestsTable'
const ServicerRequests = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
    <Header title='Car Wash Servicer Requests'/>
    <RequestsTable title='car wash'/>
  </div>
  )
}

export default ServicerRequests