import { useSelector } from "react-redux";

import IncomeHistoryItem from "./IncomeHistoryItem";

import classes from "./IncomesHistory.module.css";

import checkIcon from "../../../assets/icons/check.svg";

const IncomesHistory = () => {
  const incomesList = useSelector((state) => state.dashboard.incomes);
  const hasItems = incomesList.length > 0;

  let content;
  if (hasItems) {
    content = (
      <div className={classes["incomes"]}>
        <p className={classes["incomes-label"]}>Incomes History</p>
        <ul>
          {incomesList.map((income) => (
            <IncomeHistoryItem
              money={income.money}
              budgetAfterIncome={income.budgetAfterIncome}
              date={income.date}
            />
          ))}
        </ul>
      </div>
    );
  } else {
    content = (
      <div className={classes["empty-incomes-container"]}>
        <img src={checkIcon} alt="checkIcon" />
        <p>You have no incomes history.</p>
      </div>
    );
  }

  return <div className={classes["incomes-container"]}>{content}</div>;
};

export default IncomesHistory;
