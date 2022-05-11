import classes from "./CreateTaskForm.module.css";

const CreateTaskForm = () => {
  return (
    <div className={classes["form-container"]}>
      <form>
        {/*
                Nazwa Taska
                Typ Taska
                Data rozpoczęcia Taska - pobierana automatycznie, aktualna data
                Opis Taska
                Zadania do wykonania (?) - możliwość robienia podpunktów (stepów), które po ukończeniu można odznaczyć i tym samym usunąć z listy, lub zarchiwizować jako już wykonane
                 */}
        <label htmlFor="taskName">Task Name</label>
        <input type="text" id="taskName" />
        <label htmlFor="taskType">Task Type</label>
        <input type="text" id="taskType" />
        <label htmlFor="taskDescription">Task Description</label>
        <input type="text" id="taskDescription" />
        <label htmlFor="taskSteps">Steps to be perfomed</label>
        <input type="text" id="taskSteps" />
      </form>
    </div>
  );
};

export default CreateTaskForm;
