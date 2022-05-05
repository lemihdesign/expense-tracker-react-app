import classes from "./Hamburger.module.css";

const Hamburger = (props) => {
  const { active, onActive } = props;
  return (
    <button className={classes["hamburger"]} onClick={onActive}>
      <div className={classes["hamburger-container"]}>
        <span
          className={
            active
              ? classes["hamburger-inner--active"]
              : classes["hamburger-inner"]
          }
        ></span>
      </div>
    </button>
  );
};

export default Hamburger;
