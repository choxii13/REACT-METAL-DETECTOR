import { useEffect, useState } from "react";

import "./table.css";
import MyMetalContainer from "./MyMetalContainer";
import MyNonMetalContainer from "./MyNonMetalContainer";

const MyTable = ({ data }) => {
  const [wa, setWa] = useState(data);
  const [metalSave, setMetalSave] = useState(null);
  const [notmetalSave, setNotMetalSave] = useState(null);

  useEffect(() => {
    const metal = wa.filter((item) => item.class === "metal");
    setMetalSave(metal);
  }, [wa]);

  useEffect(() => {
    const notmetal = wa.filter((item) => item.class === "non-metal");
    setNotMetalSave(notmetal);
  }, [wa]);

  return (
    <>
      <div className="main-container">
        {metalSave && <MyMetalContainer metalSave={metalSave} />}
        {notmetalSave && <MyNonMetalContainer notmetalSave={notmetalSave} />}
      </div>
    </>
  );
};

export default MyTable;
