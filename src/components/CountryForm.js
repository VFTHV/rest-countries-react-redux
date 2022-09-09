import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { assignCountry, assignRegion } from "../actions";

const CountryForm = (props) => {
  const [visibility, setVisibility] = useState("invisible");
  const [filter, setFilter] = useState("Filter by Region");
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", "All"];

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    props.assignCountry(debouncedTerm);
  }, [debouncedTerm]);

  const assignFilter = (region) => {
    setVisibility("invisible");
    setFilter(region);
    if (region === "All") region = null;
    props.assignRegion(region);
  };

  return (
    <div className="form-container">
      <div className="inputs">
        <i className="search icon"></i>
        <input
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          type="text"
          className="country-input element"
          placeholder="Search for a country..."
        />
      </div>

      <div className="dropdown">
        <div className="dropdown-control">
          <button
            className="dropdown-input element"
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
        <ul className={`dropdown-content element ${visibility}`}>
          {regions.map((region) => {
            return (
              <li
                key={region}
                className="dropdown-item"
                onClick={() => assignFilter(region)}
              >
                {region}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

export default connect(mapStateToProps, { assignCountry, assignRegion })(
  CountryForm
);
