import { useSelector } from "react-redux";

import classes from "./IncomesHistory.module.css";

import checkIcon from "../../../assets/icons/check.svg";

const IncomesHistory = () => {
  const incomesList = useSelector((state) => state.dashboard.incomes);
  const hasItems = incomesList.length > 0;

  let content;
  if (hasItems) {
    content = <p>Incomes</p>;
  } else {
    content = (
      <div className={classes["empty-expenses-container"]}>
        <img src={checkIcon} alt="checkIcon" />
        <p>You have no incomes history.</p>
      </div>
    );
  }

  return <div className={classes["expenses-container"]}>{content}</div>;
};

export default IncomesHistory;
