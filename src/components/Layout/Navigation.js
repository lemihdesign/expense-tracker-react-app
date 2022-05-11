import { useState } from "react";
import { NavLink } from "react-router-dom";
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
              <NavLink to="/">
                <i className="fa-solid fa-bell"></i> Notifications{" "}
                <span className={classes["soon-label"]}>Soon</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <i className="fa-solid fa-house"></i> Overview{" "}
                <span className={classes["soon-label"]}>Soon</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/budget">
                <i className="fa-solid fa-sack-dollar"></i> Home Budget
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <i className="fa-solid fa-clock"></i> Schedules{" "}
                <span className={classes["soon-label"]}>Soon</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/to-do/all">
                <i className="fa-solid fa-clipboard-check"></i> To Do{" "}
                <span className={classes["soon-label"]}>Soon</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <i className="fa-solid fa-business-time"></i> Reminders{" "}
                <span className={classes["soon-label"]}>Soon</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
