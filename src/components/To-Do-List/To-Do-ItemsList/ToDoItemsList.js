import { useParams } from "react-router";
import { useSelector } from "react-redux";

import CreateTaskForm from "../Form/CreateTaskForm";
import ToDoItem from "./ToDoItem";

const ToDoItemsList = () => {
  const createFormToggled = useSelector(
    (state) => state.todo.createTaskFormToggle
  );

  const toDoItems = useSelector((state) => state.todo.toDoItems);

  const params = useParams();
  const filterOption = params.filterTask;

  let content = toDoItems
    .filter((item) => item.type === filterOption)
    .map((item) => (
      <ToDoItem
        id={item.id}
        name={item.name}
        description={item.description}
        steps={item.steps}
      />
    ));

  return (
    <div>
      {createFormToggled && <CreateTaskForm />}
      {!createFormToggled && content}
    </div>
  );
};

export default ToDoItemsList;
