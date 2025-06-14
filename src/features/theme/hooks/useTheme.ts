import type { ThemeType } from './../themeSlice';
import { useAppDispatch, useAppSelector } from '@/store';
import { setTheme } from './../themeSlice';

export const useTheme = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  return {
    theme,
    setTheme: (theme: ThemeType) => dispatch(setTheme(theme)),
  };
};
