import { createSlice } from "@reduxjs/toolkit";

const initialDashboardState = {
  instructionVisibility: localStorage.getItem("instruction")
    ? JSON.parse(localStorage.getItem("instruction"))
    : true,
  budget: localStorage.getItem("budget")
    ? JSON.parse(localStorage.getItem("budget"))
    : 0,
  incomes: localStorage.getItem("incomes")
    ? JSON.parse(localStorage.getItem("incomes"))
    : [],
  expenses: localStorage.getItem("expenses")
    ? JSON.parse(localStorage.getItem("expenses"))
    : [],
  budgetToggle: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialDashboardState,
  reducers: {
    hideInstruction(state, action) {
      state.instructionVisibility = action.payload;
      localStorage.setItem(
        "instruction",
        JSON.stringify(state.instructionVisibility)
      );
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
      localStorage.setItem("budget", JSON.stringify(state.budget));
      localStorage.setItem("incomes", JSON.stringify(state.incomes));
    },
    toggleBudgetHandler(state) {
      state.budgetToggle = !state.budgetToggle;
    },
    addExpense(state, action) {
      state.expenses.push(action.payload);
      localStorage.setItem("expenses", JSON.stringify(state.expenses));
    },
  },
});

export const dashboardActions = dashboardSlice.actions;

export default dashboardSlice;
