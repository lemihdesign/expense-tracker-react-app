import { createSlice } from "@reduxjs/toolkit";

const initialDashboardState = { instructionVisibility: true };

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialDashboardState,
  reducers: {
    hideInstruction(state, action) {
      state.instructionVisibility = action.payload;
    },
  },
});

export const dashboardActions = dashboardSlice.actions;

export default dashboardSlice;
