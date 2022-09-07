import React from "react";

const Header = (props) => {
  return (
    <header className="header container">
      <h1 className="h-text">Where in the world?</h1>
      <button className="mode-toggle" onClick={props.setMode}>
        <i className="moon icon"></i>
        <span className="button-text">Dark Mode</span>
      </button>
    </header>
  );
};

export default Header;
