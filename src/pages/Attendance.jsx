import React from 'react'
import SideBar from '../components/SideBar'
import AttendanceHeader from '../components/AttendanceChunks/AttendanceHeader'
import AttendanceChart1 from '../components/AttendanceChunks/AttendanceChart1'
import ActivityChart from '../components/AttendanceChunks/AttendanceActivity'
import ChartRadar from '../components/AttendanceChunks/ChartRadar'

function Attendance() {
  return (
    <div className='flex h-screen'>
      {/* Side Bar part */}
      <div className='w-72 fixed h-screen'>
        <SideBar activeMenu={true} />
      </div>
 
      <div className='flex-1 p-4 ml-72 gap-y-4'>
        
        <AttendanceHeader />
        <div className='ml-8 rounded-xl shadow-2xl flex justify-evenly gap-x-8 flex-1'>
          <div>
            <AttendanceChart1 />
          </div>
          <div>
            <ActivityChart />
          </div>
        </div>
        <div className='flex shadow-2xl ml-8 mt-10 rounded-xl overflow-hidden justify-center p-4'>
          <ChartRadar />
        </div>
        
      </div>
    </div>
  )
}

export default Attendance