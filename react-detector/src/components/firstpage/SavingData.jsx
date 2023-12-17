import { useEffect } from "react";

const SavingData = (obj) => {
  useEffect(() => {
    fetch("http://localhost:5000/Table", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then(() => {
        console.log("SAve");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [obj]);
};

export default SavingData;
