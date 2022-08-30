import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import Header from "./components/Header";

const App = () => {
  const [mode, toggleMode] = useState("dark-mode");

  const setMode = () => {
    if (mode === "dark-mode") {
      toggleMode("");
    } else {
      toggleMode("dark-mode");
    }
  };
  useEffect(() => {}, [mode]);

  return (
    <div className={`top-container ${mode}`}>
      <BrowserRouter>
        <Header setMode={setMode} />
        <Routes>
          <Route path="/details" element={<CountryDetails />} />
          <Route path="/" element={<Countries />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
