import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import type { ReactNode } from 'react';
import { Typography } from '@/components/ui/typography';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SignInFooter = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <Typography variant="p">Don&apos;t have an account?</Typography>
      <Link to="/auth/signup">
        <Button variant="link" className="p-0 h-auto text-sm">
          Sign up
        </Button>
      </Link>
    </div>
  );
};

const SignUpFooter = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <Typography variant="p">Already have an account?</Typography>
      <Link to="/auth/signin">
        <Button variant="link" className="p-0 h-auto text-sm">
          Sign in
        </Button>
      </Link>
    </div>
  );
};

interface Props {
  children: ReactNode;
  signin?: boolean;
  signup?: boolean;
}

const AuthFormWrapper = ({ children, signin, signup }: Props) => {
  return (
    <Card className="w-11/12 sm:w-[400px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
      <CardHeader>
        <Typography variant="h1" className="text-center">
          {signin ? 'Sign In' : 'Sign Up'}
        </Typography>
      </CardHeader>

      <CardContent>{children}</CardContent>

      <CardFooter className="flex justify-center">
        {signin && <SignInFooter />}
        {signup && <SignUpFooter />}
      </CardFooter>
    </Card>
  );
};

export default AuthFormWrapper;
