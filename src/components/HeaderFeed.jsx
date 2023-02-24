import React from 'react'
import {BsBell} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'

const HeaderFeed = () => {
  return (
    <div className='flex items-center mb-8'>
        <div className='flex flex-1 items-center space-x-4 mr-4'>
            <div className='py-4 px-6 rounded-xl bg-secondary  flex-1 flex space-x-4 items-center'>
                <AiOutlineSearch className='text-gray-400 text-lg'/>
                <input type="text" placeholder='Search your favorite destination' className='bg-transparent focus:outline-none flex-1'/>
            </div>
            <button className='px-6 py-3 bg-primary rounded-xl text-white'>Search</button>
        </div>
        <div className='p-4 bg-secondary rounded-full relative'>
            <BsBell className='text-white text-lg'/>
            <div className='w-2 h-2 rounded-full bg-primary absolute top-0 right-1'></div>
        </div>
    </div>
  )
}

export default HeaderFeed
