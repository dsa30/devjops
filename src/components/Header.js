import React from "react";
import bar from "../bars.png";
import logo from "../devjobs.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <img src={logo} alt="devjobs logo" />
          <a href="#">
            <img src={bar} alt="hamburger menu bar" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
