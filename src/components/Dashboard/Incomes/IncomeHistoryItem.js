import { useState } from "react";

import incomeIcon from "../../../assets/icons/Income.svg";

import classes from "./IncomeHistoryItem.module.css";

const IncomeHistoryItem = (props) => {
  const { money, budgetAfterIncome, date, time } = props;
  const [isToggled, setIsToggled] = useState(false);

  const toggleDetailsHandler = () => {
    setIsToggled(!isToggled);
  };

  return (
    <li
      className={
        isToggled ? classes["income-item--active"] : classes["income-item"]
      }
    >
      <div className={classes["income-item-top"]}>
        <div className={classes["income-item-container"]}>
          <div className={classes["income-item-header"]}>
            <img src={incomeIcon} alt="Income icon" />
            <p>Income</p>
          </div>
          <div className={classes["income-item-price"]}>
            <span>+${Number(money).toFixed(2)}</span>
          </div>
          <div className={classes["income-item-date"]}>
            <span className={classes["time"]}>
              <i className="fa-solid fa-clock"></i> {time}
            </span>
          </div>
          <div className={classes["income-item-budget"]}>
            <span className={classes["budgetAfterIncome"]}>
              ${Number(budgetAfterIncome).toFixed(2)}
            </span>
          </div>
          <div className={classes["more-btn"]}>
            <i
              className="fa-solid fa-angle-down"
              onClick={toggleDetailsHandler}
            ></i>
          </div>
        </div>
      </div>
      <div className={classes["incomes-item-bottom"]}>
        <div className={classes["incomes-details"]}>
          <p className={classes["incomes-details-budget"]}>
            Budget After Income: ${Number(budgetAfterIncome).toFixed(2)}
          </p>
          <p>Operation date: {date}</p>
        </div>
      </div>
    </li>
  );
};

export default IncomeHistoryItem;
