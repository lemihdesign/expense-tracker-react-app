import { useParams } from "react-router";

const ToDoItemsList = () => {
  const params = useParams();
  const filterOption = params.filterTask;
  let content = "";

  if (filterOption === "job") content = <p>Job Items</p>;
  if (filterOption === "all") content = <p>All Items</p>;
  if (filterOption === "cleaning") content = <p>Cleaning Items</p>;
  if (filterOption === "studying") content = <p>Studying Items</p>;

  return <div>{content}</div>;
};

export default ToDoItemsList;
