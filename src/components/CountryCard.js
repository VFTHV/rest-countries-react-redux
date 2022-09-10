import React from "react";
import { useNavigate } from "react-router-dom";

const CountryCard = (props) => {
  let navigate = useNavigate();

  const { cca3Code, flag, name, population, region, capital } = props;

  return (
    <div
      className="card-container"
      onClick={() => {
        navigate(`/details/` + cca3Code.toLowerCase());
      }}
    >
      <div className="image-container">
        <img src={flag.png} alt={`image of the flag of ${name.common}`} />
      </div>
      <div className="content-container">
        <h2 className="capital-name">{name.common}</h2>
        <p className="card-details">
          Population: <span>{population.toLocaleString("en-US")}</span>
        </p>
        <p className="card-details">
          Region: <span>{region}</span>
        </p>
        <p className="card-details">
          Capital: <span>{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
