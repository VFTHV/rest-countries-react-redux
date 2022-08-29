import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import Header from "./components/Header";

function App() {
  return (
    <div className="my-container dark-mode">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/details" element={<CountryDetails />} />
          <Route path="/" element={<Countries />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
