import React from 'react'
import Header from '../components/Header'
import RequestsTable from '../components/RequestsTable'

const CarWashServicers = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
        <Header title='Car Wash Servicers'/>
        <RequestsTable title='carwash'/>
    </div>
  )
}

export default CarWashServicers