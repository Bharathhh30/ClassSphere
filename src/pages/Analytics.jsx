import React from 'react'
import SideBar from '../components/SideBar'
import AttendanceHeader from '../components/AttendanceChunks/AttendanceHeader'
import Component from '../components/AnalyticsChunks/AnalyticsPie1'
import { Component1 } from '../components/AnalyticsChunks/AnalyticsPie2'

function Analytics() {
  return (
    <div className='flex h-screen'>
      {/* Side Bar part */}
      <div className='w-72 fixed h-screen'>
        <SideBar activeMenu={true} />
      </div>

      <div className='flex-1 p-4 ml-72'>
        
        <div>
          <AttendanceHeader />
          <div className='ml-8 rounded-xl shadow-2xl flex justify-evenly gap-x-8 flex-1 items-center' >
            <div>
              <Component  />
            </div>
            <div>
              <Component1 />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Analytics