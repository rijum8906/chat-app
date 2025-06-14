import { type IconType } from 'react-icons';
import { MdHome } from 'react-icons/md';
import { MdDashboard } from 'react-icons/md'; // Import Dashboard icon
import { MdLogin } from 'react-icons/md'; // Import Login icon
import { MdSettings } from 'react-icons/md'; // Import Settings icon
import { MdInfo } from 'react-icons/md'; //Import Info icon

export interface NavLink {
  path: string;
  label: string;
  icon: IconType;
  registeredOnly?: boolean;
  unRegisteredOnly?: boolean;
}

export const navLinks: NavLink[] = [
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
    path: '/auth/signin',
    label: 'Sign in',
    icon: MdLogin, // Assign Login icon
    unRegisteredOnly: true,
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
