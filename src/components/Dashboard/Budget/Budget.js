import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Budget.module.css";

import { dashboardActions } from "../../../store/dashboard-slice";
import Expenses from "../Expenses/Expenses";
import Wrapper from "../../Layout/Wrapper";
import Incomes from "../Incomes/Incomes";

const Budget = () => {
  const dispatch = useDispatch();

  const [showAddMoney, setShowAddMoney] = useState(true);
  const [addMoneyActive, setIsMoneyActive] = useState(false);
  const [moneyValue, setMoneyValue] = useState(0);

  const showAddMoneyHandler = () => {
    setShowAddMoney(false);
    setIsMoneyActive(true);
  };

  const hideAddMoneyHandler = () => {
    setShowAddMoney(true);
    setIsMoneyActive(false);
  };

  const changeBudgetHandler = (e) => {
    setMoneyValue(e.target.value);
  };

  const saveBudgetHandler = () => {
    dispatch(dashboardActions.changeBudget(Number(moneyValue)));
  };

  return (
    <div className={classes["budget-section"]}>
      <p className={classes["dashboard-label"]}>Your Total Ballance</p>
      <div className={classes["budget-container"]}>
        <Wrapper>
          <div className={classes["incomes"]}>
            <Incomes
              showAddMoney={showAddMoney}
              addMoneyActive={addMoneyActive}
              moneyValue={moneyValue}
              onShowAddMoneyHandler={showAddMoneyHandler}
              onHideAddMoneyHandler={hideAddMoneyHandler}
              onChangeBudgetHandler={changeBudgetHandler}
              onSaveBudgetHandler={saveBudgetHandler}
            />
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Budget;
