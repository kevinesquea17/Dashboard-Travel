import React from 'react'
import Roma from '../assets/roma.jpg'
import {FaLeaf, FaLocationArrow} from 'react-icons/fa'
import {BsMapFill} from 'react-icons/bs'

const Offer = () => {
  return (
    <div className='flex flex-col p-2 pb-4 bg-secondary rounded-lg'>
        <img src={Roma} alt="" className='h-28 w-full object-cover rounded-xl mb-4'/>
        <p className='text-base font-semibold text-white mb-2'>Trip To Italy</p>
        <p className='text-primary text-sm font-semibold mb-2'>14 -29 Enero</p>
        <div className='flex space-x-2 items-center'>
            <div className='flex justify-center items-center w-8 h-8 rounded-full bg-[#626262] opacity-80'>
                <FaLeaf className='text-white text-sm'/>
            </div>
            <div className='flex justify-center items-center w-8 h-8 rounded-full bg-[#626262] opacity-80'>
                <BsMapFill className='text-white text-sm' />
            </div>
            <div className='flex justify-center items-center w-8 h-8 rounded-full bg-[#626262] opacity-80'>
                <FaLocationArrow className='text-white text-sm' />
            </div>
        </div>
    </div>
  )
}

export default Offer
