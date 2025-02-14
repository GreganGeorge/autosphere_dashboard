import React, { useState } from 'react'
import Header from '../components/Header'
import RequestsTable from '../components/RequestsTable'

const MechanicRequests = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <RequestsTable title='mechanic'/>
    </div>
  )
}

export default MechanicRequests