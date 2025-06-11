import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '@/components/layout/Loader';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppBar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';

const MainLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <SidebarProvider className="flex flex-col">
        <div className="flex">
          <AppBar />
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>
      </SidebarProvider>
    </Suspense>
  );
};

export default MainLayout;
