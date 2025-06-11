import { useAppDispatch } from '@/store';
import { addAlert, removeAlert, removeAllAlerts } from './../slice/alertSlice';

interface AlertPayload {
  message: string;
  type?: 'success' | 'error' | 'warning';
}

const useAlert = () => {
  const dispatch = useAppDispatch();

  return {
    showAlert: (payload: AlertPayload) => dispatch(addAlert(payload)),
    removeAlert: (id: string) => dispatch(removeAlert(id)),
    clearAlerts: () => dispatch(removeAllAlerts()),
  };
};

export default useAlert;
