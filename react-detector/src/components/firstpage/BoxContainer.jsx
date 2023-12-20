import { useContext, useEffect, useReducer } from "react";
import style from "./main.module.css";
import { UserContext } from "./ImageContainer";
import { myboxdata, reducer } from "./BoxArgument"; // my functions for box container
import SensorContainer from "./SensorContainer";
import ButtonContainer from "./ButtonContainer";
import SavingData from "./SavingData";

const BoxContainer = ({ x, y, className, id, drag, link }) => {
  const obj = { className, id, link };
  const [myboxdatas, dispatch] = useReducer(reducer, myboxdata); // my reducer function
  const { designMetal, designNonMetal, metalSave, notMetalSave, sensor } =
    myboxdatas; // destructuring arguments
  // destructuring for saving data in json-server

  useEffect(() => {
    // this where i use my argument in box container
    dispatch({
      type: "complete",
      className: className,
      x: x,
      y: y,
      id: id,
      drag: drag,
    });
  }, [x, y, className, id, drag]);

  useEffect(() => {
    if (!drag && metalSave) {
      SavingData(obj);
    }
  }, [drag, metalSave, obj]);

  useEffect(() => {
    if (!drag && notMetalSave) {
      SavingData(obj);
    }
  }, [drag, notMetalSave, obj]);

  return (
    <>
      <div className={`${style.boxmetal} ${designMetal}`}>
        <h3 className={style.metalbox}> Metal </h3>
      </div>
      <div className={`${style.boxnotmetal} ${designNonMetal}`}>
        <h3 className={style.nonmetalbox}>Non Metal</h3>
      </div>

      <div className={style.screenname}>
        <SensorContainer sensor={sensor} />
        <ButtonContainer />
      </div>
    </>
  );
};

export default BoxContainer;
