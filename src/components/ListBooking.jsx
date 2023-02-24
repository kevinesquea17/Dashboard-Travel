import React from 'react'
import BookingSmall from './BookingSmall'

const ListBooking = () => {
  return (
    <div className='flex flex-col gap-4'>
        <BookingSmall />
        <BookingSmall />
    </div>
  )
}

export default ListBooking
