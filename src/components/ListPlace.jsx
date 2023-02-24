import React from 'react'
import BookingMedium from './BookingMedium'

const ListPlace = () => {
  return (
    <div className='grid grid-cols-3 gap-4 mb-8'>
      <BookingMedium />
      <BookingMedium />
      <BookingMedium />
    </div>
  )
}

export default ListPlace
