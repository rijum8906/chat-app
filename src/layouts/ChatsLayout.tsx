import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '@/components/layout/Loader';

const ChatLayout = () => {
  return (
  <Suspense fallback={<Loader />}>
    <Outlet />
  </Suspense>
  )
}

export default ChatLayout;