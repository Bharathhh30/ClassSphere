import React from 'react'
import SideBar from './components/SideBar'
import { Routes } from 'react-router';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Attendance from './pages/Attendance';
import Analytics from './pages/Analytics';
import Notifications from './pages/Notifications';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';
import TimeTable from './pages/TimeTable';
import AdaptEd from './pages/AdaptEd';
import Analyzer from './pages/Analyzer';
import ToDo from './pages/ToDo';
import Landing from './pages/Landing';



function App() {

  const activeMenu = true;
  // const activeMenu = false;
  return (
    <>
      {/* <Landing/> */}
      <div>
        <Routes>
          <Route path='/' element = {<Landing/>}/>
          <Route path='/Home' element = {<Home/>}/>
          <Route path='/Attendance' element = {<Attendance/>}/>
          <Route path='/Analytics' element = {<Analytics/>}/>
          <Route path='/Notification' element = {<Notifications/>}  />

          <Route path='/Calendar' element = {<Calendar/>}/>
          <Route path='/Kanban' element = {<Kanban/>}/>
          <Route path='/TimeTable' element = {<TimeTable/>}/>

          <Route path='/AdaptEd' element = {<AdaptEd/>}/>
          <Route path='/Analyzer' element = {<Analyzer/>}/>
          <Route path='/ToDo' element = {<ToDo/>}/>





          
        </Routes>
      </div>
    </>
  )
}

export default App