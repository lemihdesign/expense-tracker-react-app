import { useDispatch } from "react-redux";

import { toDoActions } from "../../../store/to-do-slice";

import classes from "./ToDoItem.module.css";

const ToDoItem = (props) => {
  const { id, name, description, steps } = props;
  const dispatch = useDispatch();

  const stepsList = steps.map((step) => (
    <li key={step.id} className={classes["task-list-item"]}>
      <i className="fa-solid fa-check"></i>
      {step.text}
    </li>
  ));

  const deleteTask = (taskId) => {
    dispatch(toDoActions.deleteTask(taskId));
  };

  return (
    <div className={classes["task-box"]}>
      <p className={classes["task-name"]}>{name}</p>
      <p className={classes["task-description"]}>
        Główny cel zadania: {description}
      </p>
      <ul className={classes["task-list"]}>{stepsList}</ul>
      <button onClick={() => deleteTask(id)}>Usuń</button>
      <button>Zakończ</button>
    </div>
  );
};

export default ToDoItem;
