import { MdMenu } from 'react-icons/md';
import { useSidebar } from '@/components/ui/sidebar';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTheme } from '@/features/theme/hooks/useTheme';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const { toggleSidebar } = useSidebar();
  const { isAuthenticated, user } = useAuth();
  const { theme, setTheme } = useTheme();
  const [activeTheme, setActiveTheme] = useState(theme);

  useEffect(() => {
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      return setActiveTheme(systemTheme);
    } else {
      return setActiveTheme(theme);
    }
  }, [theme]);

  const handleThemeChange = () => {
    if (activeTheme === 'light') return setTheme('dark');
    else return setTheme('light');
  };

  return (
    <nav className="h-[60px] px-4 w-full flex items-center shadow-md">
      {/* Left */}
      <div className="text-3xl pr-14" onClick={toggleSidebar}>
        <MdMenu />
      </div>

      {/* Logo */}
      <div className="grow font-bold">
        <span>
          <Link to="/">{import.meta.env.VITE_APP_NAME}</Link>
        </span>
      </div>

      {/* Right */}
      <div className="flex gap-4 items-center">
        <div className="text-3xl" onClick={handleThemeChange}>
          {activeTheme === 'light' ? <MdDarkMode /> : <MdLightMode />}
        </div>
        {isAuthenticated ? (
          <Avatar>
            <AvatarImage src={user?.profile.avatarURL} />
            <AvatarFallback>{user?.username}</AvatarFallback>
          </Avatar>
        ) : (
          <Button variant="outline">
            <Link to="/auth/signin">Sign in</Link>
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
