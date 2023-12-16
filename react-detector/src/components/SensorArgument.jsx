import { useEffect, useState } from "react";
import style from "./main.module.css";
const SensorArgument = ({ sensor, id }) => {
  const [opaque, setOpaque] = useState(null);

  useEffect(() => {
    sensor === "metal"
      ? setOpaque(<p className={style.opaque}>{id}</p>)
      : sensor === "metal-wrong"
      ? setOpaque(<p className={style.opaque}>Not-Metal!!</p>)
      : sensor;
    sensor === "non-metal"
      ? setOpaque(<p className={style.opaque}>{id}</p>)
      : sensor === "non-metal-wrong"
      ? setOpaque(<p className={style.opaque}> Metal!!</p>)
      : sensor;
  }, [sensor, id]);
  return { opaque };
};

export default SensorArgument;
