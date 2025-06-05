import Alert from "./Alert";
import { useAppSelector } from "@/store";
import useAlert from '@/features/alert/hooks/useAlert';

const AlertContainer = ({ position = "bottom" }) => {
  const { alerts } = useAppSelector((state) => state.alert);
  const { showAlert, removeAlert } = useAlert();
  
  const handleOnClose = (id) => {
    setTimeout(() => removeAlert(id), 200)
  }

  if (alerts.length === 0) return null;

  // Mapping positions to Tailwind CSS classes
  const positionClasses = {
    top: "fixed top-5 left-1/2 -translate-x-1/2",
    bottom: "fixed bottom-5 left-1/2 -translate-x-1/2",
    center: "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div className={`flex flex-col items-center gap-1 w-11/12 m:w-8/12 sm:w-6/12
    ${positionClasses[position]}`}>
      {alerts.map((alert) => (
        <div key={alert.id} className="w-full">
          <Alert dismissible={true} type={alert.type} message={alert.message} autoClose={alert.autoClose || 3000}
          onClose={() => handleOnClose(alert.id)}/>
        </div>
      ))}
    </div>
  );
};

export default AlertContainer;