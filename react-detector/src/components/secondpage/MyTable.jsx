import { useEffect, useState } from "react";

import "./table.css";
import { Link } from "react-router-dom";
import DeleteData from "./DeleteData";

const MyTable = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetching();
  }, []);

  const fetching = () => {
    fetch("http://localhost:5000/Table")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err + "waa");
      });
  };

  const [metalSave, setMetalSave] = useState(null);
  const [notmetalSave, setNotMetalSave] = useState(null);

  useEffect(() => {
    const metal = data && data.filter((item) => item.className === "metal");
    setMetalSave(metal);
  }, [data]);

  useEffect(() => {
    const notmetal =
      data && data.filter((item) => item.className === "non-metal");
    setNotMetalSave(notmetal);
  }, [data]);

  const handleClickMetal = (id) => {
    DeleteData(id);
    fetching();
  };

  const handleClickNotMetal = (id) => {
    DeleteData(id);
    fetching();
  };
  console.log(data);
  return (
    <>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <div className="homepage-button"> Home</div>
      </Link>
      <div className="main-container">
        <div className="metal-container">
          <h1>Metal</h1>
          {metalSave &&
            metalSave.map((metal, index) => (
              <div className="metal-button" key={index}>
                <p>{metal.id}</p>
                <div
                  className="delete"
                  onClick={() => handleClickMetal(metal.id)}
                >
                  Delete
                </div>
              </div>
            ))}
        </div>
        <div className="not-metal-container">
          <h1>Not- Metal</h1>
          {notmetalSave &&
            notmetalSave.map((metal, index) => (
              <div className="not-metal-button" key={index}>
                <p>{metal.id} </p>
                <div
                  className="delete"
                  onClick={() => handleClickNotMetal(metal.id)}
                >
                  Delete
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MyTable;
