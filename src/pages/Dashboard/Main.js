import { useSelector } from "react-redux";
import classes from "./Main.module.css";

const Main = () => {
  const username = useSelector((state) => state.form.name);
  return (
    <div>
      <p>Hello {username}</p>
    </div>
  );
};

export default Main;
