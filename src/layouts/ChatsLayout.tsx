import { Suspense, lazy } from 'react';
import Loader from '@/components/layout/Loader';
import { useAuth } from '@/features/auth';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const ChatsLayout = () => {
  const { user } = useAuth();

  return (
    <Suspense fallback={<Loader />}>
      {user ? (
        <Navigate to="/auth/signin" />
      ) : (
        <>
          <Outlet />
        </>
      )}
    </Suspense>
  );
};

export default ChatsLayout;
