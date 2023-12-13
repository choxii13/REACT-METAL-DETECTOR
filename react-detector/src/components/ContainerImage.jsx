import { useState } from "react";
import topY from "./Vh";
import leftX from "./Vw";
import MyObject from "./MyObject";
import BoxMetal from "./BoxMetal";
import BoxNotMetal from "./BoxNotMetal";
import SensorContainer from "./SensorContainer";
import Button from "./Button";
const ContainerImage = () => {
  const [images, setImage] = useState(MyObject);
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  const HandleDragEnd = (id, e) => {
    const a = e.clientX;
    const b = e.clientY;
    const updatedItems = images.map((item) =>
      item.id === id
        ? {
            ...item,
            left: (item.left = x),
            top: (item.top = y),
          }
        : item
    );
    setImage(updatedItems);
    setX(leftX(a - 130));
    setY(topY(b - 50));
    return a, b;
  };

  return (
    <>
      {images &&
        images.map((image, index) => (
          <div key={index} className="div-container">
            <div className="div-design"> </div>
            <img
              id={image.id}
              src={image.link}
              onDrag={(e) => HandleDragEnd(image.id, e)}
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
      <BoxMetal x={x} y={y} />
      <BoxNotMetal />
      <div className="screen-name">
        <SensorContainer />
        <Button />
      </div>
    </>
  );
};

export default ContainerImage;
