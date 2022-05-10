import ToDoHeader from "../To-Do-Header/ToDoHeader";
import ToDoFilter from "../To-Do-Filter/ToDoFilter";

import classes from "./ToDoContainer.module.css";
import ToDoItemsList from "../To-Do-ItemsList/ToDoItemsList";

const ToDoContainer = () => {
  return (
    <div className={classes["to-do-container"]}>
      <ToDoHeader />
      <ToDoFilter />
      <ToDoItemsList />
    </div>
  );
};

export default ToDoContainer;
