import { useState } from "react";
import { useSelector } from "react-redux";

import classes from "./Expenses.module.css";

import checkIcon from "../../../assets/icons/check.svg";
import { Fragment } from "react";

const Expenses = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const expensesList = useSelector((state) => state.dashboard.expenses);
  const hasItems = expensesList.length > 0;

  const formVisibleHandler = () => {
    setIsFormVisible(!isFormVisible);
  };

  let content;
  if (hasItems) {
    content = (
      <Fragment>
        <p>Total Expenses: $33</p>
        <p>Total operations: 10</p>
        <p>Operations history</p>
        <ul>
          {expensesList.map((expense) => (
            <li>Expense 1</li>
          ))}
        </ul>
      </Fragment>
    );
  } else {
    if (!isFormVisible) {
      content = (
        <div className={classes["empty-expenses-container"]}>
          <img src={checkIcon} alt="checkIcon" />
          <p>You have no expense history.</p>
          <button onClick={formVisibleHandler}>Add New Expense</button>
        </div>
      );
    } else {
      content = (
        <form>
          <label htmlFor="expense-name">Expense Name</label>
          <input type="text" id="expense-name" />
          <label htmlFor="expense-price">Expense Price</label>
          <input type="number" id="expense-price" />
          <label htmlFor="expense-type">Expense Type</label>
          <select name="expense-type" id="expense-type">
            <option value="food">Food</option>
            <option value="education">Education</option>
            <option value="travel">Travel</option>
            <option value="shopping">Shopping</option>
          </select>
          <button type="submit">Add Expense</button>
        </form>
      );
    }
  }

  return <div className={classes["expenses-container"]}>{content}</div>;
};

export default Expenses;
