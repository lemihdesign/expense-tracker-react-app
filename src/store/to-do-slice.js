import { createSlice } from "@reduxjs/toolkit";

const initialToDoState = { createTaskFormToggle: false, toDoItems: [] };

const toDoSlice = createSlice({
  name: "todo",
  initialState: initialToDoState,
  reducers: {
    createTaskFormToggleHandler(state) {
      state.createTaskFormToggle = !state.createTaskFormToggle;
    },
    addNewTask(state, action) {
      state.toDoItems.push(action.payload);
    },
  },
});

export const toDoActions = toDoSlice.actions;

export default toDoSlice;
