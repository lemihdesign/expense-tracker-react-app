import { useSelector, useDispatch } from "react-redux";

import classes from "./ToggleBudget.module.css";
import expenseIcon from "../../../../assets/icons/Expense.svg";
import icomeIcon from "../../../../assets/icons/Income.svg";
import { dashboardActions } from "../../../../store/dashboard-slice";

const ToggleBudget = () => {
  const toggleBudgetValue = useSelector(
    (state) => state.dashboard.toggleBudget
  );
  const dispatch = useDispatch();

  const toggleBudgetHandler = () => {
    dispatch(dashboardActions.toggleBudgetHandler());
  };

  return (
    <div className={classes["toggle-budget-section"]}>
      <label className={classes.switch}>
        <div className={classes["placeholders"]}>
          <p>
            <img src={expenseIcon} alt="ExpenseIcon" />
            Expense
          </p>
          <p>
            <img src={icomeIcon} alt="ExpenseIcon" /> Income
          </p>
        </div>
        <input
          type="checkbox"
          checked={toggleBudgetValue}
          onChange={toggleBudgetHandler}
        />
        <span className={classes["slider"]}></span>
      </label>
    </div>
  );
};

export default ToggleBudget;
