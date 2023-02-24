import React from 'react'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import RightBar from './components/RightBar'

const App = () => {
  return (
    <div className='flex  bg-background'>
      <Sidebar />
      <Feed />
      <RightBar />
    </div>
  )
}

export default App