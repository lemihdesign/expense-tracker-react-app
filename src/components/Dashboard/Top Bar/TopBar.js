import { useSelector } from "react-redux";

import classes from "./TopBar.module.css";

import icon from "../../../assets/icons/family.svg";

const TopBar = () => {
  const username = useSelector((state) => state.form.name);
  const firstLetter = username[0].charAt(0);
  return (
    <div className={classes["top-bar"]}>
      <div className={classes["top-bar-container"]}>
        <div className={classes["avatar-section"]}>
          <span className={classes["icon"]}>{firstLetter}</span>
          <p className={classes.username}>{username}</p>
        </div>
        <div className={classes["main-section"]}>
          <p>Dashboard / House Overview</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
