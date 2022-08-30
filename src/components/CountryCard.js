import React from "react";

const CountryCard = (props) => {
  return (
    <div className="container card-container">
      <div className="image-container">
        <img src={props.flag.png} />
      </div>
      <div className="content-container">
        <h2 className="capital-name">{props.name.common}</h2>
        <p className="card-details">
          Population: <span>{props.population}</span>
        </p>
        <p className="card-details">
          Region: <span>{props.region}</span>
        </p>
        <p className="card-details">
          Capital: <span>{props.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
