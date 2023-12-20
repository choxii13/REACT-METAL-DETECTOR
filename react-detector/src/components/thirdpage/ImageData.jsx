import "./ImageData.css";
import { Link } from "react-router-dom";

const ImageData = ({ data }) => {
  return (
    <>
      <>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <div className="homepage-button"> Home</div>
        </Link>
        <Link to="/Table" style={{ textDecoration: "none", color: "white" }}>
          <div className="check-items"> Check Items</div>
        </Link>
        <div className="container">
          <h1 className="title"> {data.className}</h1>
          <div className="divdesign"> </div>
          <img src={`/${data.link}`} className="my-image" />
          <p className="my-name">{data.id} </p>
        </div>
      </>
    </>
  );
};

export default ImageData;
