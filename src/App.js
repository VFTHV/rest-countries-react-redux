import React, { useState, useEffect } from "react";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";

const App = () => {
  const [mode, toggleMode] = useState("");

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
      <HashRouter>
        <Header setMode={setMode} />
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
