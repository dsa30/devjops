import React from "react";
import creative from "../logos/creative.svg";

const Card = () => {
  return (
    <div className="card">
      <img className="card-image" src={creative} alt="blogr logo" />
      <ul className="card-time">
        <li>20h ago</li>
        <li>Part Time</li>
      </ul>
      <h2>Haskell and PureScript Dev</h2>
      <p>Blogr</p>
      <p>United States</p>
    </div>
  );
};

export default Card;
