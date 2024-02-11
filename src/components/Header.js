import React from "react";
import devjobs from "../logos/devjobs.png";
import hamburger from "../logos/bars.png";

const Header = () => {
  return (
    <div>
      <div className="container">
        <img src={devjobs} alt="devjobs logo" />
        <a href="#">
          <img src={hamburger} />
        </a>
      </div>
    </div>
  );
};

export default Header;
