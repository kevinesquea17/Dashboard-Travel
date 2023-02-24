import React, {useState} from 'react'
import 'react-calendar/dist/Calendar.css';
import '../App.css'
import Person03 from '../assets/person-03.jpg'
import {BsChevronDown} from 'react-icons/bs'
import Calendar from 'react-calendar';
import Bookings from './Bookings'


const RightBar = () => {

    const [value, onChange] = useState(new Date())

    return (
        <div className='w-[22%] fixed right-0 top-0 h-screen pl-3 pr-5 py-6 pb-4 font-Montserrat bg-white bg-opacity-10 z-10'>
            <div className='flex space-x-3 items-center mb-8'>
                <img src={Person03} alt="" className='w-12 h-12 rounded-full object-cover border-2 border-white'/>
                <div className='flex space-x-6 items-center'>
                    <p className='text-white text-base font-semibold mt-2'>Aida Ab</p>
                    <BsChevronDown  className='text-white mt-2'/>
                </div>
            </div>
            <Calendar onChange={onChange} value={value} />
            <Bookings />
        </div>
    )
}

export default RightBar