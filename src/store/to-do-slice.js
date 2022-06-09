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
    deleteTask(state, action) {
      /* const deletedItem = state.toDoItems.filter(
        (item) => item.id === action.payload
      );
      state.toDoItems.pop(deletedItem); */
      const newTodos = state.toDoItems.filter(
        (item) => item.id !== action.payload
      );
      state.toDoItems = newTodos;
      localStorage.setItem("todo", JSON.stringify(state.toDoItems));
    },
    completeTask(state, action) {},
  },
});

export const toDoActions = toDoSlice.actions;

export default toDoSlice;
