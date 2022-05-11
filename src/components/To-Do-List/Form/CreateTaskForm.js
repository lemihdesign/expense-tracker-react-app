import { useState } from "react";
import useInput from "../../../hooks/use-input";

import classes from "./CreateTaskForm.module.css";

const CreateTaskForm = () => {
  const [stepsValue, setStepsValue] = useState("");
  const [taskSteps, setTaskSteps] = useState([]);
  let stepId = 1;

  const {
    value: taskNameValue,
    hasError: taskNameHasError,
    isValid: taskNameIsValid,
    valueChangeHandler: taskNameChangeHandler,
    blurChangeHandler: taskNameBlurChangeHandler,
    reset: taskNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: taskTypeValue,
    hasError: taskTypeHasError,
    isValid: taskTypeIsValid,
    valueChangeHandler: taskTypeChangeHandler,
    blurChangeHandler: taskTypeBlurChangeHandler,
    reset: taskTypeReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: taskDescriptionValue,
    hasError: taskDescriptionHasError,
    isValid: taskDescriptionIsValid,
    valueChangeHandler: taskDescriptionChangeHandler,
    blurChangeHandler: taskDescriptionBlurChangeHandler,
    reset: taskDescriptionReset,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (taskNameIsValid && taskTypeIsValid && taskDescriptionIsValid)
    formIsValid = true;

  const changeStepsValueHandler = (e) => {
    setStepsValue(e.target.value);
  };

  const addTaskStep = (e) => {
    e.preventDefault();
    const item = { id: Math.floor(Math.random() * 1024), text: stepsValue };
    setTaskSteps([...taskSteps, item]);
  };

  const stepsContent = taskSteps.map((taskStep) => (
    <li key={taskStep.id}>{taskStep.text}</li>
  ));
  const hasSteps = taskSteps.length > 0;
  const numberOfSteps = taskSteps.length;

  return (
    <div className={classes["form-container"]}>
      <form className={classes["create-task-form"]}>
        {/*
                Nazwa Taska
                Typ Taska
                Data rozpoczęcia Taska - pobierana automatycznie, aktualna data
                Opis Taska
                Zadania do wykonania (?) - możliwość robienia podpunktów (stepów), które po ukończeniu można odznaczyć i tym samym usunąć z listy, lub zarchiwizować jako już wykonane
                 */}
        <p>Create New Task</p>
        <p>Complete the form to create a new task.</p>
        <label htmlFor="taskName">Task Name</label>
        <input
          type="text"
          id="taskName"
          value={taskNameValue}
          onChange={taskNameChangeHandler}
          onBlur={taskNameBlurChangeHandler}
        />
        {taskNameHasError && (
          <p className={classes["error"]}>Please enter a valid task name.</p>
        )}
        <label htmlFor="taskType">Task Type</label>
        <input
          type="text"
          id="taskType"
          value={taskTypeValue}
          onChange={taskTypeChangeHandler}
          onBlur={taskTypeBlurChangeHandler}
        />
        {taskTypeHasError && (
          <p className={classes["error"]}>Please enter a valid task type.</p>
        )}
        <label htmlFor="taskDescription">Task Description</label>
        <input
          type="text"
          id="taskDescription"
          value={taskDescriptionValue}
          onChange={taskDescriptionChangeHandler}
          onBlur={taskDescriptionBlurChangeHandler}
        />
        {taskDescriptionHasError && (
          <p className={classes["error"]}>
            Please enter a valid task description.
          </p>
        )}
        <label htmlFor="taskSteps">Steps to be perfomed</label>
        <div className={classes["steps-input"]}>
          <input
            type="text"
            id="taskSteps"
            value={stepsValue}
            onChange={changeStepsValueHandler}
          />
          <button onClick={addTaskStep}>+</button>
        </div>
        {hasSteps && (
          <div className={classes["steps-list"]}>
            <p>List of your steps</p>
            <p>Number of tasks: {numberOfSteps}</p>
            <ol>{stepsContent}</ol>
          </div>
        )}
        <button
          disabled={!formIsValid}
          className={classes["create-new-task-btn"]}
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
