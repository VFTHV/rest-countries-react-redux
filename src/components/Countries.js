import React from "react";
import { useEffect } from "react";
import CountryCard from "./CountryCard";
import CountryForm from "./CountryForm";
import { fetchAll } from "../actions";
import { connect } from "react-redux";
import { render } from "@testing-library/react";

const Countries = (props) => {
  useEffect(() => {
    props.fetchAll();
  }, []);

  if (props.countries.length === 0) {
    return;
  }

  const renderCards = () => {
    return props.countries.map((country) => {
      return (
        <div key={Math.random()} className="container">
          <CountryCard
            flag={country.flags}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        </div>
      );
    });
  };

  return (
    <div className="countries">
      <CountryForm />
      {renderCards()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.allCountries,
  };
};

export default connect(mapStateToProps, { fetchAll })(Countries);
