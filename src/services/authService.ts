import axios from '@/configs/axios';
import type { SignInPayload, SignUpPayload, AuthResponse, GoogleAuthPayload } from '@/types/authTypes';
import { authRoutes } from '@/configs/apiRoutes';

const authApi = {
  // Sign In user by password
  signInByPass: async (payload: SigninPayload) => {
      const response = await axios.post(authRoutes.signIn, payload);
      return response.data;
    },
    // Sign Up user by password
  signUpByPass: async (payload: SignupPayload) => {
      const response = await axios.post(authRoutes.signUp, payload);
      return response.data;
    },
    // Sign Out user
  signOut: async () => {
    const response = await axios.post(authRoutes.signOut);
    return response.data;
    },
    // Authenticate user by google Login Method
  authenticateByGoogle: async (payload: GoogleAuthPayload) => {
      const response = await axios.post<AuthResponse>(authRoutes.googleAuth, payload);
      return response.data;
    },
}

export default authApi;