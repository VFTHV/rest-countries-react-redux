import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { fetchBorders } from "../actions";

const Borders = ({ borderCodes, borders, fetchBorders }) => {
  useEffect(() => {
    fetchBorders(borderCodes);
  }, [borderCodes]);
  let navigate = useNavigate();

  const renderButtons = () => {
    return borders.map((country) => {
      return (
        <button
          onClick={() => {
            navigate(`/details/` + country.cca3.toLowerCase());
          }}
          key={country.name.common}
          className="button border-button element"
        >
          {country.name.common}
        </button>
      );
    });
  };

  return (
    <div className="content-section borders">
      <h3 className="border-header">Border Countries:</h3>
      <div className="borders-cta">{renderButtons()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    borders: state.borders,
  };
};

export default connect(mapStateToProps, { fetchBorders })(Borders);
