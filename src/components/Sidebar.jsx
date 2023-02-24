import React, { useState } from 'react'
import {RxDashboard} from 'react-icons/rx'
import {FaTicketAlt} from 'react-icons/fa'
import {BiBookmarkHeart} from 'react-icons/bi'
import {MdOutlineEmail} from 'react-icons/md'
import {CiWallet} from 'react-icons/ci'
import {FiSettings} from 'react-icons/fi'
import {BsArrowRight} from 'react-icons/bs'

const menu = [
  {id: 0, name: 'Dashboard', icon: <RxDashboard className='text-xl'/>},
  {id: 1, name: 'My Tickets', icon: <FaTicketAlt className='text-xl' />},
  {id: 2, name: 'Favorites', icon: <BiBookmarkHeart className='text-xl' />},
  {id: 3, name: 'Messages', icon: <MdOutlineEmail className='text-xl' />},
  {id: 4, name: 'Transaction', icon: <CiWallet className='text-xl' />},
  {id: 5, name: 'Settings', icon: <FiSettings className='text-xl' />}
]

const Sidebar = () => {

  const [menuActive, setMenuActive] = useState(0)

  return (
    <div className='fixed top-0 left-0 h-screen w-[18%] bg-white bg-opacity-5 overflow-hidden px-4 pt-6 py-4 font-Montserrat'>
       <div className='absolute bg-gradient-to-b from-emerald-500 to-red-400 w-40 h-40 blur-2xl rounded-full -right-24 top-10 opacity-90'></div>
       <div className='absolute bg-gradient-to-b from-emerald-500 to-red-400 w-40 h-40 blur-2xl rounded-full -left-24 bottom-10 opacity-90'></div>
       <nav className='relative mb-10'>
          {menu.map(item => (
            <div href="#" key={item.id} className={`${menuActive === item.id ? 'bg-primary font-semibold' : 'bg-transparent'}  flex space-x-4 items-center text-white py-2 px-4 mb-5 rounded-lg text-base hover:bg-primary transition duration-300 ease-out`} onClick={() => setMenuActive(item.id)}>
              {item.icon}
              <p>{item.name}</p>
            </div>
          ))}
       </nav>
       <div className='relative bg-background w-full h-48 rounded-lg overflow-hidden p-3 pr-2 pt-4 opacity-90'>
          <div className='absolute w-56 h-56 rounded-full bg-[#626262] -top-12 -left-12 opacity-40'></div>
          <div className='relative flex flex-col text-white font-Montserrat'>
            <h4 className='font-bold text-xl mb-2'>50% Discount!</h4>
            <p className='mb-4'>Get a discount on certain days and dont miss it.</p>
            <div className='w-10 h-10 bg-primary p-2 flex justify-center items-center rounded-full'>
              <BsArrowRight className='text-white'/>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Sidebar