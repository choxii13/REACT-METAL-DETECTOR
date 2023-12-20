import FetchingData from "./FetchingData";
import ImageContainer from "./ImageContainer";
import style from "./main.module.css";

const MainContainer = () => {
  const { data } = FetchingData("http://localhost:5001/Images");

  return (
    <div className={style.containerall}>
      {data && <ImageContainer data={data} />}
    </div>
  );
};

export default MainContainer;
