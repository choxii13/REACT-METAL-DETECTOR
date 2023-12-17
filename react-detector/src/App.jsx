import { useEffect, useState } from "react";
import MainContent from "./components/firstpage/MainContent";
import MyTable from "./components/secondpage/MyTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FetchingData from "./components/secondpage/FetchingData";

function App() {
  const { data } = FetchingData();
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainContent />} />
        <Route path="/" element={<MainContent />} />
        <Route path="mytable" element={<MyTable data={data} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
