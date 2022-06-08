import { createSlice } from "@reduxjs/toolkit";

const initialToDoState = {
  createTaskFormToggle: false,
  toDoItems: localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [],
};

const toDoSlice = createSlice({
  name: "todo",
  initialState: initialToDoState,
  reducers: {
    createTaskFormToggleHandler(state) {
      state.createTaskFormToggle = !state.createTaskFormToggle;
    },
    addNewTask(state, action) {
      state.toDoItems.push(action.payload);
      localStorage.setItem("todo", JSON.stringify(state.toDoItems));
    },
  },
});

export const toDoActions = toDoSlice.actions;

export default toDoSlice;
