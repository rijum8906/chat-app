// src/api/authApi.ts
import axios from '@/configs/axios';
import type { SigninPayload, SignupPayload, AuthResponse, GoogleAuthPayload } from '@/types/authTypes';

export const authService = {
  password: {
    signin: async (payload: SigninPayload) => {
      const response = await axios.post('/auth/login', payload);

      return response.data;
    },

    signup: async (payload: SignupPayload) => {
      const response = await axios.post('/auth/register', payload);

      return response.data;
    },
  },
  google: {
    auth: async (payload: GoogleAuthPayload) => {
      const response = await axios.post<AuthResponse>('/auth/google', payload);
      return response.data;
    },
  },

  signout: async () => {
    const response = await axios.post('/auth/signout');

    return response.data;
  },

  getCurrentUser: async () => {
    const response = await axios.get<{ user: User }>('/auth/me');
    return response.data;
  },
};

// Named exports for direct access if needed
export const { password, google, signout, getCurrentUser } = authService;

// Default export for the complete service
export default authService;
