import React from 'react'
import Offer from './Offer'

const ListOffers = () => {
  return (
    <div className='grid grid-cols-3 gap-4'>
        <Offer />
        <Offer />
        <Offer />
    </div>
  )
}

export default ListOffers
