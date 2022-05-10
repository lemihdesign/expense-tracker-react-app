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
            <li>
              <i className="fa-solid fa-bell"></i> Notifications
            </li>
            <li>
              <i className="fa-solid fa-house"></i> Overview
            </li>
            <li>
              <i className="fa-solid fa-sack-dollar"></i> Home Budget
            </li>
            <li>
              <i class="fa-solid fa-clock"></i> Schedules
            </li>
            <li>
              <i className="fa-solid fa-clipboard-check"></i> To Do
            </li>
            <li>
              <i class="fa-solid fa-business-time"></i> Reminders
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
