// index.ts for cleaner imports
import { authSuccess, authFailure, signout, startLoading } from './slice/authSlice';
import { AuthProvider, useAuth } from './provider/AuthProvider';
import Signup from './components/Signup';
export { useAuth, Signup, AuthProvider, authSuccess, authFailure, signout, startLoading };
