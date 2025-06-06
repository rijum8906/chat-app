import { AlertContainer } from '@/features/alert';
import { useAuth } from '@/features/auth';

function App() {
  return (
    <>
      <Comp />
      <AlertContainer />
    </>
  );
}

export default App;

const Comp = () => {
  const { signin, isLoading, signup, user, attempts } = useAuth();

  const handleSignin = async () => {
    signin({
      username: 'demo',
      password: 'demopass',
    });
  };
  const handleSignup = async () => {
    signup({
      username: 'demo',
      password: 'demopass',
    });
  };

  console.log('comp loading.');
  return (
    <>
      <button
        disabled={isLoading}
        className="px-5 py-2 bg-violet-600 text-white m-10 rounded-md"
        onClick={handleSignin}
      >
        Demo Signin
      </button>
      <button
        disabled={isLoading}
        className="px-5 py-2 bg-violet-600 text-white m-10 rounded-md"
        onClick={handleSignup}
      >
        Demo Signup
      </button>
    </>
  );
};
