import classes from "./LastTransactions.module.css";

const LastTransactions = (props) => {
  const { name, description, price } = props;
  return (
    <li className={classes["last-expense"]}>
      <div className={classes["left"]}>
        <p>{name}</p>
        {/* <p className={classes["last-transaction-description"]}>{description}</p> */}
      </div>
      <div className={classes["right"]}>
        <span>-${Number(price).toFixed(2)}</span>
      </div>
    </li>
  );
};

export default LastTransactions;
