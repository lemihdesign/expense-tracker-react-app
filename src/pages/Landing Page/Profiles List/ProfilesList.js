import { useSelector } from "react-redux";
import Profile from "./Profile";

const ProfilesList = () => {
  const profiles = useSelector((state) => state.form.name);
  const hasItems = profiles.length > 0;
  let content = "";
  if (hasItems) {
    content = <Profile />;
  }
  return (
    <div>
      <h2>Profiles List</h2>
      <ul>{content}</ul>
    </div>
  );
};

export default ProfilesList;
