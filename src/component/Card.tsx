import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Card = ({ title, description, icon }) => {
  return (
    <div className="max-sm:text-center max-md:text-center">
      <a
        href="#"
        className="flex flex-col items-center rounded-lg md:flex-row md:max-w-5xl hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="lg:pb-24 ">
        <FontAwesomeIcon
          icon={icon as IconProp}
          className="text-6xl p-4 border-black border-2 border-t-[3px] " // Removed border and padding adjusted
        />
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3  font-normal text-gray-700 dark:text-gray-400 text-base">
            {description}
          </p>
        </div>
      </a>
    </div>
  );
};

export default Card;
