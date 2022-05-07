import { useSelector } from "react-redux";

import Budget from "../../components/Dashboard/Budget/Budget";
import TopBar from "../../components/Dashboard/Top Bar/TopBar";
import Navigation from "../../components/Layout/Navigation";
import Instruction from "../../components/UI/Instruction";
import Wrapper from "../../components/Layout/Wrapper";
import ToggleBudget from "../../components/Dashboard/Budget/ToggleBudget/ToggleBudget";

import classes from "./Main.module.css";
import { Fragment } from "react";

const Main = () => {
  const isInstructionVisible = useSelector(
    (state) => state.dashboard.instructionVisibility
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
        </Fragment>
      )}
    </div>
  );
};

export default Main;
