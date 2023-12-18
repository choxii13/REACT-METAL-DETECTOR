import { useEffect, useState } from "react";
import style from "./main.module.css";

const SensorArgument = ({ sensor, id }) => {
  const [opaque, setOpaque] = useState(null);

  useEffect(() => {
    if (sensor === "metal") {
      setOpaque(<p className={style.opaque}>{"SAVE"} </p>);
    } else if (sensor === "metal-wrong") {
      setOpaque(<p className={style.opaque}>Not-Metal!!</p>);
    } else if (sensor === "non-metal") {
      setOpaque(<p className={style.opaque}> Saved </p>);
    } else if (sensor === "non-metal-wrong") {
      setOpaque(<p className={style.opaque}> Metal!!</p>);
    }
  }, [sensor, id]);
  return { opaque };
};

export default SensorArgument;
