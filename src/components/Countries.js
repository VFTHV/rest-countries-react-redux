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

  const filterCountries = (region, countrySearchTerm) => {
    let countriesArray = [];
    if (region && !countrySearchTerm) {
      countriesArray = props.countries.filter(
        (eachCountry) => eachCountry.region === region
      );
    } else if (!region && countrySearchTerm) {
      countriesArray = props.countries.filter((eachCountry) => {
        const country = eachCountry.name.common.toLowerCase();
        const searchTerm = countrySearchTerm.toLowerCase().trim();

        return country.includes(searchTerm);
      });
      if (countriesArray.length === 0) {
        return [
          {
            name: {
              common: "OOOPS!!! Nothing to show! Please check your spelling!",
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
          <div key={Math.random()} style={{ paddingBottom: "3rem" }}>
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
    <div className="countries container">
      <CountryForm />
      {props.countries.length === 0 ? (
        <h2 className="loading">Loading...</h2>
      ) : (
        <div className="cards">{renderCards()}</div>
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
