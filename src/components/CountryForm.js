import React from "react";
import { useState, useEffect } from "react";

const CountryForm = () => {
  const [visibility, setVisibility] = useState("invisible");
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  useEffect(() => {}, [visibility]);

  const filter = (event, region) => {
    event.preventDefault();
    setVisibility("invisible");
    console.log("sorting by region: " + region);
  };

  return (
    <form>
      <div className="inputs container">
        <i className="search icon"></i>
        <input
          type="text"
          className="country-input"
          placeholder="Search for a country..."
        />
      </div>

      <div className="dropdown container">
        <div className="dropdown-control">
          {/* <input
            type="text"
            className="dropdown-input"
            placeholder="Filter by Region"
            aria-label="Text input with dropdown button"
            /> */}
          <button
            className="dropdown-input"
            onClick={(e) => {
              e.preventDefault();
              visibility === "invisible"
                ? setVisibility("visible")
                : setVisibility("invisible");
            }}
          >
            Filter by Region
          </button>
          <i className="angle down icon"></i>
        </div>
        <ul className={`dropdown-content ${visibility}`}>
          {regions.map((region) => {
            return (
              <li
                key={region}
                className="dropdown-item"
                onClick={(e) => filter(e, region)}
              >
                {region}
              </li>
            );
          })}
        </ul>
      </div>
    </form>
  );
};

export default CountryForm;
