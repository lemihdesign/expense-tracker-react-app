import { NavLink } from "react-router-dom";

import classes from "./ToDoFilter.module.css";

const ToDoFilter = () => {
  return (
    <ul className={classes["to-do-filter-bar"]}>
      <NavLink
        to="/to-do/all"
        className={(navData) =>
          navData.isActive ? classes["active-filter-option"] : ""
        }
      >
        <li>All</li>
      </NavLink>
      <NavLink
        to="/to-do/job"
        className={(navData) =>
          navData.isActive ? classes["active-filter-option"] : ""
        }
      >
        <li>Job</li>
      </NavLink>
      <NavLink
        to="/to-do/cleaning"
        className={(navData) =>
          navData.isActive ? classes["active-filter-option"] : ""
        }
      >
        <li>Cleaning</li>
      </NavLink>
      <NavLink
        to="/to-do/studying"
        className={(navData) =>
          navData.isActive ? classes["active-filter-option"] : ""
        }
      >
        <li>Studying</li>
      </NavLink>
    </ul>
  );
};

export default ToDoFilter;
