import SigninForm from '@/features/auth/components/SigninForm';
import AuthFormWrapper from '@/features/auth/components/AuthFormWrapper';

const SigninPage = () => {
  return (
    <AuthFormWrapper signin>
      <SigninForm />
    </AuthFormWrapper>
  );
};

export default SigninPage;
