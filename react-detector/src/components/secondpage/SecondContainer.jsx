import { Link } from "react-router-dom";
import MetalContainer from "./MetalContainer";
import NonMetalContainer from "./NonMetalContainer";
import "./table.css";
import FetchingData from "../firstpage/FetchingData";
import NotFound from "../notfoundpage/NotFound";
import ContainerBoth from "./ContainerBoth";
import { createContext } from "react";
export const UserContent = createContext();
const SecondContainer = () => {
  const {
    content: images,
    DeleteData,
    err,
  } = FetchingData(`http://localhost:5000/Table`);
  return (
    <>
      {err && (
        <div>
          <NotFound />
        </div>
      )}
      <UserContent.Provider value={{ content: images, DeleteData }}>
        {images && (
          <div>
            <ContainerBoth />
          </div>
        )}
      </UserContent.Provider>
    </>
  );
};

export default SecondContainer;
