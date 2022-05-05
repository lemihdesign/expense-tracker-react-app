import TopBar from "../../components/Dashboard/Top Bar/TopBar";
import Navigation from "../../components/Layout/Navigation";
import Instruction from "../../components/UI/Instruction";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <div className={classes["dashboard-main"]}>
      <TopBar />
      <Navigation />
      <Instruction />
    </div>
  );
};

export default Main;
