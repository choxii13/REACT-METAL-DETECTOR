import { useEffect } from "react";
import "./table.css";

import Fetch from "./Fetch";
const MyMetalContainer = ({ metalSave }) => {
  const handleClick = (id) => {
    fetch(`http://localhost:5000/Table/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div className="metal-container">
      <h1>Metal</h1>
      {metalSave.map((metal, index) => (
        <div className="metal-button" key={index}>
          <p>{metal.id} </p>
          <div className="delete" onClick={() => handleClick(metal.id)}>
            Delete
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyMetalContainer;
