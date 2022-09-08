import React from "react";

const Header = ({ setMode, mode }) => {
  return (
    <header className="header container">
      <h1 className="h-text">Where in the world?</h1>
      <button className="mode-toggle" onClick={setMode}>
        <i className="moon icon"></i>
        <span className="button-text">{mode.modeName}</span>
      </button>
    </header>
  );
};

export default Header;
