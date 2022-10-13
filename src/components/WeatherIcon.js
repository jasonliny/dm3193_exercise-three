import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faCloud,
  faSun,
  faSnowflake,
  faUmbrella,
} from "@fortawesome/free-solid-svg-icons";

function WeatherIcon({ weatherType }) {
  switch (weatherType) {
    case "Clouds":
      return <FontAwesomeIcon icon={faCloud} />;
    case "Sun":
    case "Clear":
      return <FontAwesomeIcon icon={faSun} />;
    case "Rain":
      return <FontAwesomeIcon icon={faUmbrella} />;
    case "Thunderstorm":
      return <FontAwesomeIcon icon={faBolt} />;
    case "Snow":
      return <FontAwesomeIcon icon={faSnowflake} />;

    default:
      return null;
  }
}

export default WeatherIcon;
