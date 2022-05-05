import { useSelector } from "react-redux";
import Form from "../../components/Home/Form/Form";
import ProfilesList from "./Profiles List/ProfilesList";

const Home = () => {
  const usersList = useSelector((state) => state.form.name);
  const hasItems = usersList.length > 0;
  return (
    <div>
      {!hasItems && <Form />}
      {hasItems && <ProfilesList />}
    </div>
  );
};

export default Home;
