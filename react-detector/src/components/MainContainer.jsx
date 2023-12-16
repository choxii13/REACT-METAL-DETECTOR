import MainContent from "./MainContent";

import style from "./main.module.css";
const MainContainer = () => {
  return (
    <>
      <div className={style.containerall}>
        <MainContent />
      </div>
    </>
  );
};

export default MainContainer;
