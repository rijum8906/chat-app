import axios from '@/configs/axios';
import type { SignInPayload, SignUpPayload, SignOutResponse, GoogleAuthPayload, AuthResponse } from '@/types/authTypes';
import { authRoutes } from '@/configs/apiRoutes';

const authApi = {
  // Sign In user by password
  signInByPass: async (payload: SignInPayload) => {
    try {
      const response = await axios.post<AuthResponse>(authRoutes.signIn, payload);
      return response.data;
    } catch (error: any) {
      return error.response?.data || error;
    }
  },

  // Sign Up user by password
  signUpByPass: async (payload: SignUpPayload) => {
    try {
      const response = await axios.post<AuthResponse>(authRoutes.signUp, payload);
      return response.data;
    } catch (error: any) {
      return error.response?.data || error;
    }
  },

  // Sign Out user
  signOut: async () => {
    try {
      const response = await axios.post<SignOutResponse>(authRoutes.signOut);
      return response.data;
    } catch (error: any) {
      return error.response?.data || error;
    }
  },

  // Authenticate user by google Login Method
  authenticateByGoogle: async (payload: GoogleAuthPayload) => {
    try {
      const response = await axios.post<AuthResponse>(authRoutes.googleAuth, payload);
      return response.data;
    } catch (error: any) {
      return error.response?.data || error;
    }
  },
};

export const { signInByPass, signUpByPass, authenticateByGoogle, signOut } = authApi;
