import React from 'react'
import Thailand from '../assets/thailand.jpg'
import {ImLocation} from 'react-icons/im'
import {BsBookmarkFill} from 'react-icons/bs'

const BookingMedium = () => {
  return (
    <div className='flex flex-col p-2 pb-4 bg-secondary rounded-lg shadow-sm relative'>
        <img src={Thailand} alt="" className='rounded-lg mb-2 h-36 w-full object-cover' />
        <p className='text-white font-semibold text-sm mb-2'>Phi Phi Islands.</p>
        <div className='flex justify-between items-center'>
            <div className='flex items-center space-x-2'>
                <ImLocation className='text-primary text-sm'/>
                <p className='text-gray-400 text-sm'>Thailand</p>
            </div>
            <p className='text-[#5eaef0] text-xs font-semibold'>$1.480</p>
        </div>
        <div className='w-10 h-10 flex items-center justify-center rounded-full bg-primary absolute right-4 bottom-12'>
            <BsBookmarkFill className='text-white' />
        </div>
    </div>
  )
}

export default BookingMedium
