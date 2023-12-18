import { useEffect, useState } from "react";
import MainContent from "./components/firstpage/MainContent";
import MyTable from "./components/secondpage/MyTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainContent />} />
        <Route path="/" element={<MainContent />} />
        <Route path="mytable" element={<MyTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
