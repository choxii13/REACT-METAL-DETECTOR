import { createContext, useReducer, useState } from "react";
import style from "./main.module.css";
import ImagePosition from "./ImagePosition"; // my function and initialization for reducer
import { leftX, topY } from "./FunctionsViewport"; // change px to viewport
import BoxContainer from "./BoxContainer";
export const UserContext = createContext();

const ImageContainer = ({ data }) => {
  const myData = data; // my initialization for reducer
  // getting all the data for the argument
  const [className, setClass] = useState(null);
  const [link, setLink] = useState(null);
  const [id, setClassId] = useState(null);
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  // end here
  const [drag, setDrag] = useState(false); // for design and saving data
  const [myDatas, dispatch] = useReducer(ImagePosition, myData); // my reducer function

  const HandleDragEnd = (image, e, className, myId, myLink) => {
    const left = leftX(e.clientX);
    const top = topY(e.clientY);
    dispatch({ type: "complete", id: image.id, x: left, y: top });
    setX(left);
    setY(top);
    setClass(className);
    setClassId(myId);
    setDrag(false);
    setLink(myLink);
    setDrag(false);
  };

  const HandleDrag = () => {
    setDrag(true);
  };

  return (
    <>
      {myDatas.map((image, index) => (
        <div key={index} className={style.divcontainer}>
          <div className={style.divdesign}> </div>
          <img
            className={image.id}
            src={image.link}
            onDragEnd={(e) =>
              HandleDragEnd(image, e, image.class, image.id, image.link)
            }
            onDragStart={HandleDrag}
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

      <BoxContainer
        x={x}
        y={y}
        className={className}
        id={id}
        drag={drag}
        link={link}
      />
    </>
  );
};

export default ImageContainer;
