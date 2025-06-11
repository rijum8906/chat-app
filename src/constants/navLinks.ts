import { MdHome } from 'react-icons/md';
import { MdDashboard } from 'react-icons/md'; // Import Dashboard icon
import { MdLogin } from 'react-icons/md'; // Import Login icon
import { MdSettings } from 'react-icons/md'; // Import Settings icon
import { MdInfo } from 'react-icons/md'; //Import Info icon

export const navLinks = [
  {
    path: '/',
    label: 'Home',
    icon: MdHome,
  },
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: MdDashboard, // Assign Dashboard icon
    registeredOnly: true,
  },
  {
    path: '/signin',
    label: 'Signin',
    icon: MdLogin, // Assign Login icon
    unRegisterdOnly: true,
  },
  {
    path: '/settings',
    label: 'Settings',
    icon: MdSettings, // Assign Settings icon
    registeredOnly: true,
  },
  {
    path: '/about',
    label: 'About',
    icon: MdInfo, // Assign Info icon
  },
  // Add more routes here...
];
