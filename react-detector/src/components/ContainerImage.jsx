import { useState, useEffect } from "react";
import topY from "./Vh";
import leftX from "./VW";
import MyObject from "./MyObject";
import BoxMetal from "./BoxMetal";
import BoxNotMetal from "./BoxNotMetal";
import SensorContainer from "./SensorContainer";
import Button from "./Button";
import style from "./app.module.css";
const ContainerImage = () => {
  const [images, setImage] = useState(MyObject);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [id, setId] = useState("");
  const HandleDragEnd = (id, e) => {
    const a = leftX(e.clientX - 5);
    const b = topY(e.clientY - 5);
    const updatedItems = images.map((item) =>
      item.id === id
        ? {
            ...item,
            left: (item.left = a),
            top: (item.top = b),
          }
        : item
    );

    setImage(updatedItems);
    setId(id);
    setX(a);
    setY(b);
    window.removeEventListener("drag", HandleDragEnd);
  };
  console.log(x);
  console.log(y);
  return (
    <>
      {images &&
        images.map((image, index) => (
          <div key={index} className={style.divcontainer}>
            <div className={style.divdesign}> </div>
            <img
              id={image.id}
              src={image.link}
              onDragEnd={(e) => HandleDragEnd(image.id, e)}
              style={{
                position: "absolute",
                objectFit: "contain",
                width: 8 + "vw",
                height: 13 + "vh",
                zIndex: 1,
                left: image.left + "vw",
                top: image.top + "vh",
              }}
            />
          </div>
        ))}
      <BoxMetal images={images} />
      <BoxNotMetal />
      <div className={style.screenname}>
        <SensorContainer id={id} />
        <Button />
      </div>
    </>
  );
};

export default ContainerImage;
