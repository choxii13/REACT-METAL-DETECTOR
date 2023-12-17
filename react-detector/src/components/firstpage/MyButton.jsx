import { Link } from "react-router-dom";
import style from "./main.module.css";
import { useState } from "react";
const MyButton = ({ images }) => {
  const [image, setImage] = useState(images);
  const handleClick = () => {
    console.log(images);
  };
  return (
    <div className={style.button}>
      <Link to="/mytable" style={{ textDecoration: "none", color: "black" }}>
        <div className={style.checkitems}>Check Item</div>
      </Link>
      <div className={style.reset} onClick={handleClick}>
        Reset Game
      </div>
    </div>
  );
};

export default MyButton;
