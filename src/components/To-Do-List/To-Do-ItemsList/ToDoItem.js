import classes from "./ToDoItem.module.css";

const ToDoItem = (props) => {
  const { name, description, steps } = props;

  const stepsList = steps.map((step) => (
    <li key={step.id} className={classes["task-list-item"]}>
      <i className="fa-solid fa-check"></i>
      {step.text}
    </li>
  ));

  console.log(steps);
  return (
    <div className={classes["task-box"]}>
      <p className={classes["task-name"]}>{name}</p>
      <p className={classes["task-description"]}>
        Główny cel zadania: {description}
      </p>
      <ul className={classes["task-list"]}>{stepsList}</ul>
    </div>
  );
};

export default ToDoItem;
