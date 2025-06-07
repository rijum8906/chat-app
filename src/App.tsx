import { AlertContainer } from '@/features/alert';
import { useEffect } from 'react';
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
  const { isLoading, user, isOAuthInitialized, attempts, passwordAuth, oAuth } = useAuth();
  
  useEffect(() => {
    oAuth.renderGoogleAuthByButton(document.getElementById('google_auth_btn'),{
      theme: 'blue'
    });
    return () => {
      
    }
  }, [])
  

  const handleSignin = async () => {
    passwordAuth.signIn({
      username: 'demo',
      password: 'demopass',
    });
  };
  const handleSignup = async () => {
    passwordAuth.signUp({
      username: 'demo',
      password: 'demopass',
    });
  };
  const handleGoogleAuth = () => {
    oAuth.promptGoogleAuth();
  }

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
      <button
        disabled={isLoading}
        className="px-5 py-2 bg-violet-600 text-white m-10 rounded-md"
        onClick={handleGoogleAuth}
      >
        Demo Google Auth
      </button>
      <button id='google_auth_btn'>
      Signin With Google Button
      </button>
    </>
  );
};
