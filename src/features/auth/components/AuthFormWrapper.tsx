import React from 'react';
import { cn } from '@/lib/utils'; // optional: tailwind merge utility
import GoogleAuthButton from './GoogleAuthButton';

interface AuthWrapperProps {
  children: React.ReactNode;
  onGoogleClick?: () => Promise<void>;
  className?: string;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children, onGoogleClick, className }) => {
  return (
    <div className={cn('min-h-screen flex items-center justify-center px-4 bg-muted', className)}>
      <div className="w-full max-w-md bg-background rounded-2xl shadow-xl p-6 space-y-6 border">
        {/* Logo or Title */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Welcome</h1>
          <p className="text-sm text-muted-foreground">Sign in to continue</p>
        </div>

        {/* The form: SignIn or SignUp passed as children */}
        {children}

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase text-muted-foreground">
            <span className="bg-background px-2">Or continue with</span>
          </div>
        </div>

        {/* Google Auth Button */}
        <GoogleAuthButton />
      </div>
    </div>
  );
};

export default AuthWrapper;
