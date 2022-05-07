import { createSlice } from "@reduxjs/toolkit";

const initialDashboardState = {
  instructionVisibility: true,
  budget: 2,
  incomes: [],
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

      const date = new Date();
      const currentDay = date.toLocaleDateString();
      const currentTime = date.toLocaleTimeString();
      const completeDate = `${currentDay} ${currentTime}`;

      const incomeItem = {
        money: action.payload,
        budgetAfterIncome: state.budget,
        date: completeDate,
      };

      state.incomes.push(incomeItem);
    },
  },
});

export const dashboardActions = dashboardSlice.actions;

export default dashboardSlice;
