import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Country from "./components/Country";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/country" element={<Country />} />
          <Route path="/" element={<Countries />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
