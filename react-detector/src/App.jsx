import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContainer from "./components/firstpage/MainContainer";
import SecondContainer from "./components/secondpage/SecondContainer";
import ImageData from "./components/thirdpage/ImageData";
import NotFound from "./components/notfoundpage/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainContainer />} />
        <Route path="/" element={<MainContainer />} />
        <Route path="/Table" element={<SecondContainer />} />
        <Route path="/Table/:id" element={<ImageData />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
