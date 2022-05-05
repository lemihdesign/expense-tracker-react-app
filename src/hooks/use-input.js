import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { formActions } from "../store/form-slice";

const initialInputState = {
  value: "",
  isTouched: false,
};

const initialStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  return initialInputState;
};

const useInput = (validateFunction) => {
  const [inputState, dispatch] = useReducer(
    initialStateReducer,
    initialInputState
  );

  const valueChangeHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const blurChangeHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const isEnteredInputValid = validateFunction(inputState.value);
  const hasError = !isEnteredInputValid && inputState.isTouched;

  return {
    value: inputState.value,
    hasError,
    isValid: isEnteredInputValid,
    valueChangeHandler,
    blurChangeHandler,
    reset,
  };
};

export default useInput;
