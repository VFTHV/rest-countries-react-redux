import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { fetchBorders } from "../actions";

const Borders = (props) => {
  useEffect(() => {
    props.fetchBorders(props.borderCodes);
  }, []);
  let navigate = useNavigate();

  const renderButtons = () => {
    return props.borders.map((country) => {
      return (
        <button
          onClick={() => {
            navigate(`/details/` + country.cca3.toLowerCase());
            window.location.reload();
          }}
          key={country.name.common}
          className="button border-button element"
        >
          {console.log(country)}
          {country.name.common}
        </button>
      );
    });
  };

  return (
    <div className="content-section">
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
