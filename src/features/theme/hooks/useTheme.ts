import { useAppDispatch, useAppSelector } from '@/store';
import { toggleTheme } from './../slice/themeSlice';

interface AlertPayload {
  message: string;
  type?: 'success' | 'error' | 'warning';
}

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.theme);

  return {
    toggleTheme: () => dispatch(toggleTheme()),
    theme: theme,
  };
};

export default useTheme;
