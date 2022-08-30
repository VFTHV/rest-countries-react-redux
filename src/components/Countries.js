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

  if (props.countries.length === 0) {
    return;
  }

  console.log(props);

  const filterCountries = (region, country) => {
    if (region && !country) {
      return props.countries.filter(
        (eachCountry) => eachCountry.region === region
      );
    } else if (!region && country) {
      return props.countries.filter(
        (eachCountry) =>
          eachCountry.name.common.toLowerCase() === country.toLowerCase()
      );
    } else {
      // (!props.filter && !country)
      return props.countries;
    }
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
            />
          </div>
        );
      }
    );
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
    filter: state.filter,
  };
};

export default connect(mapStateToProps, { fetchAll })(Countries);
