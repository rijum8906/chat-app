// index.ts for cleaner imports
import useAlert from './hooks/useAlert';
import Alert from './components/Alert';
import AlertContainer from './components/AlertContainer';
import { addAlert, removeAlert, removeAllAlerts } from './slices/alertSlice';

export { useAlert, Alert, AlertContainer, addAlert, removeAlert, removeAllAlerts };
