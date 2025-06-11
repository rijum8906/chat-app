import { Link } from 'react-router-dom';
import { useSidebar } from '@/components/ui/sidebar';
import { Menu } from 'lucide-react';
import { useAuth } from '@/features/auth';
import { Button } from '@/components/ui/button';
import { MdLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';
import { useTheme } from '@/features/theme';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Navbar = () => {
  const { toggleSidebar } = useSidebar();
  const { toggleTheme, theme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <header className="w-full h-16 px-4 flex items-center justify-between border-b bg-background shadow-md">
      {/* Left: Toggle Sidebar */}
      <button onClick={toggleSidebar} className="md:hidden">
        <Menu className="w-6 h-6" />
      </button>

      {/* Center: Logo or Brand */}
      <Link to="/" className="text-lg font-semibold">
        {import.meta.env.VITE_APP_NAME}
      </Link>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Theme */}
        <div onClick={toggleTheme}>
          {theme === 'light' ? <MdDarkMode className="h-6 w-6" /> : <MdLightMode className="h-6 w-6" />}
        </div>
        {!user ? (
          <Button variant="outline">
            <Link to="/auth/signin">Signin</Link>
          </Button>
        ) : (
          <Avatar>
            <AvatarImage src={usee.profile?.avatarURL} />
            <AvatarFallback>{user.profile?.displayName}</AvatarFallback>
          </Avatar>
        )}
      </div>
    </header>
  );
};

export default Navbar;
