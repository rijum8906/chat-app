import React, { ReactNode, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';
import { Alert as ShadAlert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

type AlertType = 'success' | 'error' | 'warning' | 'info';

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

  const iconMap = {
    success: <CheckCircle className="h-5 w-5 text-green-600 mt-1" />,
    error: <XCircle className="h-5 w-5 text-red-600 mt-1" />,
    warning: <AlertTriangle className="h-5 w-5 text-yellow-600 mt-1" />,
    info: <Info className="h-5 w-5 text-blue-600 mt-1" />,
  };

  const variantMap = {
    success: 'success',
    error: 'destructive',
    warning: 'warning',
    info: 'default',
  } as const;

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
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <ShadAlert variant={variantMap[type]} className="flex justify-between items-start gap-4 w-full">
            <div className="flex gap-3 items-start">
              {iconMap[type]}
              <div>
                <AlertTitle className="capitalize">{type}</AlertTitle>
                <AlertDescription>{message}</AlertDescription>
              </div>
            </div>

            {dismissible && (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </ShadAlert>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
