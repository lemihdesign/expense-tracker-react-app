import { useSelector } from "react-redux";

import Budget from "../../components/Dashboard/Budget/Budget";
import TopBar from "../../components/Dashboard/Top Bar/TopBar";
import Navigation from "../../components/Layout/Navigation";
import Instruction from "../../components/UI/Instruction";
import ToggleBudget from "../../components/Dashboard/Budget/ToggleBudget/ToggleBudget";

import classes from "./Main.module.css";
import { Fragment } from "react";
import Expenses from "../../components/Dashboard/Expenses/Expenses";
import IncomesHistory from "../../components/Dashboard/Incomes/IncomesHistory";

const Main = () => {
  const isInstructionVisible = useSelector(
    (state) => state.dashboard.instructionVisibility
  );

  const toggleBudgetValue = useSelector(
    (state) => state.dashboard.budgetToggle
  );

  return (
    <div className={classes["dashboard-main"]}>
      <TopBar />
      <Navigation />
      {isInstructionVisible && <Instruction />}
      {!isInstructionVisible && (
        <Fragment>
          <Budget />
          <ToggleBudget />
          {toggleBudgetValue && <IncomesHistory />}
          {!toggleBudgetValue && <Expenses />}
        </Fragment>
      )}
    </div>
  );
};

export default Main;
