import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBorders } from "../actions";

const Borders = (props) => {
  useEffect(() => {
    props.fetchBorders(props.borderCodes);
  }, []);

  console.log(props);

  const renderButtons = () => {
    return props.borders.map((country) => {
      return <button className="details-cta">{country.name.common}</button>;
    });
  };

  return (
    <div className="content-section">
      <h3>Border Countries:</h3>
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
