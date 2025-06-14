// src/features/auth/authSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User } from '@/types/authTypes';

// 1. Define the slice state type & payload types
interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isError: boolean;
}

interface AuthSuccessPayload {
  user: User;
  token: string;
}

// 2. Initial state
const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  isError: false,
};

// 3. Create slice
const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authSuccess: (state, action: PayloadAction<AuthSuccessPayload>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    startLoading: (state) => {
      state.isError = false;
      state.isLoading = true;
    },
    authFailure: (state) => {
      state.isError = true;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
    clearAuth: (state) => {
      state.isError = false;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.token = null;
      state.user = null;
    },
  },
});

// 4. Export actions
export const { authSuccess, authFailure, startLoading, clearAuth } = userSlice.actions;

// 5. Export reducer
export default userSlice.reducer;
