import { Link } from "react-router-dom";
import "./table.css";

const MetalContainer = ({ data, DeleteData }) => {
  const metal = data && data.filter((item) => item.className === "metal");

  const handleClick = (id) => {
    DeleteData(id);
  };

  return (
    <>
      <div className="metal-container">
        <h1>Metal</h1>
        <div className="metal-button-container">
          {metal.map((metal, index) => (
            <div className="metal-button" key={index}>
              <Link
                to={`/Table/${metal.id}`}
                key={index}
                style={{ textDecoration: "none", color: "none" }}
              >
                <div className="mydesign">{metal.id}</div>
              </Link>
              <div className="delete" onClick={() => handleClick(metal.id)}>
                Delete
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MetalContainer;
