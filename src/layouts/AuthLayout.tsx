import { Suspense } from 'react';
import Loader from '@/components/Loader';
import { useAuth } from '@/features/auth';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AuthLayout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
    // If user is logged in then redirect to last page
  if(user) navigate(-1, { replace: true });
  
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  )
}

export default AuthLayout;