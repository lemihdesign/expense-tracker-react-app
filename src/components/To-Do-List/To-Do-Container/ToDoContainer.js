import ToDoHeader from "../To-Do-Header/ToDoHeader";
import ToDoFilter from "../To-Do-Filter/ToDoFilter";

import classes from "./ToDoContainer.module.css";

const ToDoContainer = () => {
  return (
    <div className={classes["to-do-container"]}>
      <ToDoHeader />
      <ToDoFilter />
    </div>
  );
};

export default ToDoContainer;
