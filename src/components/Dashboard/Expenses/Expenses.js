import { Fragment, useState } from "react";
import { useSelector } from "react-redux";

import useInput from "../../../hooks/use-input";

import classes from "./Expenses.module.css";

import checkIcon from "../../../assets/icons/check.svg";

const Expenses = () => {
  const {
    value: expenseNameValue,
    hasError: expenseNameHasError,
    isValid: expenseNameIsValid,
    valueChangeHandler: expenseNameChangeHandler,
    blurChangeHandler: expenseNameBlurChangeHandler,
    reset: expenseNameReset,
  } = useInput((value) => value.trim() !== "" && value.trim().length > 3);

  const {
    value: expensePriceValue,
    hasError: expensePriceHasError,
    isValid: expensePriceIsValid,
    valueChangeHandler: expensePriceChangeHandler,
    blurChangeHandler: expensePriceBlurChangeHandler,
    reset: expensePriceReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: expenseTypeValue,
    hasError: expenseTypeHasError,
    isValid: expenseTypeIsValid,
    valueChangeHandler: expenseTypeChangeHandler,
    blurChangeHandler: expenseTypeBlurChangeHandler,
    reset: expenseTypeReset,
  } = useInput((value) => value.trim() !== "");

  const [isFormVisible, setIsFormVisible] = useState(false);

  const expensesList = useSelector((state) => state.dashboard.expenses);
  const hasItems = expensesList.length > 0;

  const formVisibleHandler = () => {
    setIsFormVisible(!isFormVisible);
  };

  let formIsValid = false;

  if (expenseNameIsValid && expensePriceIsValid && expenseTypeIsValid)
    formIsValid = true;

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
          <input
            type="text"
            id="expense-name"
            value={expenseNameValue}
            onChange={expenseNameChangeHandler}
            onBlur={expenseNameBlurChangeHandler}
          />
          {expenseNameHasError && (
            <p className={classes["error"]}>
              Please enter a valid expense name.
            </p>
          )}
          <label htmlFor="expense-price">Expense Price</label>
          <input
            type="number"
            id="expense-price"
            value={expensePriceValue}
            onChange={expensePriceChangeHandler}
            onBlur={expensePriceBlurChangeHandler}
          />
          {expensePriceHasError && (
            <p className={classes["error"]}>
              Please enter a valid expense price.
            </p>
          )}
          <label htmlFor="expense-type">Expense Type</label>
          <select
            name="expense-type"
            id="expense-type"
            value={expenseTypeValue}
            onChange={expenseTypeChangeHandler}
            onBlur={expenseTypeBlurChangeHandler}
          >
            <option value="food" selected>
              Food
            </option>
            <option value="education">Education</option>
            <option value="travel">Travel</option>
            <option value="shopping">Shopping</option>
          </select>
          {expenseTypeHasError && (
            <p className={classes["error"]}>
              Please enter a valid expense type.
            </p>
          )}
          <button disabled={!formIsValid} type="submit">
            Add Expense
          </button>
        </form>
      );
    }
  }

  return <div className={classes["expenses-container"]}>{content}</div>;
};

export default Expenses;
