import React from 'react';
import { VscActivateBreakpoints } from "react-icons/vsc";
import { BiBarChartAlt } from "react-icons/bi";
import { GoFlame } from "react-icons/go";
import { BsKanban } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FiGrid } from "react-icons/fi";
import { FcAlarmClock, FcAreaChart, FcBrokenLink, FcCalendar, FcElectricalSensor, FcEngineering, FcFlashOn, FcGraduationCap, FcKindle, FcPortraitMode, FcTodoList, FcWorkflow } from "react-icons/fc";







export const links1 = [
    {
    title : 'Dashboard',
    links : [
        {
            name : 'Attendance',
            icon : <FcElectricalSensor/>,
        },

        {
            name : 'Analytics',
            icon : <FcAreaChart />,
        },

        {
            name : 'Notification',
            icon : <FcFlashOn />, 
        },
    ],
},
{
    title : 'Apps',
    links : [
        {
            name : 'Calendar',
            icon : <FcCalendar/>,
        },

        {
            name : 'Kanban',
            icon : <FcWorkflow />,
        },

        {
            name : 'TimeTable',
            icon : <FcAlarmClock />, 
        },
    ],
},
{
    title : 'Integrations',
    links : [
        {
            name : 'AdaptEd',
            icon : <FcGraduationCap/>,
        },

        {
            name : 'Analyzer',
            icon : <FcKindle />,
        },

        {
            name : 'ToDo',
            icon : <FcTodoList />, 
        },
    ],
},
{
    title : 'Authentication',
    links : [
        {
            name : 'Login',
            icon : <FcPortraitMode/>,
        },

        {
            name : 'Logout',
            icon : <FcBrokenLink />,
        },

        {
            name : 'Settings',
            icon : <FcEngineering />, 
        },
    ],
},
];
