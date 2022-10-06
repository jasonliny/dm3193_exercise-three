import React from "react";

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
    <div class="weather-card-wrapper">
      <h2>{city}</h2>
      <p>Weather Type: {weatherType}</p>
      <div class="temp">
        <p>Current Temperature: {tempCur}&deg;F</p>
        <div class="temp-range">
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
