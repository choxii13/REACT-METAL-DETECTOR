import style from "./app.module.css";
import MyObject from "./MyObject";
const BoxMetal = ({ images }) => {
  return (
    <div className={`${style.boxmetal} ${style.add}`}>
      <h3 className={style.metalbox}>Metal</h3>
    </div>
  );
};

export default BoxMetal;
