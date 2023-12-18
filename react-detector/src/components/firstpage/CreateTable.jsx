import { useEffect } from "react";
import SavingData from "./SavingData";

const CreateTable = ({ metalSave, notMetalSave, id, className, imagelink }) => {
  useEffect(() => {
    const obj = { id, className, imagelink };
    if (metalSave) {
      SavingData(obj);
    }
    if (notMetalSave) {
      SavingData(obj);
    }
  }, [metalSave, notMetalSave, id, className, imagelink]);
};

export default CreateTable;
