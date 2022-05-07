import { Fragment } from "react";

import foodIcon from "../../../assets/icons/food.svg";
import shoppingIcon from "../../../assets/icons/shopping.svg";
import travelIcon from "../../../assets/icons/travel.svg";
import educationIcon from "../../../assets/icons/education.svg";

import classes from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  const { name, price, type, description } = props;

  let header;

  if (type === "education") {
    header = (
      <Fragment>
        <div className={classes["expense-item-header-container"]}>
          <img src={educationIcon} alt="education icon" />
          <p className={classes["header-title"]}>Education</p>
        </div>
      </Fragment>
    );
  } else if (type === "food") {
    header = (
      <Fragment>
        <div className={classes["expense-item-header-container"]}>
          <img src={foodIcon} alt="food icon" />
          <p className={classes["header-title"]}>Food</p>
        </div>
      </Fragment>
    );
  } else if (type === "shopping") {
    header = (
      <Fragment>
        <div className={classes["expense-item-header-container"]}>
          <img src={shoppingIcon} alt="shopping icon" />
          <p className={classes["header-title"]}>Shopping</p>
        </div>
      </Fragment>
    );
  } else if (type === "travel") {
    header = (
      <Fragment>
        <div className={classes["expense-item-header-container"]}>
          <img src={travelIcon} alt="travel icon" />
          <p className={classes["header-title"]}>Travel</p>
        </div>
      </Fragment>
    );
  }

  return (
    <li className={classes["expense-item"]}>
      <div className={classes["expense-item-header"]}>{header}</div>
      <div className={classes["expense-details"]}>
        <p className={classes["expense-name"]}>{name}</p>
        <p className={classes["expense-description"]}>{description}</p>
        <p className={classes["expense-price"]}>-${price}</p>
      </div>
    </li>
  );
};

export default ExpenseItem;
