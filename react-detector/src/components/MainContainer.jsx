import ContainerImage from "./ContainerImage";
import style from "./app.module.css";
const MainContainer = () => {
  return (
    <>
      <div className={style.containerall}>
        <ContainerImage />
      </div>
    </>
  );
};

export default MainContainer;
