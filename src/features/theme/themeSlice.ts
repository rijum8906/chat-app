// src/features/theme/themeSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// 1. Define the slice state type & payload types
export type ThemeType = 'system' | 'light' | 'dark';

interface ThemeState {
  theme: ThemeType;
}

// 2. Initial state
const initialState: ThemeState = {
  theme: 'system',
};

// 3. Create slice
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
    },
  },
});

// 4. Export actions
export const { setTheme } = themeSlice.actions;

// 5. Export reducer
export default themeSlice.reducer;
