// src/features/notification/components/NotificationContainer.tsx

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNotification } from './../hooks/useNotification';

const NotificationContainer = () => {
  const { notifications, clearNotification } = useNotification();

  useEffect(() => {
    notifications.forEach((notification) => {
      if (notification.autoClose) {
        const timeout = setTimeout(() => {
          clearNotification(notification.id);
        }, notification.autoClose);

        return () => clearTimeout(timeout);
      }
    });
  }, [notifications]);

  return (
    <div className="fixed top-4 right-4 space-y-2 z-50">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-lg rounded-lg p-4 w-[300px]"
          >
            {notification.header && <h3 className="text-lg font-semibold mb-1">{notification.header}</h3>}
            <p className="text-sm text-gray-700 dark:text-gray-300">{notification.content}</p>

            {notification.link && (
              <a
                href={notification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-sm mt-1 inline-block"
              >
                Learn more
              </a>
            )}

            {notification.dismissible && (
              <button
                onClick={() => clearNotification(notification.id)}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-sm"
              >
                ✕
              </button>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default NotificationContainer;
