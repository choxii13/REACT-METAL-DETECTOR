import CreateTable from "./CreateTable";
import style from "./main.module.css";
const SensorContainer = ({ drag, opaque }) => {
  return (
    <div className={style.sensorcontainer}>
      <div className={style.sensor}>{!drag && opaque} </div>
      <CreateTable />
    </div>
  );
};

export default SensorContainer;
