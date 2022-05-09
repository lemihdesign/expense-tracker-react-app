import { useState } from "react";
import Hamburger from "../UI/Hamburger";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  const activeHamburgerHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={classes["navigation"]}>
      <div className={classes["navigation-container"]}>
        <Hamburger active={isActive} onActive={activeHamburgerHandler} />
        <nav className={isActive ? classes["active"] : ""}>
          <ul>
            <li>Notifications</li>
            <li>Home Budget</li>
            <li>Schedules</li>
            <li>To Do</li>
            <li>Reminders</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
