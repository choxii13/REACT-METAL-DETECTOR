import { useParams } from "react-router";
import NotFound from "../notfoundpage/NotFound";
import ImageData from "./ImageData";
import FetchingData from "../firstpage/FetchingData";
import PendingPage from "../notfoundpage/PendingPage";
const ThirdContainer = () => {
  const { id } = useParams();
  const {
    content: image,
    err,
    isPending,
  } = FetchingData(`http://localhost:5000/Table/${id}`);
  return (
    <>
      {isPending && (
        <div>
          <PendingPage />
        </div>
      )}
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
