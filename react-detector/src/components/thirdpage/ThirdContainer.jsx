import { useParams } from "react-router";
import NotFound from "../notfoundpage/NotFound";
import ImageData from "./ImageData";
import FetchingData from "../firstpage/FetchingData";
const ThirdContainer = () => {
  const { id } = useParams();
  const { content: data, err } = FetchingData(
    `http://localhost:5000/Table/${id}`
  );
  return (
    <>
      {err && (
        <div>
          <NotFound />
        </div>
      )}
      {data && <ImageData data={data} />}
    </>
  );
};

export default ThirdContainer;
