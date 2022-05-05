import { useSelector, useDispatch } from "react-redux";
import { formActions } from "../../../store/form-slice";

const Form = () => {
  const nameValue = useSelector((state) => state.form.name);
  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(formActions.changeName(e.target.value));
  };

  return (
    <div>
      <h2>let us optimize your home affairs</h2>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="name">Your name and surname</label>
        <input type="text" id="name" value={nameValue} />
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default Form;
