import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./dashboard-slice";
import formSlice from "./form-slice";

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    dashboard: dashboardSlice.reducer,
  },
});

export default store;
