import { Suspense } from 'react';
import Loader from '@/components/Loader';
import { useAuth } from '@/features/auth';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


const SettingsLayout = () => {
  const { user } = useAuth();
  
  return (
    <Suspense fallback={<Loader />}>
      { user ? <Navigate to="/auth/signin" /> :
      <>
        <Outlet />
      </>
      }
    </Suspense>
  )
}

export default SettingsLayout;