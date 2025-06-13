// src/features/notification/hooks/useNotification.ts

import { useAppSelector, useAppDispatch } from '@/store';
import type { Notification } from './../notificationSlice';
import { addNotification, removeNotification, removeAllNotifications } from './../notificationSlice';

export const useNotification = () => {
  const dispatch = useAppDispatch();
  const { notifications } = useAppSelector((state) => state.notification);

  return {
    notifications,

    showNotification: (notification: Omit<Notification, 'id'>) => {
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