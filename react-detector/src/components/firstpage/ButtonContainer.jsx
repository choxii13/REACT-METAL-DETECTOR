import { Link } from "react-router-dom";
import style from "./main.module.css";

const ButtonContainer = () => {
  return (
    <div className={style.button}>
      <Link to="/Table" style={{ textDecoration: "none", color: "black" }}>
        <div className={style.checkitems}>Check Items</div>
      </Link>
    </div>
  );
};

export default ButtonContainer;
