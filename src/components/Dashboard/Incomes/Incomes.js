import { Fragment } from "react";
import { useSelector } from "react-redux";

import classes from "./Incomes.module.css";

const Incomes = (props) => {
  const {
    addMoneyActive,
    showAddMoney,
    moneyValue,
    onShowAddMoneyHandler,
    onHideAddMoneyHandler,
    onChangeBudgetHandler,
    onSaveBudgetHandler,
  } = props;
  const budget = useSelector((state) => state.dashboard.budget);
  let incomesContent;

  if (budget === 0) {
    incomesContent = (
      <Fragment>
        <p className={classes["money"]}>
          <span>$</span>
          {Number(budget).toFixed(2)}
        </p>
        <label htmlFor="income">Add new income</label>
        <input type="number" id="income" />
      </Fragment>
    );
  } else {
    incomesContent = (
      <Fragment>
        <p className={classes["money"]}>
          <span>$</span>
          {Number(budget).toFixed(2)}
        </p>
        <p className={classes["total-budget"]}>Out of ${budget} budgeting.</p>
      </Fragment>
    );
  }

  return (
    <div className={classes["incomes-container"]}>
      <div className={classes["incomes-header"]}>{incomesContent}</div>

      {showAddMoney && (
        <button
          className={classes["add-money-btn"]}
          onClick={onShowAddMoneyHandler}
        >
          <i className="fa-solid fa-plus"></i> Add money
        </button>
      )}
      {addMoneyActive && (
        <Fragment>
          <div className={classes["add-money-section"]}>
            <input
              type="number"
              value={moneyValue}
              onChange={onChangeBudgetHandler}
            />
            <button onClick={onSaveBudgetHandler}>
              <i className="fa-solid fa-check"></i>
            </button>
            <button onClick={onHideAddMoneyHandler}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Incomes;
