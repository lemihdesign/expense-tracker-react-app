import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import useInput from "../../../hooks/use-input";

import classes from "./Expenses.module.css";

import checkIcon from "../../../assets/icons/check.svg";
import { dashboardActions } from "../../../store/dashboard-slice";
import ExpenseItem from "./ExpenseItem";

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
    value: expenseDescriptionValue,
    hasError: expenseDescriptionHasError,
    isValid: expenseDescriptionIsValid,
    valueChangeHandler: expenseDescriptionChangeHandler,
    blurChangeHandler: expenseDescriptionBlurChangeHandler,
    reset: expenseDescriptionReset,
  } = useInput((value) => value.trim() !== "" && value.trim().length > 3);

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
  const totalOperations = expensesList.length;
  let totalPrice = 0;

  const prices = expensesList.map((expense) => expense.price);

  prices.forEach((price) => {
    totalPrice += Number(price);
  });

  const dispatch = useDispatch();

  const formVisibleHandler = () => {
    setIsFormVisible(!isFormVisible);
  };

  let formIsValid = false;

  if (
    expenseNameIsValid &&
    expensePriceIsValid &&
    expenseTypeIsValid &&
    expenseDescriptionIsValid
  )
    formIsValid = true;

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) return;

    const expenseItem = {
      name: expenseNameValue,
      price: expensePriceValue,
      type: expenseTypeValue,
      description: expenseDescriptionValue,
    };

    dispatch(dashboardActions.addExpense(expenseItem));
    setIsFormVisible(false);

    expenseNameReset();
    expensePriceReset();
    expenseTypeReset();
    expenseDescriptionReset();
  };

  let content;
  if (hasItems) {
    if (!isFormVisible) {
      content = (
        <div className={classes["full-expenses-container"]}>
          <div className={classes["summary-container"]}>
            <p className={classes["expenses-label"]}>Summary</p>
            <p className={classes["expenses-stats"]}>
              Total Expenses: ${totalPrice}
            </p>
            <p className={classes["expenses-stats"]}>
              Total operations: {totalOperations}
            </p>
            <button onClick={formVisibleHandler}>Add New Expense</button>
            <p className={classes["expenses-label"]}>Operations history</p>
          </div>
          <ul>
            {expensesList.map((expense) => (
              <ExpenseItem
                name={expense.name}
                price={expense.price}
                type={expense.type}
                description={expense.description}
              />
            ))}
          </ul>
        </div>
      );
    } else {
      content = (
        <form onSubmit={submitFormHandler}>
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
          <label htmlFor="expense-description">Expense Description</label>
          <textarea
            id="expense-description"
            value={expenseDescriptionValue}
            onChange={expenseDescriptionChangeHandler}
            onBlur={expenseDescriptionBlurChangeHandler}
          />
          {expenseDescriptionHasError && (
            <p className={classes["error"]}>
              Please enter a valid expense description.
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
        <form onSubmit={submitFormHandler}>
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
          <label htmlFor="expense-description">Expense Description</label>
          <textarea
            id="expense-description"
            value={expenseDescriptionValue}
            onChange={expenseDescriptionChangeHandler}
            onBlur={expenseDescriptionBlurChangeHandler}
          />
          {expenseDescriptionHasError && (
            <p className={classes["error"]}>
              Please enter a valid expense description.
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
