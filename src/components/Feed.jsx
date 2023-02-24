import React, { useState } from 'react'
import HeaderFeed from './HeaderFeed'
import ListPlace from './ListPlace'
import ListOffers from './ListOffers'

const options = [
  {id: 0, name: 'Most Popular'},
  {id: 1, name: 'Special Offers'},
  {id: 2, name: 'Near me'}
]

const Feed = () => {

  const [activeOption, setActiveOption] = useState(0);

  return (
    <div className='w-[60%] relative top-0 left-[18%] py-6 px-6 font-Montserrat flex flex-col overflow-hidden'>
      <HeaderFeed />
      <div className='ml-2 mb-8'>
        <h2 className='text-2xl font-semibold text-white mb-1'>Hello Aida!</h2>
        <p className='text-gray-400'>Welcome back and explore the world.</p>
      </div>
      <ListPlace />
      <div className='flex flex-col'>
        <div className='flex space-x-10 items-center mb-8'>
          {options.map(option => (
            <p key={option.id} onClick={() => setActiveOption(option.id)} className={`${activeOption === option.id ? 'text-primary font-bold' : 'text-white'} text-lg`}>{option.name}</p>
          ))} 
        </div>
        <ListOffers />
      </div>
    </div>
  )
}

export default Feed