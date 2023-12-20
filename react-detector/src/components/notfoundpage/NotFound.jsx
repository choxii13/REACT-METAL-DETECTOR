import { Link } from "react-router-dom";
import "./notfound.css";
const NotFound = () => {
  return (
    <>
      <div className="not-found">status 404 not found!!!!</div>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <div className="homepage-button"> Home</div>
      </Link>
      <Link to="/Table" style={{ textDecoration: "none", color: "white" }}>
        <div className="check-items"> Check Items</div>
      </Link>
    </>
  );
};

export default NotFound;
