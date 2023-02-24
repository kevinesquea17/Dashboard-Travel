import React from 'react'
import Madrid from '../assets/madrid.jpg'
import {FcCalendar} from 'react-icons/fc'

const BookingSmall = () => {
  return (
    <div className='flex p-[6px] bg-secondary shadow-sm rounded-lg items-center'>
        <img src={Madrid} alt=""  className='w-20 h-16 rounded-xl object-cover mr-4'/>
        <div className='flex flex-col'>
            <p className='text-gray-100 text-lg font-semibold mb-2'>Madrid</p>
            <div className='flex space-x-2 items-center'>
                <FcCalendar/>
                <span className='text-gray-400 text-sm'>20 Ene - 24 Ene</span>
            </div>
        </div>
    </div>
  )
}

export default BookingSmall
