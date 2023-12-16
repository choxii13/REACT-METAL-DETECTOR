import style from "./main.module.css";
const MyButton = () => {
  return (
    <div className={style.button}>
      <div className={style.checkitems}>Check Item</div>
      <div className={style.reset}>Reset Game</div>
    </div>
  );
};

export default MyButton;
