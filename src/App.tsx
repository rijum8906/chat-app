import { useAppDispatch, useAppSelector } from '@/store';
import { authSuccess, authFailure, logout, startLoading } from '@/features/auth/slices/authSlice';
import AlertContainer from '@/features/alert/components/AlertContainer';
import useAlert from '@/features/alert/hooks/useAlert';

function App() {
  const { attempts, user } = useAppSelector((state) => state.auth);
  const { showAlert } = useAlert();
  
  const onClick = () => {
    showAlert({
      message: "Ho this is an alert,",
      type: "error"
    })
  }
  
  console.log(attempts, user)
  return(
    <>
      App
      <button onClick={onClick}>Show Alert</button>
      <AlertContainer />
    </>
  )
}

export default App
