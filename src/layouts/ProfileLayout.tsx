import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '@/components/layout/Loader';

const ProfileLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
};

export default ProfileLayout;
