import { useSelector } from "react-redux";

import Budget from "../../components/Dashboard/Budget/Budget";
import TopBar from "../../components/Dashboard/Top Bar/TopBar";
import Navigation from "../../components/Layout/Navigation";
import Instruction from "../../components/UI/Instruction";
import Wrapper from "../../components/Layout/Wrapper";

import classes from "./Main.module.css";

const Main = () => {
  const isInstructionVisible = useSelector(
    (state) => state.dashboard.instructionVisibility
  );

  return (
    <div className={classes["dashboard-main"]}>
      <TopBar />
      <Navigation />
      {isInstructionVisible && <Instruction />}
      <Wrapper>{!isInstructionVisible && <Budget />}</Wrapper>
    </div>
  );
};

export default Main;
