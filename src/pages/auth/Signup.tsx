import { AuthFormWrapper, Signup } from '@/features/auth';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <>
      <AuthFormWrapper>
        <Signup />
        <span>Already have an account</span>
        <Button variant="text">
          <Link to="/auth/signin" className="underline text-lg">
            Sign in
          </Link>
        </Button>
      </AuthFormWrapper>
    </>
  );
};

export default SignupPage;
