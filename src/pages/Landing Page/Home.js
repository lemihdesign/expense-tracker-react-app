import { useSelector } from "react-redux";
import Form from "../../components/Home/Form/Form";
import ProfilesList from "./Profiles List/ProfilesList";

import classes from "./Home.module.css";

const Home = () => {
  const usersList = useSelector((state) => state.form.name);
  const hasItems = usersList.length > 0;
  return (
    <div className={classes["home-page"]}>
      {!hasItems && <Form />}
      {hasItems && <ProfilesList />}
    </div>
  );
};

export default Home;
