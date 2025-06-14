// src/features/notification/hooks/useNotification.ts

import { useAppSelector, useAppDispatch } from '@/store';
import { addNotification, removeNotification, removeAllNotifications } from './../notificationSlice';

interface NotificationPayload {
  header?: string;
  content: string;
  link?: string;
  autoClose?: number;
  dismibble?: boolean;
}

export const useNotification = () => {
  const dispatch = useAppDispatch();
  const { notifications } = useAppSelector((state) => state.notification);

  return {
    notifications,

    showNotification: (notification: NotificationPayload) => {
      dispatch(addNotification(notification));
    },

    clearNotification: (id: string) => {
      dispatch(removeNotification(id));
    },

    clearAllNotifications: () => {
      dispatch(removeAllNotifications());
    },
  };
};
