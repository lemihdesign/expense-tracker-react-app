import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./Profile.module.css";

import houseIcon from "../../../assets/icons/house.svg";

const Profile = () => {
  const username = useSelector((state) => state.form.name);
  return (
    <Link to="/dashboard">
      <li className={classes["profile-item"]}>
        <img src={houseIcon} alt="houseIcon" />
        {username}
      </li>
    </Link>
  );
};

export default Profile;
