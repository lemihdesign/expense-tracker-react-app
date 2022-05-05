import { useDispatch } from "react-redux";
import { formActions } from "../../../store/form-slice";
import { Link } from "react-router-dom";

import useInput from "../../../hooks/use-input";

const Form = () => {
  const dispatch = useDispatch();

  const {
    value: nameInputValue,
    hasError: nameInputHasError,
    isValid: nameInputIsValid,
    valueChangeHandler: nameInputChangeHandler,
    blurChangeHandler: nameBlurChangeHandler,
    reset: nameInputReset,
  } = useInput(
    (value) =>
      value.trim() !== "" && value.includes(" ") && value.trim().length > 4
  );

  let formIsValid = false;

  if (nameInputIsValid) {
    formIsValid = true;
  }

  const nameInputClasses = nameInputHasError ? "invalid" : "";

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    dispatch(formActions.changeName(e.target.value));

    nameInputReset();
  };

  return (
    <div>
      <h2>let us optimize your home affairs</h2>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="name">Your name and surname</label>
        <input
          className={nameInputClasses}
          type="text"
          id="name"
          value={nameInputValue}
          onChange={nameInputChangeHandler}
          onBlur={nameBlurChangeHandler}
        />
        {nameInputHasError && (
          <p
            style={{
              color: "crimson",
              fontWeight: "600",
              fontSize: "13px",
            }}
          >
            Please enter a valid first name.
          </p>
        )}
        <Link to="/dashboard">
          <button disabled={!formIsValid} type="submit">
            Confirm
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
