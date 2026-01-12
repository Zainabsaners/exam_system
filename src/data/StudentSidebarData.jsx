import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BarChartIcon from '@mui/icons-material/BarChart';
import ScheduleIcon from '@mui/icons-material/Schedule';
import EventIcon from '@mui/icons-material/Event';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
// eslint-disable-next-line react-refresh/only-export-components
export const SidebarData = [
  
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/StudentPortal/Dashboard"
  },
  {
    title: "Academic",
    icon: <SchoolIcon sx={{fontSize:30}}/>,
    link: "/StudentPortal/AcademicRecord"
  },
  // {
  //   title: "Notices",
  //   icon: <EventIcon sx={{fontSize:30}}/>,
  //   link: "/StudentPortal/Notices"
  // },
  // {
  //   title: "Settings",
  //   icon: <SettingsIcon sx={{fontSize:30}} />,
  //   link: "/StudentPortal/Settings"
  // },
  
  {
    title: "LogOut",
    icon: <LogoutIcon sx={{fontSize:30}}/>,
    link: "/Login"
  },
];

export default SidebarData;