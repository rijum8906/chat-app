import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/AppRoutes';
import { AlertContainer } from '@/features/alert';
import { useTheme } from '@/features/theme';
import { useEffect } from 'react';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    console.log(theme);
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    root.classList.add(theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <AppRoutes />
      <AlertContainer />
    </BrowserRouter>
  );
}

export default App;
