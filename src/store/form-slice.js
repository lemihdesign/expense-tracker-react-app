import { createSlice } from "@reduxjs/toolkit";

const initialFormState = {
  name: localStorage.getItem("name")
    ? JSON.parse(localStorage.getItem("name"))
    : [],
};

const formSlice = createSlice({
  name: "form",
  initialState: initialFormState,
  reducers: {
    addProfile(state, action) {
      state.name.push(action.payload);
      localStorage.setItem("name", JSON.stringify(state.name));
    },
  },
});

export const formActions = formSlice.actions;

export default formSlice;
