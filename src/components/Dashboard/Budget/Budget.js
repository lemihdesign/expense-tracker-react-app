import { Fragment } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Budget.module.css";

import walletIcon from "../../../assets/icons/wallet.svg";
import { dashboardActions } from "../../../store/dashboard-slice";

const Budget = () => {
  const budget = useSelector((state) => state.dashboard.budget);
  const expenses = useSelector((state) => state.dashboard.expenses);

  const dispatch = useDispatch();

  const [showAddMoney, setShowAddMoney] = useState(true);
  const [addMoneyActive, setIsMoneyActive] = useState(false);
  const [moneyValue, setMoneyValue] = useState(budget);

  const showAddMoneyHandler = () => {
    setShowAddMoney(false);
    setIsMoneyActive(true);
  };

  const hideAddMoneyHandler = () => {
    setShowAddMoney(true);
    setIsMoneyActive(false);
  };

  const changeBudgetHandler = (e) => {
    setMoneyValue(e.target.value);
  };

  const saveBudgetHandler = () => {
    dispatch(dashboardActions.changeBudget(moneyValue));
  };

  let incomesContent;

  if (budget === 0) {
    incomesContent = (
      <Fragment>
        <p className={classes["money"]}>${Number(budget).toFixed(2)}</p>
        <label htmlFor="income">Add new income</label>
        <input type="number" id="income" />
      </Fragment>
    );
  } else {
    incomesContent = (
      <p className={classes["money"]}>${Number(budget).toFixed(2)}</p>
    );
  }

  return (
    <div className={classes["budget-section"]}>
      <div className={classes["budget-container"]}>
        <div className={classes["incomes"]}>
          <div className={classes["incomes-container"]}>
            <div className={classes["incomes-header"]}>
              <img src={walletIcon} alt="walletIcon" />
              <p>Wallet</p>
            </div>
            {incomesContent}
            {showAddMoney && (
              <button
                className={classes["add-money-btn"]}
                onClick={showAddMoneyHandler}
              >
                Add money
              </button>
            )}
            {addMoneyActive && (
              <Fragment>
                <div className={classes["add-money-section"]}>
                  <input
                    type="number"
                    value={moneyValue}
                    onChange={changeBudgetHandler}
                  />
                  <button onClick={saveBudgetHandler}>
                    <i className="fa-solid fa-check"></i>
                  </button>
                  <button onClick={hideAddMoneyHandler}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </Fragment>
            )}
          </div>
        </div>
        <div className={classes["expenses"]}></div>
      </div>
    </div>
  );
};

export default Budget;
