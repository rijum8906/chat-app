// index.ts for cleaner imports
import { authSuccess, authFailure, signout, startLoading } from './slices/authSlice';
import { AuthProvider, useAuth } from './providers/AuthProvider';
export { useAuth, AuthProvider, authSuccess, authFailure, signout, startLoading };
