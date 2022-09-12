import React from "react";
import Borders from "./Borders";
import Map from "./Map";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCountry } from "../actions";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";

const CountryDetails = (props) => {
  let params = useParams();
  useEffect(() => {
    props.fetchCountry(params.cca3Code);
    window.scrollTo(0, 0);
  }, [params.cca3Code]);

  const renderNativeNames = () => {
    const nameKeys = Object.keys(props.details.name.nativeName);
    const nativeNames = nameKeys.map((key) => {
      return (
        <span className="list-item" key={key}>
          {`${key.toUpperCase()}: ${props.details.name.nativeName[key].common}`}
        </span>
      );
    });
    return nativeNames;
  };

  const renderValues = (object, objectKeyString) => {
    const nameKeys = Object.keys(object);
    const currencies = nameKeys.map((key) => {
      return (
        <span className="list-item" key={key}>
          {objectKeyString ? object[key][objectKeyString] : object[key]}
        </span>
      );
    });
    return currencies;
  };

  const renderDetails = () => {
    const {
      flags,
      name,
      population,
      region,
      subregion,
      capital,
      tld,
      currencies,
      languages,
      borders,
      latlng,
    } = props.details;
    return (
      <div className="container country-details">
        <div className="button-container">
          <BackButton text="Back" />
        </div>
        <div className="details">
          <div className="image-container">
            <img src={flags.svg} alt={`image of the flag of ${name.common}`} />
          </div>
          <div className="all-content">
            <div className="content-section">
              <h2 className="">{name.common}</h2>
            </div>
            <div className="content">
              <ul className="content-section">
                <li className="content-line">
                  Native Names: {renderNativeNames()}
                </li>
                <li className="content-line">
                  Population: <span>{population.toLocaleString("en-US")}</span>
                </li>
                <li className="content-line">
                  Region: <span>{region}</span>
                </li>
                <li className="content-line">
                  Sub Region: <span>{subregion}</span>
                </li>
                <li className="content-line">
                  Capital: <span>{capital}</span>
                </li>
              </ul>
              <ul className="content-section">
                <li className="content-line">
                  Top Level Domain: <span>{renderValues(tld)}</span>
                </li>
                <li className="content-line">
                  Currencies: <span>{renderValues(currencies, "name")}</span>
                </li>
                <li className="content-line">
                  Languages: <span>{renderValues(languages)}</span>
                </li>
              </ul>
            </div>
            {!borders ? (
              <div className="loading">No bordering countries</div>
            ) : (
              <Borders borderCodes={borders} />
            )}
          </div>
        </div>
        <Map coords={latlng} />
      </div>
    );
  };

  return (
    <div>
      {props.details ? (
        renderDetails()
      ) : (
        <h2 className="loading">Loading...</h2>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    details: state.country[0],
  };
};

export default connect(mapStateToProps, { fetchCountry })(CountryDetails);
