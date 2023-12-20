import NotFound from "../notfoundpage/NotFound";
import FetchingData from "./FetchingData";
import ImageContainer from "./ImageContainer";
import style from "./main.module.css";

const MainContainer = () => {
  const { content: data, err } = FetchingData("http://localhost:5001/Images");

  return (
    <>
      {err && (
        <div>
          {" "}
          <NotFound />
        </div>
      )}
      {data && (
        <div className={style.containerall}>
          <ImageContainer data={data} />
        </div>
      )}
    </>
  );
};

export default MainContainer;
