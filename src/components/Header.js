import React from "react";

const Header = (props) => {
  return (
    <section className="header container">
      <p className="h-text">Where in the world?</p>
      <button className="mode-toggle" onClick={props.setMode}>
        <i className="moon icon"></i>
        <span className="button-text">Dark Mode</span>
      </button>
    </section>
  );
};

export default Header;
