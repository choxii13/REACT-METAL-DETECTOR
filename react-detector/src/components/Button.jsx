import style from "./app.module.css";
const Button = () => {
  return (
    <div className={style.button}>
      <div className={style.checkitems}>Check Item</div>
      <div className={style.reset}>Reset Game</div>
    </div>
  );
};

export default Button;
