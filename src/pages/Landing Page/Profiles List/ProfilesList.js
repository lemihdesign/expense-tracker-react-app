import { useSelector } from "react-redux";
import Profile from "./Profile";

import classes from "./ProfilesList.module.css";

const ProfilesList = () => {
  const profiles = useSelector((state) => state.form.name);
  const hasItems = profiles.length > 0;
  let content = "";
  if (hasItems) {
    content = <Profile />;
  }
  return (
    <div className={classes["profiles-list"]}>
      <h2>Welcome back, choose your profile.</h2>
      <ul>{content}</ul>
    </div>
  );
};

export default ProfilesList;
