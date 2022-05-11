import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./dashboard-slice";
import formSlice from "./form-slice";
import toDoSlice from "./to-do-slice";

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    dashboard: dashboardSlice.reducer,
    todo: toDoSlice.reducer,
  },
});

export default store;
