import Fetch from "./components/Fetch";
import MainContainer from "./components/MainContainer";
import MyTable from "./components/MyTable";

function App() {
  const { data } = Fetch("http://localhost:5000/Table");

  return <>{data && <MyTable data={data} />}</>;
}

export default App;
