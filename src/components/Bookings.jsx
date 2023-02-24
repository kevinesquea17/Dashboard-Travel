import React from 'react'
import ListBooking from './ListBooking'

const Bookings = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex justify-between items-center mb-4'>
            <h3 className='font-bold text-white text-lg'>Bookings</h3>
            <span className='text-primary text-sm'>View All</span>
        </div>
        <ListBooking />
    </div>
  )
}

export default Bookings