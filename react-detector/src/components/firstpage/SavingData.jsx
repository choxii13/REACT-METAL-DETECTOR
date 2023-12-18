import { useEffect, useState } from "react";

const SavingData = (obj) => {
  fetch("http://localhost:5000/Table", {
    method: "Post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  }).then((res) => {
    if (!res.ok) {
      console.log("its already been saved");
    } else {
      console.log("saved");
    }
  });
};

export default SavingData;
