import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { dashboardActions } from "../../../store/dashboard-slice";

import classes from "./ToDoFilter.module.css";

const ToDoFilter = () => {
  const dispatch = useDispatch();

  const createFormToggledHandler = () => {
    dispatch(dashboardActions.createTaskFormToggleHandler());
  };

  return (
    <div className={classes["filter-bar"]}>
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
      <button onClick={createFormToggledHandler}>
        <i className="fa-solid fa-plus"></i> Add Task
      </button>
    </div>
  );
};

export default ToDoFilter;
