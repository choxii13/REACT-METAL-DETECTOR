import FetchingxDelete from "../secondpage/FetchingxDelete";
import { useParams } from "react-router";
import "./ImageData.css";
import { Link } from "react-router-dom";
import NotFound from "../notfoundpage/NotFound";

const ImageData = () => {
  const { id } = useParams();
  const { data, err } = FetchingxDelete(`http://localhost:5000/Table/${id}`);
  console.log(data);
  return (
    <>
      {data &&
        (err ? (
          <NotFound />
        ) : (
          <>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <div className="homepage-button"> Home</div>
            </Link>
            <Link
              to="/Table"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="check-items"> Check Items</div>
            </Link>
            <div className="container">
              <h1 className="title"> {data.className}</h1>
              <div className="divdesign"> </div>
              <img src={`/${data.link}`} className="my-image" />
              <p className="my-name">{data.id} </p>
            </div>
          </>
        ))}
    </>
  );
};

export default ImageData;
