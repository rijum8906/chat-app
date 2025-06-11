import { Sidebar, SidebarHeader, SidebarFooter, SidebarContent, SidebarGroup } from '@/components/ui/sidebar';
import { NavLink } from 'react-router-dom';
import { useAuth } from '@/features/auth';

import { navLinks } from '@/constants/navLinks';

const AppSidebar = () => {
  const { user } = useAuth();

  const navItems = navLinks.filter((link) => {
    if (user && link.registeredOnly) return true;
    else if (!user && link.unRegisterdOnly) return true;
    else if (!link.registeredOnly && !link.unRegisterdOnly) return true;
    else return false;
  });

  return (
    <Sidebar className="border-r h-screen">
      <SidebarHeader className="p-4 font-bold text-xl">ChatApp</SidebarHeader>

      <SidebarContent className="flex-1 px-2 space-y-1">
        <SidebarGroup>
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md hover:bg-muted ${isActive ? 'bg-muted font-semibold' : ''}`
              }
            >
              {<item.icon className="h-5 w-5 mr-2" />}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 text-sm text-muted-foreground">
        © 2025 {import.meta.env.VITE_APP_NAME}
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
