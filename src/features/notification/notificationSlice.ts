// src/features/notification/notificationSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { uid } from '@/utils/uid';

// 1. Notification type
export interface Notification {
  id: string;
  header?: string;
  content: string;
  dismissible?: boolean;
  link?: string;
  autoClose?: number;
}

// 2. Slice state type
interface NotificationState {
  notifications: Notification[];
}

// 3. Initial state
const initialState: NotificationState = {
  notifications: [],
};

// 4. Create slice
const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Omit<Notification, 'id'>>) => {
      state.notifications.push({
        id: uid(),
        ...action.payload,
      });
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter((n) => n.id !== action.payload);
    },
    removeAllNotifications: (state) => {
      state.notifications = [];
    },
  },
});

// 5. Export actions
export const { addNotification, removeNotification, removeAllNotifications } = notificationSlice.actions;

// 6. Export reducer
export default notificationSlice.reducer;
