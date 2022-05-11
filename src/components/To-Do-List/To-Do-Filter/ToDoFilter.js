import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { toDoActions } from "../../../store/to-do-slice";

import classes from "./ToDoFilter.module.css";

const ToDoFilter = () => {
  const isFormActive = useSelector((state) => state.todo.createTaskFormToggle);
  const toDoItems = useSelector((state) => state.todo.toDoItems);
  const dispatch = useDispatch();

  const createFormToggledHandler = () => {
    dispatch(toDoActions.createTaskFormToggleHandler());
  };

  const toDoItemsTypes = toDoItems.map((toDoItem) => toDoItem.type);
  const uniqueToDoItemsTypes = [...new Set(toDoItemsTypes)];

  const navLinks = uniqueToDoItemsTypes.map((uniqueToDoItem) => (
    <NavLink
      to={`/to-do/${uniqueToDoItem.toLowerCase().trim()}`}
      className={(navData) =>
        navData.isActive ? classes["active-filter-option"] : ""
      }
    >
      {uniqueToDoItem.charAt(0).toUpperCase() + uniqueToDoItem.slice(1)}
    </NavLink>
  ));

  let buttonContent;
  if (!isFormActive)
    buttonContent = (
      <Fragment>
        <i className="fa-solid fa-plus"></i> Add Task
      </Fragment>
    );
  if (isFormActive)
    buttonContent = (
      <Fragment>
        <i className="fa-solid fa-times"></i> Close
      </Fragment>
    );

  return (
    <div className={classes["filter-bar"]}>
      <ul className={classes["to-do-filter-bar"]}>
        {navLinks}
        {/* <NavLink
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
        </NavLink> */}
      </ul>
      <button onClick={createFormToggledHandler}>{buttonContent}</button>
    </div>
  );
};

export default ToDoFilter;
