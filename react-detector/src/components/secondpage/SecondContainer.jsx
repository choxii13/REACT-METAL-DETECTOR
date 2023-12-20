import "./table.css";
import FetchingData from "../firstpage/FetchingData";
import NotFound from "../notfoundpage/NotFound";
import ContainerBoth from "./ContainerBoth";
import { createContext } from "react";
import PendingPage from "../notfoundpage/PendingPage";
export const UserContent = createContext();
const SecondContainer = () => {
  const {
    content: images,
    DeleteData,
    err,
    isPending,
  } = FetchingData(`http://localhost:5000/Table`);
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
