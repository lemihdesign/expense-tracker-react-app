import classes from "./ToggleBudget.module.css";
import cx from "classnames";

const ToggleBudget = ({ isToggled, onToggle }) => {
  return (
    <div className={classes["toggle-budget-section"]}>
      <label className={classes.switch}>
        <div className={classes["placeholders"]}>
          <p>Expense</p>
          <p>Income</p>
        </div>
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className={classes["slider"]}></span>
      </label>
    </div>
  );
};

export default ToggleBudget;
