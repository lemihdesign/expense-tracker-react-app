const ToDoItem = (props) => {
  const { name, description, steps } = props;

  const stepsList = steps.map((step) => <li key={step.id}>{step.text}</li>);

  console.log(steps);
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <ul>{stepsList}</ul>
    </div>
  );
};

export default ToDoItem;
