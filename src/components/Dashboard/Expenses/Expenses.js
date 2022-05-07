import { useSelector } from "react-redux";

import classes from "./Expenses.module.css";

import checkIcon from "../../../assets/icons/check.svg";
import costIcon from "../../../assets/icons/cost.svg";

const Expenses = () => {
  const expensesList = useSelector((state) => state.dashboard.expenses);
  const hasItems = expensesList.length > 0;

  let content;
  if (hasItems) {
    content = <p>Expenses</p>;
  } else {
    content = (
      <div className={classes["empty-expenses-container"]}>
        <img src={checkIcon} alt="checkIcon" />
        <p>You have no expense history.</p>
      </div>
    );
  }

  return (
    <div className={classes["expenses-container"]}>
      <div className={classes["expenses-header"]}>
        <p>Expenses</p>
      </div>
      {content}
    </div>
  );
};

export default Expenses;
