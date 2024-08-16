import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./index.scss"; // Import your custom CSS for home styles
const Card = ({ title, description, icon }) => {
  return (
    <div className="cardContainer">
      <a href="#" className="card">
        <div className="lg:pb-24 ">
          <div className="iconContainer">
            <FontAwesomeIcon
              icon={icon as IconProp}
              className="icon " // Removed border and padding adjusted
            />
          </div>
        </div>
        <div className="textContainer">
          <h5 className="title">
            {title}
          </h5>
          <p className="description">
            {description}
          </p>
        </div>
      </a>
    </div>
  );
};

export default Card;
