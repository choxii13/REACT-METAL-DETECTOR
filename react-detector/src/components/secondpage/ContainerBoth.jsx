import { Link } from "react-router-dom";
import MetalContainer from "./MetalContainer";
import NonMetalContainer from "./NonMetalContainer";

const ContainerBoth = () => {
  return (
    <>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <div className="homepage-button"> Home</div>
      </Link>
      <div className="main-container">
        {<MetalContainer />}
        {<NonMetalContainer />}
      </div>
    </>
  );
};

export default ContainerBoth;
