import React from "react";
import WeatherIcon from "./WeatherIcon";

function WeatherCard({
  city,
  cloudiness,
  humidity,
  tempCur,
  tempHigh,
  tempLow,
  weatherType,
  windSpeed,
}) {
  return (
    <div className="weather-card-wrapper">
      <h2>{city}</h2>
      <div className="weather-card--weatherType">
        <WeatherIcon weatherType={weatherType} />
        <p>{weatherType}</p>
      </div>
      <div className="temp">
        <p>Current Temperature: {tempCur}&deg;F</p>
        <div className="temp-range">
          <p>High Temperature: {tempHigh}&deg;F</p>
          <p>Low Temperature: {tempLow}&deg;F</p>
        </div>
      </div>
      <p>Cloudiness: {cloudiness}%</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} mi/hr</p>
    </div>
  );
}

export default WeatherCard;
