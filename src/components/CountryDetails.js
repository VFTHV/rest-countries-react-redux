import React from "react";
import Borders from "./Borders";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCountry } from "../actions";
import { useParams } from "react-router-dom";

const CountryDetails = (props) => {
  useEffect(() => {
    props.fetchCountry(params.cca3Code);
  }, []);
  let params = useParams();

  const renderNativeNames = () => {
    const nameKeys = Object.keys(props.details.name.nativeName);
    const nativeNames = nameKeys.map((key) => {
      return (
        <p key={key}>
          {`${key.toUpperCase()}: ${
            props.details.name.nativeName[key].common
          } `}
        </p>
      );
    });
    return nativeNames;
  };

  const renderValues = (object, objectKeyString) => {
    const nameKeys = Object.keys(object);
    const currencies = nameKeys.map((key) => {
      return (
        <p key={key}>
          {objectKeyString ? object[key][objectKeyString] : object[key]}
        </p>
      );
    });
    return currencies;
  };

  const renderDetails = () => {
    return (
      <div className="container details">
        <div className="button-container">
          <button className="details-cta">back</button>
        </div>
        <div className="image-container">
          <img src={props.details.flags.png} />
        </div>
        <div className="content-section">
          <h2 className="">{props.details.name.common}</h2>
        </div>
        <div className="content-section">
          <div className="content-line subsection">
            Native Names: <div>{renderNativeNames()}</div>
          </div>
          <p className="content-line">
            Population: <span>{props.details.population}</span>
          </p>
          <p className="content-line">
            Region: <span>{props.details.region}</span>
          </p>
          <p className="content-line">
            Subregion: <span>{props.details.subregion}</span>
          </p>
          <p className="content-line">
            Capital: <span>{props.details.capital}</span>
          </p>
        </div>
        <div className="content-section">
          <div className="content-line subsection">
            Top Level Domain: <div>{renderValues(props.details.tld)}</div>
          </div>
          <div className="content-line subsection">
            Currencies:{" "}
            <div>{renderValues(props.details.currencies, "name")}</div>
          </div>
          <div className="content-line subsection">
            Languages: <div>{renderValues(props.details.languages)}</div>
          </div>
        </div>
        {!props.details.borders ? (
          "Loading..."
        ) : (
          <Borders borderCodes={props.details.borders} />
        )}
      </div>
    );
  };

  // console.log(props.details.borders);

  return (
    <div>
      {props.details ? (
        renderDetails()
      ) : (
        <h2 className="loading">Loading...</h2>
      )}
      ;
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    details: state.country[0],
  };
};

export default connect(mapStateToProps, { fetchCountry })(CountryDetails);
