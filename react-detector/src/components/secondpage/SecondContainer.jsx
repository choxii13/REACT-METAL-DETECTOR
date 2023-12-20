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
      {" "}
      <UserContent.Provider value={{ content: images, DeleteData }}>
        {err && (
          <div>
            <NotFound />
          </div>
        )}

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
