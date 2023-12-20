import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContainer from "./components/firstpage/MainContainer";
import SecondContainer from "./components/secondpage/SecondContainer";
import NotFound from "./components/notfoundpage/NotFound";
import ThirdContainer from "./components/thirdpage/ThirdContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainContainer />} />
        <Route path="/" element={<MainContainer />} />
        <Route path="/Table" element={<SecondContainer />} />
        <Route path="/Table/:id" element={<ThirdContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
