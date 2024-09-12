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


export const kanbanData = [
    {
      Id: 'Task 1',
      Title: 'Task - 29001',
      Status: 'Open',
      Summary: 'Analyze the new requirements gathered from the customer.',
      Type: 'Story',
      Priority: 'Low',
      Tags: 'Analyze,Customer',
      Estimate: 3.5,
      Assignee: 'Nancy Davloio',
      RankId: 1,
      Color: '#02897B',
      ClassName: 'e-story, e-low, e-nancy-davloio',
    },
    {
      Id: 'Task 2',
      Title: 'Task - 29002',
      Status: 'InProgress',
      Summary: 'Improve application performance',
      Type: 'Improvement',
      Priority: 'Normal',
      Tags: 'Improvement',
      Estimate: 6,
      Assignee: 'Andrew Fuller',
      RankId: 1,
      Color: '#673AB8',
      ClassName: 'e-improvement, e-normal, e-andrew-fuller',
    },
    {
      Id: 'Task 3',
      Title: 'Task - 29003',
      Status: 'Open',
      Summary: 'Arrange a web meeting with the customer to get new requirements.',
      Type: 'Others',
      Priority: 'Critical',
      Tags: 'Meeting',
      Estimate: 5.5,
      Assignee: 'Janet Leverling',
      RankId: 2,
      Color: '#1F88E5',
      ClassName: 'e-others, e-critical, e-janet-leverling',
    },
    {
      Id: 'Task 4',
      Title: 'Task - 29004',
      Status: 'Testing',
      Summary: 'Fix the issues reported in the IE browser.',
      Type: 'Bug',
      Priority: 'Critical',
      Tags: 'IE',
      Estimate: 2.5,
      Assignee: 'Janet Leverling',
      RankId: 2,
      Color: '#E64A19',
      ClassName: 'e-bug, e-release, e-janet-leverling',
    },
    {
      Id: 'Task 5',
      Title: 'Task - 29005',
      Status: 'Review',
      Summary: 'Fix the issues reported by the customer.',
      Type: 'Bug',
      Priority: 'Low',
      Tags: 'Customer',
      Estimate: '3.5',
      Assignee: 'Steven walker',
      RankId: 1,
      Color: '#E64A19',
      ClassName: 'e-bug, e-low, e-steven-walker',
    },
    {
      Id: 'Task 6',
      Title: 'Task - 29007',
      Status: 'Validate',
      Summary: 'Validate new requirements',
      Type: 'Improvement',
      Priority: 'Low',
      Tags: 'Validation',
      Estimate: 1.5,
      Assignee: 'Robert King',
      RankId: 1,
      Color: '#673AB8',
      ClassName: 'e-improvement, e-low, e-robert-king',
    },
    {
      Id: 'Task 7',
      Title: 'Task - 29009',
      Status: 'Review',
      Summary: 'Fix the issues reported in Safari browser.',
      Type: 'Bug',
      Priority: 'Critical',
      Tags: 'Fix,Safari',
      Estimate: 1.5,
      Assignee: 'Nancy Davloio',
      RankId: 2,
      Color: '#E64A19',
      ClassName: 'e-bug, e-release, e-nancy-davloio',
    },
    {
      Id: 'Task 8',
      Title: 'Task - 29010',
      Status: 'Close',
      Summary: 'Test the application in the IE browser.',
      Type: 'Story',
      Priority: 'Low',
      Tags: 'Review,IE',
      Estimate: 5.5,
      Assignee: 'Margaret hamilt',
      RankId: 3,
      Color: '#02897B',
      ClassName: 'e-story, e-low, e-margaret-hamilt',
    },
  ];
  

  export const kanbanGrid = [
    { headerText: 'To Do', keyField: 'Open', allowToggle: true },
    { headerText: 'In Progress', keyField: 'InProgress', allowToggle: true },
    { headerText: 'Testing', keyField: 'Testing', allowToggle: true, isExpanded: false },
    { headerText: 'Review', keyField: 'Review', allowToggle: true }, // Add Review
    { headerText: 'Validate', keyField: 'Validate', allowToggle: true }, // Add Validate
    { headerText: 'Done', keyField: 'Close', allowToggle: true }
  ];
  