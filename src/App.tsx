import { useAppDispatch, useAppSelector } from '@/store';
import { authSuccess, authFailure, logout, startLoading } from '@/features/auth/slices/authSlice'

function App() {
  const { attempts, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  
  const onClick = () => {
    dispatch(authSuccess({
      user:'Riju'
    }))
  }
  
  console.log(attempts, user)
  return(
    <>
      App
      <button onClick={onClick}>AuthSuccess</button>
    </>
  )
}

export default App
