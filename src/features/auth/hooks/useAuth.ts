import { useState, useEffect } from 'react';
import type { SignInPayload, SignUpPayload } from '@/types/authTypes';
import { signInByPass, signUpByPass, signOut as signOutApi, authenticateByGoogle } from '@/api/authApi';
import { authSuccess, authFailure, startLoading, clearAuth } from '@/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/store';
import { useNotification } from '@/features/notification/hooks/useNotification';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, isLoading, isError, token, isAuthenticated } = useAppSelector((state) => state.auth);
  const { showNotification } = useNotification();

  // Save google auth token
  const [googleAuthToken, setGoogleAuthToken] = useState<null | string>(null);

  google.accounts.id.initialize({
    client_id: import.meta.env.VITE_CLIENT_ID,
    callback: (credentials) => {
      setGoogleAuthToken(credentials.credential);
    },
  });

  useEffect(() => {
    if (googleAuthToken) {
      (async () => {
        const res = await authenticateByGoogle({ token: googleAuthToken });
        if (res.success) {
          dispatch(authSuccess(res.data));
          showNotification({
            header: res.message,
            content: 'Successfully signed in with google. You can now access everything.',
          });
        } else {
          dispatch(authFailure());
          showNotification({
            header: 'Signin Failed',
            content: res.message || 'Something went wrong.',
          });
        }
      })();
    }
  }, [googleAuthToken]);

  const passwordAuth = {
    signIn: async (payload: SignInPayload) => {
      dispatch(startLoading());
      const res = await signInByPass(payload);
      if (res.success) {
        dispatch(authSuccess(res.data));
        showNotification({
          header: res.message,
          content: 'Successfully signed in. You can now access everything.',
        });
      } else {
        dispatch(authFailure());
        showNotification({
          header: 'Signin Failed',
          content: res.message || 'Something went wrong.',
        });
      }
    },

    signUp: async (payload: SignUpPayload) => {
      dispatch(startLoading());
      const res = await signUpByPass(payload);
      if (res.success) {
        dispatch(authSuccess(res.data));
        showNotification({
          header: res.message,
          content: 'Welcome! You are now registered and signed in.',
        });
      } else {
        dispatch(authFailure());
        showNotification({
          header: 'Signup Failed',
          content: res.message || 'Something went wrong.',
        });
      }
    },
  };

  const oAuth = {
    signInWithGoogle: async () => {
      dispatch(startLoading());
      google.accounts.id.prompt();
    },
  };

  const signOut = async () => {
    const res = await signOutApi();
    if (res.success) {
      dispatch(clearAuth());
      showNotification({
        header: 'Logged Out',
        content: res.message || 'You have been signed out successfully.',
      });
    } else {
      showNotification({
        header: 'Logout Failed',
        content: res.message || 'Something went wrong while logging out.',
      });
    }
  };

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    isError,
    passwordAuth,
    oAuth,
    signOut,
  };
};
