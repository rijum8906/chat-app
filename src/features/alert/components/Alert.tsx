import React, { ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faExclamationCircle, faExclamationTriangle, faInfoCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

type AlertType = "success" | "error" | "warning" | "info";

interface AlertProps {
  type: AlertType;
  message: ReactNode;
  dismissible?: boolean;
}

const Alert: React.FC<AlertProps> = ({ type, message, dismissible = false }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => setIsVisible(false);

  const alertClasses = {
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
    info: "bg-blue-100 text-blue-800",
  };

  const iconMap = {
    success: faCheckCircle,
    error: faExclamationCircle,
    warning: faExclamationTriangle,
    info: faInfoCircle,
  };

  if (!isVisible) return null;

  return (
    <div className={`p-4 rounded-md shadow-md mb-4 flex items-center ${alertClasses[type]}`} role="alert">
      <p>{message}</p>
      <button
        type="button"
        className="ml-auto text-gray-400 hover:text-gray-600 focus:outline-none"
        onClick={handleClose}
        aria-label="Close Alert"
      >
        <FontAwesomeIcon icon={faTimes} className="text-xl" />
      </button>
    </div>
  );
};

export default React.memo(Alert);