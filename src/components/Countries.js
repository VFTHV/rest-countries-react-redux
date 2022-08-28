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

  const oneCountry = props.countries ? props.countries[0] : null;

  console.log(oneCountry);
  return (
    <div>
      <CountryForm />
      <CountryCard
        flag="here is flag"
        name="Germany"
        population="1000000"
        region="Europe"
        capital="Berlin"
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.allCountries,
  };
};

export default connect(mapStateToProps, { fetchAll })(Countries);
