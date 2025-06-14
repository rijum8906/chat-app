import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/AppRoutes';
import NotificationContainer from '@/features/notification/components/NotificationContainer';
import { useEffect } from 'react';
import { useTheme } from '@/features/theme/hooks/useTheme';

function App() {
  const { theme } = useTheme();

  // Set Themes
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      return root.classList.add(systemTheme);
    }

    root.classList.add(theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <AppRoutes />
      <NotificationContainer />
    </BrowserRouter>
  );
}

export default App;
