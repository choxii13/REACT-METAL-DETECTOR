import { Link } from "react-router-dom";
import style from "./main.module.css";
import { useState } from "react";
const MyButton = () => {
  // const [image, setImage] = useState(images);

  // const handleClick = () => {
  //   const updatedObject = image.map((item) => ({
  //     ...item,
  //     left: (item.left = null),
  //     top: (item.top = null),
  //   }));

  //   setImage(updatedObject);
  //   console.log(image);
  // };

  return (
    <div className={style.button}>
      <Link to="/mytable" style={{ textDecoration: "none", color: "black" }}>
        <div className={style.checkitems}>Check Item</div>
      </Link>
      <div className={style.reset}>Reset Game</div>
    </div>
  );
};

export default MyButton;
