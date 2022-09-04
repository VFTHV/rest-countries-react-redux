import React from "react";
import { useNavigate } from "react-router-dom";

const CountryCard = (props) => {
  let navigate = useNavigate();

  return (
    <div
      className="card-container"
      onClick={() => {
        navigate(`/details/` + props.cca3Code.toLowerCase());
      }}
    >
      <div className="image-container">
        <img src={props.flag.png} />
      </div>
      <div className="content-container">
        <h2 className="capital-name">{props.name.common}</h2>
        <p className="card-details">
          Population: <span>{props.population.toLocaleString("en-US")}</span>
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
