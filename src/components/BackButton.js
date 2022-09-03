import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = (props) => {
  let navigate = useNavigate();

  return (
    <button onClick={() => navigate("/")} className="back button element">
      <i className="long arrow alternate left icon"></i>
      <span>{props.text}</span>
    </button>
  );
};

export default BackButton;
