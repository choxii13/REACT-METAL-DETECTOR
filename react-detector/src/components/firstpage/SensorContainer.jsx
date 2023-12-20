import style from "./main.module.css";
const SensorContainer = ({ sensor }) => {
  return (
    <div className={style.sensorcontainer}>
      <div className={style.sensor}>
        {sensor && <p className={style.opaque}>{sensor}</p>}
      </div>
    </div>
  );
};

export default SensorContainer;
