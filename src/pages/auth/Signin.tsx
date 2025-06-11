import { AuthFormWrapper, Signin } from '@/features/auth';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SigninPage = () => {
  return (
    <>
      <AuthFormWrapper>
        <Signin />
        <span>Don't have an account</span>
        <Button variant="text">
          <Link to="/auth/signup" className="underline text-lg">
            Sign up
          </Link>
        </Button>
      </AuthFormWrapper>
    </>
  );
};

export default SigninPage;
