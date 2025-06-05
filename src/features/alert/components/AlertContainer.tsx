import Alert from './Alert';
import { useAppSelector } from '@/store';

const AlertContainer = () => {
  const { alerts } = useAppSelector((state) => state.alert);
  
  return(
    <div>
      {
        alerts.map((alert) => (
          <Alert key={alert.id} dismissble type={alert.type} message={alert.message} /> 
        ))
      }
    </div>
  )
}

export default AlertContainer;