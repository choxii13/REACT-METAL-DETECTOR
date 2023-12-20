import { useParams } from "react-router";
import NotFound from "../notfoundpage/NotFound";
import ImageData from "./ImageData";
import FetchingData from "../firstpage/FetchingData";
const ThirdContainer = () => {
  const { id } = useParams();
  const { content: image, err } = FetchingData(
    `http://localhost:5000/Table/${id}`
  );
  return (
    <>
      {err && (
        <div>
          <NotFound />
        </div>
      )}
      {image && <ImageData image={image} />}
    </>
  );
};

export default ThirdContainer;
