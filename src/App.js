import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";

const App = () => {
  const [mode, setMode] = useState({ mode: "", modeName: "Light Mode" });

  const toggleMode = () => {
    if (mode.mode === "dark-mode") {
      setMode({ mode: "", modeName: "Light Mode" });
    } else {
      setMode({ mode: "dark-mode", modeName: "Dark Mode" });
    }
  };

  return (
    <div className={`top-container ${mode.mode}`}>
      <HashRouter>
        <Header setMode={toggleMode} mode={mode} />
        <Routes>
          <Route path="/details/:cca3Code" element={<CountryDetails />} />
          <Route path="/" element={<Countries />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
