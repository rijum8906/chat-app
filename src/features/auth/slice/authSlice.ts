import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AuthState, AuthSuccessPayload } from '@/types/authTypes';

const initialState: AuthState = {
  isLoading: false,
  user: null,
  token: null,
  isError: false,
  method: null,
  attempts: 0,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authSuccess: (state, action: PayloadAction<AuthSuccessPayload>) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.method = action.payload.method;
      state.isError = false;
      state.attempts++;
    },
    authFailure: (state) => {
      state.isLoading = false;
      state.user = null;
      state.token = null;
      state.isError = true;
      state.attempts++;
    },
    signout: (state) => {
      state.isLoading = false;
      state.user = null;
      state.token = null;
      state.isError = false;
      state.errorMessage = null;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
  },
});

export const { authSuccess, authFailure, signout, startLoading } = authSlice.actions;
export default authSlice.reducer;
