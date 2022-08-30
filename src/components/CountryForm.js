import React from "react";
import { useState, useEffect } from "react";

const CountryForm = () => {
  const [visibility, setVisibility] = useState("invisible");
  const [filter, setFilter] = useState("Filter by Region");
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  useEffect(() => {}, [visibility]);

  const filterCountries = (region) => {
    setVisibility("invisible");
    setFilter(region);
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
          <button
            className="dropdown-input"
            onClick={(e) => {
              e.preventDefault();
              visibility === "invisible"
                ? setVisibility("visible")
                : setVisibility("invisible");
            }}
          >
            {filter}
          </button>
          <i className="angle down icon"></i>
        </div>
        <ul className={`dropdown-content ${visibility}`}>
          {regions.map((region) => {
            return (
              <li
                key={region}
                className="dropdown-item"
                onClick={() => filterCountries(region)}
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
