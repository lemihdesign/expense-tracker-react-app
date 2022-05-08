import incomeIcon from "../../../assets/icons/Income.svg";

import classes from "./IncomeHistoryItem.module.css";

const IncomeHistoryItem = (props) => {
  const { money, budgetAfterIncome, date } = props;
  return (
    <li className={classes["income-item"]}>
      <div className={classes["income-item-container"]}>
        <div className={classes["income-item-header"]}>
          <div className={classes["label"]}>
            <img src={incomeIcon} alt="income icon" />
            <p>Income</p>
          </div>
          <p className={classes.date}>{date}</p>
        </div>
      </div>
      <div>
        <p className={classes["income-value"]}>+ ${money.toFixed(2)}</p>
        <p className={classes["budget-after-income-value"]}>
          Budget after income: ${budgetAfterIncome.toFixed(2)}
        </p>
      </div>
    </li>
  );
};

export default IncomeHistoryItem;
