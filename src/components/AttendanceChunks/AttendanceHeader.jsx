import React from 'react'
import { FlipWords } from '../Ace-ui/FlipWords'

function AttendanceHeader() {
    const words = ["Analyzing" , 'Monitoring', 'Tracking', 'Viewing'];
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
  <div className="mx-auto max-w-3xl text-center">
    <h2 className="text-2xl font-poppins font-bold text-gray-900 sm:text-4xl">Perfect View for <FlipWords words={words} /> Students </h2>

    <p className="mt-4 text-gray-500 sm:text-xl">
      Analysis of the Attendance captured using the image models , and each student's Attendance Information can be viewed here.
      Which helps to check between the students who are prone to get dropped
    </p>
  </div>

  <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Average Attendance</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">73.5%</dd>
    </div>

    <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Today's Absentees</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
    </div>

    <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Presentees</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
    </div>

    <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Prone to Detention</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">8</dd>
    </div>
  </dl>
</div>
  )
}

export default AttendanceHeader