import { useAppDispatch, useAppSelector } from '@/store';
import { authSuccess, authFailure, logout, startLoading } from '@/features/auth/slices/authSlice';
import AlertContainer from '@/features/alert/components/AlertContainer';
import useAlert from '@/features/alert/hooks/useAlert';

function App() {
  const { attempts, user } = useAppSelector((state) => state.auth);
  const { showAlert } = useAlert();

  const onClick = () => {
    showAlert({
      message: 'Ho this is an alert,',
      type: 'success',
    });
  };

  console.log(attempts, user);
  return (
    <>
      App
      <button className="px-5 py-2 bg-violet-600 text-white m-10 rounded-md" onClick={onClick}>
        Show Alert
      </button>
      <AlertContainer />
    </>
  );
}

export default App;
