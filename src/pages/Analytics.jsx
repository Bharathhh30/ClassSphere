import React from 'react'
import SideBar from '../components/SideBar'

function Analytics() {
  return (
    <div className='flex h-screen'>
      {/* Side Bar part */}
      <div className='w-72 fixed h-screen'>
        <SideBar activeMenu={true} />
      </div>

      <div className='flex-1 p-4 ml-72'>
        
        Analytics
      </div>
    </div>
  )
}

export default Analytics