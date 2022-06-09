import { Fragment } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import TopBar from "../../components/Dashboard/Top Bar/TopBar";
import Navigation from "../../components/Layout/Navigation";
import ToDoContainer from "../../components/To-Do-List/To-Do-Container/ToDoContainer";
import Instruction from "../../components/UI/Instruction";
import classes from "./ToDoListPage.module.css";
import "react-toastify/dist/ReactToastify.css";

const ToDoListPage = () => {
  const isInstructionVisible = useSelector(
    (state) => state.dashboard.instructionVisibility
  );

  return (
    <div className={classes["dashboard-budget"]}>
      <TopBar />
      <Navigation />
      {isInstructionVisible && <Instruction />}
      {!isInstructionVisible && (
        <Fragment>
          <ToDoContainer />
        </Fragment>
      )}
      <ToastContainer />
    </div>
  );
};

export default ToDoListPage;
