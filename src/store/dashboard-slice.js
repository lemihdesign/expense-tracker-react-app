import { createSlice } from "@reduxjs/toolkit";

const initialDashboardState = {
  instructionVisibility: true,
  budget: 2,
  expenses: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialDashboardState,
  reducers: {
    hideInstruction(state, action) {
      state.instructionVisibility = action.payload;
    },
    changeBudget(state, action) {
      state.budget = state.budget + action.payload;
    },
  },
});

export const dashboardActions = dashboardSlice.actions;

export default dashboardSlice;
