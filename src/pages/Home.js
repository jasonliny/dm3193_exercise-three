import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { WEATHER_APP_API_KEY } from "../API_KEYS";
import { useSearchParams } from "react-router-dom";
import WeatherCard from "../components/WeatherCard";
import Header from "../components/Header";

function Home() {
  // value stored in state for weather data
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("Orlando");
  const [searchParams] = useSearchParams();

  console.log("searchParams", searchParams);

  useEffect(() => {
    const cityToQuery = searchParams.get("city") || city;
    setCity(cityToQuery);
    // Query OpenWeather API for weather data
    // Make request to OpenWeather based on a city
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityToQuery}&appid=${WEATHER_APP_API_KEY}&units=imperial`
      )
      .then(function (response) {
        setWeatherData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setWeatherData({}); // reset weather data
      });
  }, []);

  const {
    cloudiness,
    humidity,
    tempCur,
    tempHigh,
    tempLow,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    const weatherMain = weatherData.main || {};
    const weatherCondition = weatherData.weather || [""];
    const weatherClouds = weatherData.clouds || {};
    const weatherWind = weatherData.wind || {};
    return {
      cloudiness: weatherClouds.all,
      humidity: weatherMain.humidity,
      tempCur: weatherMain.temp,
      tempHigh: weatherMain.temp_max,
      tempLow: weatherMain.temp_min,
      weatherType: weatherCondition[0].main,
      windSpeed: weatherWind.speed,
    };
  }, [weatherData]);

  // Display weather information in app
  console.log("state value", weatherData);
  return (
    <div style={{ backgroundColor: `rgba(0,0,0,${cloudiness / 100})` }}>
      <div className="weather-app-wrapper">
        <Header />
        <h1>Weather App</h1>
        <WeatherCard
          city={city}
          cloudiness={cloudiness}
          humidity={humidity}
          tempCur={tempCur}
          tempHigh={tempHigh}
          tempLow={tempLow}
          weatherType={weatherType}
          windSpeed={windSpeed}
        />
      </div>
    </div>
  );
}

export default Home;
