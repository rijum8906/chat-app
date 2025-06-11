import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GrGoogle } from 'react-icons/gr';
import { cn } from '@/lib/utils';
import { useAuth } from '@/features/auth';
import { CgSpinner } from 'react-icons/cg';

interface GoogleAuthButtonProps {
  onClick?: () => Promise<void>;
  className?: string;
}

const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({ onClick, className }) => {
  const { oAuth, isLoading } = useAuth();

  const handleClick = async () => {
    await oAuth.promptGoogleAuth();
  };

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading}
      variant="outline"
      className={cn('w-full flex items-center gap-2 text-3xl', className)}
    >
      {isLoading && <CgSpinner className="text-xl animate-spin" />}
      <GrGoogle className="h-20 w-6" />
    </Button>
  );
};

export default GoogleAuthButton;
