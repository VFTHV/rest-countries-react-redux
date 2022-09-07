import React from "react";
import Borders from "./Borders";
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

  console.log("params: ", params);
  console.log("props: ", props);

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
    return (
      <div className="container country-details">
        <div className="button-container">
          <BackButton text="Back" />
        </div>
        <div className="details">
          <div className="image-container">
            <img
              src={props.details.flags.svg}
              alt={`image of the flag of ${props.details.name.common}`}
            />
          </div>
          <div className="all-content">
            <div className="content-section">
              <h2 className="">{props.details.name.common}</h2>
            </div>
            <div className="content">
              <ul className="content-section">
                <li className="content-line">
                  Native Names: {renderNativeNames()}
                </li>
                <li className="content-line">
                  Population:{" "}
                  <span>
                    {props.details.population.toLocaleString("en-US")}
                  </span>
                </li>
                <li className="content-line">
                  Region: <span>{props.details.region}</span>
                </li>
                <li className="content-line">
                  Sub Region: <span>{props.details.subregion}</span>
                </li>
                <li className="content-line">
                  Capital: <span>{props.details.capital}</span>
                </li>
              </ul>
              <ul className="content-section">
                <li className="content-line">
                  Top Level Domain:{" "}
                  <span>{renderValues(props.details.tld)}</span>
                </li>
                <li className="content-line">
                  Currencies:{" "}
                  <span>{renderValues(props.details.currencies, "name")}</span>
                </li>
                <li className="content-line">
                  Languages:{" "}
                  <span>{renderValues(props.details.languages)}</span>
                </li>
              </ul>
            </div>
            {!props.details.borders ? (
              <div className="loading">No bordering countries</div>
            ) : (
              <Borders borderCodes={props.details.borders} />
            )}
          </div>
        </div>
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
