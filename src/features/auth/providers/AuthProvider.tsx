import React, { createContext, useContext, useMemo, useEffect, useState } from 'react';
import type { User, AuthContextType, SigninPayload, SignupPayload, Method } from '@/types/authTypes';
import { useAppDispatch, useAppSelector } from '@/store';
import { authSuccess, authFailure, signout, startLoading } from '@/features/auth';
import authApi from '@/api/authApi';
import { useAlert } from '@/features/alert';

// Creating a auth context
const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { showAlert } = useAlert();

  // Destruct auth info from redux
  const { user, token, isLoading, attempts } = useAppSelector((state) => state.auth);

  // store google auth token
  let googleOAuthRenderedButton;

  // complete authentication after getting token
  const completeOAuth = async (token) => {
    try {
      // send auth token to api
      const data = await authApi.authenticateByGoogle({ token });
      if (!data.success) throw new Error(data.message);

      // show res to client
      showResToClient({
        message: data.message,
        data: data,
        type: 'success',
        method: 'google',
      });
    } catch (error: any) {
      showResToClient({
        message: error.response?.data?.data?.error?.message || error.message || 'Something went wrong.',
        type: 'error',
      });
    }
  };

  // with loading of this component initialize google auth
  useEffect(() => {
    if (window.google && window.google.accounts) {
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: async (credentials: any) => {
          await completeOAuth(credentials.credential);
        },
        context: 'use',
      });
      
      // if the user is rendering any google auth button
      if (googleOAuthRenderedButton)
        window.google.accounts.id.renderButton(googleOAuthRenderedButton.ele, googleOAuthRenderedButton.options);
    }
  }, []);

  // a function to show user alert
  const showResToClient = ({
    message,
    data,
    type,
    method = 'password',
  }: {
    message: string;
    data?: any;
    type: string;
    method: Method;
  }) => {
    if (type === 'success' && data)
      dispatch(
        authSuccess({
          token: data.token,
          method,
          user: data.user,
        })
      );

    if (type === 'error') dispatch(authFailure());

    showAlert({ message, type });
  };

  // Sign In by password function
  const signInUserByPass = async (payload: SigninPayload) => {
    dispatch(startLoading());
    try {
      const data = await authApi.signInByPass(payload);
      if (!data.success) throw new Error(data.error.message);
      showResToClient({
        message: data.message,
        data: data,
        type: 'success',
        method: 'password',
      });
    } catch (error: any) {
      showResToClient({
        message: error.response?.data?.data?.error?.message || error.message || 'Something went wrong.',
        type: 'error',
      });
    }
  };

  // Sign Up by password function
  const signUpUserByPass = async (payload: SignupPayload) => {
    dispatch(startLoading());
    try {
      const data = await authApi.signUpByPass(payload);
      if (!data.success) throw new Error(data.message);
      showResToClient({
        message: data.message,
        data: data,
        type: 'success',
        method: 'password',
      });
    } catch (error: any) {
      showResToClient({
        message: error.response?.data?.data?.error?.message || error.message || 'Something went wrong.',
        type: 'error',
      });
    }
  };

  // Sign out user
  const signOutUser = async () => {
    dispatch(startLoading());
    try {
      const data = await authApi.signOut();
      showResToClient({
        message: data.message,
        type: 'success',
      });

      // claear Google token
      setGoogleAuthToken(null);
    } catch (error: any) {
      showResToClient({
        message: error.response?.data?.data?.error?.message || error.message || 'Something went wrong.',
        type: 'error',
      });
    }
  };

  // Sign in with Google (popup)
  const promptGoogleAuth = async () => {
    dispatch(startLoading());

    // Trigger google one tap login
    window.google.accounts.id.prompt((notification) => {
      if (notification.g === 'skipped')
        showResToClient({
          message: 'You have cancelled google signin.',
          type: 'error',
        });
      else if (notification.i !== 'credential_returned')
        showResToClient({
          message: 'Something went wrong.',
          type: 'error',
        });
    });
  };

  // Sign in with google from button
  const renderGoogleAuthByButton = (ele, options = {}) => {
    googleOAuthRenderedButton = { ele, options };
  };

  // Memoize the context value
  const contextValue = useMemo(
    () => ({
      user,
      token,
      isLoading,
      attempts,
      passwordAuth: {
        signIn: signInUserByPass,
        signUp: signUpUserByPass,
      },
      oAuth: {
        promptGoogleAuth,
        renderGoogleAuthByButton,
      },
    }),
    [user, token, isLoading, attempts]
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
