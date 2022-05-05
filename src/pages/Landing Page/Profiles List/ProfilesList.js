import { useSelector } from "react-redux";

const ProfilesList = () => {
  const profiles = useSelector((state) => state.form.name);
  const hasItems = profiles.length > 0;
  let content = "";
  if (hasItems) {
    content = <p>contains</p>;
  }
  return (
    <div>
      <h2>Profiles List</h2>
      {content}
    </div>
  );
};

export default ProfilesList;
