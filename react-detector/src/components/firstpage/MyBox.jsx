import style from "./main.module.css";

const MyBox = ({ designMetal, designNonMetal }) => {
  return (
    <>
      <div className={`${style.boxmetal} ${designMetal && designMetal}`}>
        <h3 className={style.metalbox}>Metal </h3>
      </div>
      <div
        className={`${style.boxnotmetal} ${designNonMetal && designNonMetal}`}
      >
        <h3 className={style.nonmetalbox}>Non Metal</h3>
      </div>
    </>
  );
};

export default MyBox;
