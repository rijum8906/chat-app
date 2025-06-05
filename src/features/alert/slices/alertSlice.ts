import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { uid } from '@/utils/uid'

interface Alert {
  id: string | null;
  message: string;
  autoClose: number;
}

interface AlertState {
  alerts: Alert[];
}

const initialState: AlertState = {
  alerts: [],
};

const alertSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    addAlert: (state, action: PayloadAction<Alert>) => {
      state.alerts.push({id: uid() ,...action.payload});
    },
    removeAlert: (state, action: PayloadAction<string>) => {
      state.alerts = state.alerts.filter((alert) => alert.id !== action.payload);
    },
    removeAllAlerts: (state) => {
      state.alerts = [];
    },
  },
});

export const { addAlert, removeAlert, removeAllAlerts } = alertSlice.actions;
export default alertSlice.reducer;