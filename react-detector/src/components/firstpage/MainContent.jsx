import { useState } from "react";
import MyObject from "./MyObject";
import MyBox from "./MyBox";
import style from "./main.module.css";
import MyBoxArgument from "./MyBoxArgument";
import SensorArgument from "./SensorArgument";
import SensorContainer from "./SensorContainer";
import MyButton from "./MyButton";
import functions from "./functions";

const MainContent = () => {
  const { leftX, topY } = functions();
  const [images, setImage] = useState(MyObject);
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [id, setId] = useState("");
  const [drag, setDrag] = useState(true);
  const [className, setClassName] = useState("");
  const [imagelink, setImageLink] = useState(null);

  const { designMetal, designNonMetal, sensor } = MyBoxArgument({
    x,
    y,
    id,
    className,
    imagelink,
    drag,
  });

  const HandleDragEnd = (id, className, link, e) => {
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
    setDrag(false);
    setClassName(className);
    setImageLink(link);
  };
  const HandleDrag = () => {
    setDrag(true);
  };
  const { opaque } = SensorArgument({ sensor, id });
  return (
    <>
      <div className={style.containerall}>
        {images &&
          images.map((image, index) => (
            <div key={index} className={style.divcontainer}>
              <div className={style.divdesign}> </div>
              <img
                id={image.id}
                src={image.link}
                onDragEnd={(e) =>
                  HandleDragEnd(image.id, image.class, image.link, e)
                }
                onDrag={HandleDrag}
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

        <MyBox designMetal={designMetal} designNonMetal={designNonMetal} />
        <div className={style.screenname}>
          <SensorContainer opaque={opaque} drag={drag} />
          {images && <MyButton images={images} />}
        </div>
      </div>
    </>
  );
};

export default MainContent;
