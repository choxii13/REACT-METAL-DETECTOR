import { useEffect, useState } from "react";
import style from "./main.module.css";
import CreateTable from "./CreateTable";

const MyBoxArgument = ({ x, y, id, drag, className, imagelink }) => {
  const [designMetal, setDesignMetal] = useState(null);
  const [designNonMetal, setDesignNonMetal] = useState(null);
  const [sensor, setSensor] = useState(null);
  const [metalSave, setMetalSave] = useState(false);
  const [notMetalSave, setNotMetalSave] = useState(false);

  useEffect(() => {
    x > 5 && x < 20 && y > 25 && y < 50 && !drag && className === "metal"
      ? `${setDesignMetal(style.add)} ${setSensor("metal")} ${setMetalSave(
          true
        )} `
      : x > 5 &&
        x < 20 &&
        y > 25 &&
        y < 50 &&
        !drag &&
        className === "non-metal"
      ? `${setDesignMetal(style.addred)} ${setSensor(
          "metal-wrong"
        )}  ${setNotMetalSave(false)} `
      : `${setDesignMetal(null)} ${setMetalSave(false)}`;

    x > 5 && x < 20 && y > 63 && y < 84 && !drag && className === "non-metal"
      ? `${setDesignNonMetal(style.add)} ${setSensor(
          "non-metal"
        )} ${setNotMetalSave(true)} `
      : x > 5 && x < 20 && y > 63 && y < 84 && !drag && className === "metal"
      ? `${setDesignNonMetal(style.addred)} ${setSensor(
          "non-metal-wrong"
        )}  ${setMetalSave(false)}`
      : `${setDesignNonMetal(null)}  ${setNotMetalSave(false)}`;
  }, [x, y, id, className, drag]);
  CreateTable({ metalSave, notMetalSave, id, className, imagelink });
  return { designMetal, designNonMetal, sensor };
};

export default MyBoxArgument;
