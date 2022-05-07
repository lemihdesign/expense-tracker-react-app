import incomeIcon from "../../../assets/icons/Income.svg";

import classes from "./IncomeHistoryItem.module.css";

const IncomeHistoryItem = (props) => {
  const { money, budgetAfterIncome, date } = props;
  return (
    <li className={classes["income-item"]}>
      <div>
        <div>
          <img src={incomeIcon} alt="income icon" />
          <p>Income</p>
        </div>
        <p>{date}</p>
      </div>
      <div>
        {money.toFixed(2)} {budgetAfterIncome.toFixed(2)}
      </div>
    </li>
  );
};

export default IncomeHistoryItem;
