import React from "react";
import BackButton from "./BackButton";

const CountryDetails = () => {
  const renderDetails = () => {
    return (
      <div className="container country-details">
        <div className="button-container">
          <BackButton text="Back" />
        </div>

        <div className="content-section">
          <h1 className="error">Error!!! This page doesn't exist</h1>
        </div>
      </div>
    );
  };

  return <div>{renderDetails()}</div>;
};

export default CountryDetails;
