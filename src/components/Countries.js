import React from "react";
import { useEffect } from "react";
import CountryCard from "./CountryCard";
import CountryForm from "./CountryForm";
import { fetchAll } from "../actions";
import { connect } from "react-redux";

const Countries = (props) => {
  useEffect(() => {
    props.fetchAll();
  }, []);

  const filterCountries = (region, country) => {
    let countriesArray = [];
    if (region && !country) {
      countriesArray = props.countries.filter(
        (eachCountry) => eachCountry.region === region
      );
    } else if (!region && country) {
      countriesArray = props.countries.filter(
        (eachCountry) =>
          eachCountry.name.common.toLowerCase() === country.toLowerCase()
      );
      if (countriesArray.length === 0) {
        return [
          {
            name: {
              common:
                "OOOPS!!! Are you fucking stupid? Cannot write correctly?",
            },
            flags: { png: null },
            population: "N/A",
            region: "N/A",
            capital: "N/A",
          },
        ];
      }
    } else {
      countriesArray = props.countries;
    }
    return countriesArray;
  };

  const renderCards = () => {
    return filterCountries(props.filter.region, props.filter.country).map(
      (country) => {
        return (
          <div key={Math.random()} className="container">
            <CountryCard
              flag={country.flags}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              cca3Code={country.cca3}
            />
          </div>
        );
      }
    );
  };

  return (
    <div className="countries">
      <CountryForm />
      {props.countries.length === 0 ? (
        <h2 className="loading">Loading...</h2>
      ) : (
        renderCards()
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.allCountries,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, { fetchAll })(Countries);
