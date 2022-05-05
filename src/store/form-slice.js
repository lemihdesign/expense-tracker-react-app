import { createSlice } from "@reduxjs/toolkit";

const initialFormState = { name: "" };

const formSlice = createSlice({
  name: "form",
  initialState: initialFormState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
  },
});

export const formActions = formSlice.actions;

export default formSlice;
