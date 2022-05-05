import { useSelector, useDispatch } from "react-redux";

import Wrapper from "../Layout/Wrapper";
import classes from "./Instruction.module.css";

import { dashboardActions } from "../../store/dashboard-slice";

const Instruction = () => {
  const isInstructionVisible = useSelector(
    (state) => state.dashboard.instructionVisibility
  );
  const dispatch = useDispatch();

  const closeInstructionHandler = () => {
    dispatch(dashboardActions.hideInstruction(false));
  };

  const content = (
    <div className={classes["dashboard-main"]}>
      <h2>Let's get started.</h2>
      <p>
        This app can help you manage your home budget and daily chores.
        Everything in your hands, easily accessible, in one place.
      </p>
      <div className={classes.steps}>
        <div className={classes["step-container"]}>
          <div className={classes.step}>
            <span>1</span>
          </div>
          <p>Track your expenses</p>
        </div>
        <p className={classes["step-description"]}>
          You can easly track your expenses. Use special budget section, and
          fill the fields of expenses and incomes. It the easiest way to take
          care of your home budget.
        </p>
        <div className={classes["step-container"]}>
          <div className={classes.step}>
            <span>2</span>
          </div>
          <p>Create your daily tasks</p>
        </div>
        <p className={classes["step-description"]}>
          Do you have a problem with remembering everyday events and you are
          bored with the traditional notebook? Try the option of creating daily
          boards with duties that will easily remind you of everything important
          during the day.
        </p>
      </div>
      <button onClick={closeInstructionHandler}>Got it!</button>
    </div>
  );

  return <Wrapper>{isInstructionVisible && content}</Wrapper>;
};

export default Instruction;
