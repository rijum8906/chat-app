import React, { ReactNode, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faExclamationCircle, faExclamationTriangle, faInfoCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

type AlertType = "success" | "error" | "warning" | "info";

interface AlertProps {
  type: AlertType;
  message: ReactNode;
  dismissible?: boolean;
  autoClose?: number;
  onClose?: () => void; 
}

const Alert: React.FC<AlertProps> = ({ type, message, dismissible = false, autoClose = 3000, onClose = () => {} }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

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

  useEffect(() => {
    if (autoClose) {
      const timeout = setTimeout(() => handleClose(), autoClose);
      return () => clearTimeout(timeout);
    }
  }, [autoClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -15 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={`p-4 rounded-lg w-full mx-auto shadow-md flex justify-between items-center ${alertClasses[type]}`}
          role="alert"
        >
          <div className="flex items-center">
            <FontAwesomeIcon icon={iconMap[type]} className="text-xl mr-2" />
            <p className="text-md font-medium">{message}</p>
          </div>

          {dismissible && (
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              onClick={handleClose}
              aria-label="Close Alert"
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl" />
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;