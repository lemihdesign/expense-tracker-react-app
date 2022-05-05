import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const username = useSelector((state) => state.form.name);
  return (
    <Link to="/dashboard">
      <li>{username}</li>
    </Link>
  );
};

export default Profile;
