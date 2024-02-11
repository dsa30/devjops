import React from "react";
import devjobs from "../assets/logos/devjobs.png";
import hamburger from "../assets/logos/bars.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <img src={devjobs} alt="devjobs logo" />
          <a href="#">
            <img src={hamburger} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
