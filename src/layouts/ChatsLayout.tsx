import { Suspense, lazy } from 'react';
import Loader from '@/components/Loader';
import { useAuth } from '@/features/auth';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

// Lazy Loaded Components
const ChatsSidebar = lazy(() => import('@/components/chats/ChatsSidebar'));
const ChatScreen = lazy(() => import('@/components/chats/ChatScreen'));

const ChatsLayout = () => {
  const { user } = useAuth();
  
  return (
    <Suspense fallback={<Loader />}>
      { user ? <Navigate to="/auth/signin" /> :
      <>
        <ChatsSidebar />
        <Outlet />
      </>
      }
    </Suspense>
  )
}

export default ChatsLayout;