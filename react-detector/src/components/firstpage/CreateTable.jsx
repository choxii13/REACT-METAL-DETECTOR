import { useEffect } from "react";
import SavingData from "./SavingData";

const CreateTable = ({ metalSave, notMetalSave, id, className, imagelink }) => {
  useEffect(() => {
    const obj = { id, className, imagelink };
    if (metalSave === true) {
      SavingData(obj);
    }
    if (notMetalSave === true) {
      SavingData(obj);
    }
  });
};

export default CreateTable;
