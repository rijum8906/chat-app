import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '@/components/layout/Loader';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

const MainLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <SidebarProvider className="flex flex-col">
        <div className="flex">
          <Sidebar />
          <Navbar />
        </div>
        <Outlet />
      </SidebarProvider>
    </Suspense>
  );
};

export default MainLayout;
