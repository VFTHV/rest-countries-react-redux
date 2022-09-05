import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { assignCountry, assignRegion } from "../actions";

const BackButton = (props) => {
  let navigate = useNavigate();

  return (
    <button
      onClick={() => {
        // to go back to unsorted list
        props.assignCountry(null);
        props.assignRegion(null);
        navigate("/");
      }}
      className="back button element"
    >
      <i className="long arrow alternate left icon"></i>
      <span>{props.text}</span>
    </button>
  );
};

export default connect(null, { assignCountry, assignRegion })(BackButton);
