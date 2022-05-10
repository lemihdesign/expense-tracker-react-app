import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import useInput from "../../../hooks/use-input";

import classes from "./Expenses.module.css";

import checkIcon from "../../../assets/icons/check.svg";
import { dashboardActions } from "../../../store/dashboard-slice";
import ExpenseItem from "./ExpenseItem";
import ChartBar from "../ChartBar/ChartBar";
import LastTransactions from "../Budget/Last Transactions/LastTransactions";

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

  const chartData = expensesList.map((expense) => ({
    price: expense.price,
    label: expense.type,
  }));

  prices.forEach((price) => {
    totalPrice += Number(price);
  });

  const dispatch = useDispatch();

  const formVisibleHandler = () => {
    setIsFormVisible(!isFormVisible);
  };

  let formIsValid = false;

  if (expenseNameIsValid && expensePriceIsValid && expenseDescriptionIsValid)
    formIsValid = true;

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) return;

    let currentHour = new Date().getHours();
    if (currentHour < 10) currentHour = "0" + currentHour;
    let currentMinutes = new Date().getMinutes();
    if (currentMinutes < 10) currentMinutes = "0" + currentMinutes;

    const currentTime = currentHour + ":" + currentMinutes;

    const expenseItem = {
      name: expenseNameValue,
      price: expensePriceValue,
      type: expenseTypeValue,
      description: expenseDescriptionValue,
      hour: currentTime,
    };

    dispatch(dashboardActions.addExpense(expenseItem));
    dispatch(dashboardActions.reduceBudget(Number(expensePriceValue)));
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
        <>
          <div className={classes["top-content"]}>
            {<ChartBar chartData={chartData} totalPrice={totalPrice} />}
            <div className={classes["last-transactions"]}>
              <p className={classes["last-transactions-header"]}>
                New Transactions
              </p>
              <ul>
                {expensesList.slice(0, 5).map((expense) => (
                  <LastTransactions
                    name={expense.name}
                    price={expense.price}
                    type={expense.type}
                    description={expense.description}
                    hour={expense.hour}
                  />
                ))}
              </ul>
            </div>
            <div className={classes["add-expenses"]}>
              <p className={classes["add-expenses-label"]}>Actions</p>
              <p className={classes["add-expenses-history"]}>
                Your history includes {totalOperations} completed operations.
              </p>
              <button
                onClick={formVisibleHandler}
                className={classes["add-new-expense-btn"]}
              >
                Add New Expense
              </button>
            </div>
          </div>
          <div className={classes["full-expenses-container"]}>
            <div className={classes["summary-container"]}>
              <p className={classes["expenses-label"]}>
                Full Operations History
              </p>
            </div>
            <ul>
              {expensesList.map((expense) => (
                <ExpenseItem
                  name={expense.name}
                  price={expense.price}
                  type={expense.type}
                  description={expense.description}
                  hour={expense.hour}
                />
              ))}
            </ul>
          </div>
        </>
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
          >
            <option value="" disabled>
              Choose type
            </option>
            <option value="food">Food</option>
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
          >
            <option value="" disabled>
              Choose type
            </option>
            <option value="food">Food</option>
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
