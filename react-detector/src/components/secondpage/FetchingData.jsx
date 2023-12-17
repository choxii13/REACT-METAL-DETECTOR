import { useState } from "react";

const FetchingData = () => {
  const [data, setData] = useState(null);
  fetch("http://localhost:5000/Table")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setData(data);
    })
    .catch((err) => {
      console.log(err);
    });
  return { data };
};

export default FetchingData;
