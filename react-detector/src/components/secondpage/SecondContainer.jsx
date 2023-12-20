import { Link } from "react-router-dom";
import MetalContainer from "./MetalContainer";
import NonMetalContainer from "./NonMetalContainer";
import FetchingxDelete from "./FetchingxDelete";
import "./table.css";

const SecondContainer = () => {
  const { data, DeleteData } = FetchingxDelete(`http://localhost:5000/Table`);
  return (
    <>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <div className="homepage-button"> Home</div>
      </Link>
      <div className="main-container">
        {data && <MetalContainer data={data} DeleteData={DeleteData} />}
        {data && <NonMetalContainer data={data} DeleteData={DeleteData} />}
      </div>
    </>
  );
};

export default SecondContainer;
