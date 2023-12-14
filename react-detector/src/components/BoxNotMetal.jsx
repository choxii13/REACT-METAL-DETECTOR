import style from "./app.module.css";
const BoxNotMetal = () => {
  return (
    <div className={`${style.boxnotmetal} ${style.add}`}>
      <h3 className={style.nonmetalbox}>Non-Metal</h3>
    </div>
  );
};

export default BoxNotMetal;
