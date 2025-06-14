import { Sidebar, SidebarHeader, SidebarFooter, SidebarGroup, SidebarContent } from '@/components/ui/sidebar';
import { navLinks, type NavLink } from '@/constants/navLinks';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarLayout = () => {
  const { isAuthenticated } = useAuth();
  const [links, setLinks] = useState<NavLink[]>([]);

  useEffect(() => {
    const filteredNavLinks = navLinks.filter((link) => {
      if (isAuthenticated && link.registeredOnly) return true;
      else if (!isAuthenticated && !link.unRegisteredOnly) return true;
      else if (!link.registeredOnly && !link.unRegisteredOnly) return true;
      else return false;
    });
    setLinks(filteredNavLinks);
  }, []);

  return (
    <Sidebar>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {links.map((link) => (
            <Link key={link.path} to={link.path} className="w-full flex gap-2 py-2.5">
              <link.icon className="text-2xl" />
              <span>{link.label}</span>
            </Link>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <p>&copy; 2025 {import.meta.env.VITE_APP_NAME}. All rights reserved.</p>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SidebarLayout;
