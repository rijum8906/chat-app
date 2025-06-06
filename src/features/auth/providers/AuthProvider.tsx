import React, { createContext, useContext, useMemo } from 'react';
import type { User, AuthState, SigninPayload, SignupPayload, Method } from '@/types/authTypes';
import { useAppDispatch, useAppSelector } from '@/store';
import { authSuccess, authFailure, signout, startLoading } from './../slices/authSlice';
import { password, google, signout as signoutUser } from '@/api/authApi';
import { useAlert } from '@/features/alert';

interface AuthContextType extends AuthState {
  signin: (payload: SigninPayload, method: Method) => Promise<void>;
  signup: (payload: SignupPayload, method: Method) => Promise<void>;
  signout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

// AuthProvider.tsx
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { showAlert } = useAlert();
  const { user, token, isLoading, attempts } = useAppSelector((state) => state.auth);

  // Memoize auth functions to prevent recreation on every render
  const authFunctions = useMemo(
    () => ({
      signin: async (payload: SigninPayload, method: Method = 'password') => {
        dispatch(startLoading());
        try {
          const data = await password.signin(payload);
          if (!data.success) throw new Error(data.error?.message);
          dispatch(authSuccess(data));
          showAlert({ message: 'Signed in successfully', type: 'success' });
        } catch (error) {
          dispatch(authFailure(error.response?.data?.error?.message || error.message));
          showAlert({ message: error.response?.data?.error?.message || error.message, type: 'error' });
        }
      },
      signup: async (payload: SignupPayload) => {
        dispatch(startLoading());
        try {
          const data = await password.signup(payload);
          if (!data.success) throw new Error(data.error?.message);
          dispatch(authSuccess(data));
          showAlert({ message: 'Account created', type: 'success' });
        } catch (error) {
          dispatch(authFailure(error.response?.data?.error?.message || error.message));
          showAlert({ message: error.response?.data?.error?.message || error.message, type: 'error' });
        }
      },
    }),
    [dispatch, showAlert]
  );

  // Memoize the context value
  const contextValue = useMemo(
    () => ({
      ...authFunctions,
      user,
      token,
      isLoading,
      attempts,
    }),
    [authFunctions, user, token, isLoading, attempts]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
