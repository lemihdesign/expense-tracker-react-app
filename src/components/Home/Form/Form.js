import { useDispatch } from "react-redux";
import { formActions } from "../../../store/form-slice";
import { useNavigate } from "react-router";

import useInput from "../../../hooks/use-input";

import classes from "./Form.module.css";
import Wrapper from "../../Layout/Wrapper";

const Form = () => {
  const history = useNavigate();
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

    dispatch(formActions.addProfile(nameInputValue));
    nameInputReset();
    history("/dashboard");
  };

  return (
    <div className={classes.form}>
      <Wrapper>
        <h2>Let us optimize your home affairs.</h2>
        <p>
          Easily manage your home budget, track expenses and plan daily chores.
          It's all thanks to the Expense Tracker app.
        </p>
        <div className={classes.step}>
          <span>1</span>
          <p>Setup your Profile</p>
        </div>
      </Wrapper>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="name">Your name and surname</label>
        <input
          className={nameInputClasses}
          type="text"
          id="name"
          value={nameInputValue}
          onChange={nameInputChangeHandler}
          onBlur={nameBlurChangeHandler}
          placeholder="Jan Kowalski"
        />
        {nameInputHasError && (
          <p
            style={{
              fontFamily: "var(--groteskFont)",
              color: "crimson",
              fontWeight: "600",
              fontSize: "13px",
            }}
          >
            Please enter a valid name.
          </p>
        )}

        <button disabled={!formIsValid} type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Form;
