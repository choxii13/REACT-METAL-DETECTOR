import style from "./app.module.css";
const SensorContainer = ({ id }) => {
  return (
    <div className={style.sensorcontainer}>
      <div className={style.sensor}>
        <p className={style.opaque}>Metal!!</p>
      </div>
    </div>
  );
};

export default SensorContainer;
