import React from "react";
import "../stylings/Weather.css";
import { getCurrentDate } from "./utils";
import { useState, useEffect, useCallback } from "react";
const Weather = () => {
  const [weatherData, setWeatherData] = useState("");
  const [icon, setIcon] = useState("");
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=14.60&longitude=120.98&hourly=temperature_2m&hourly=weather_code";

  const fetchData = useCallback(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div class="wrapper">
      <div class="date">
        <h4>Right now in Philippines, MNL</h4>
        {/* <h6>Status:{weatherData.hourly.temperature_2m[0]}</h6> */}
        {getCurrentDate()}
        <h2>
          Current Weather:
          {
            weatherData.hourly.weather_code[
              weatherData.hourly.weather_code.length - 1
            ]
          }
        </h2>
      </div>
      <div class="chart">Chart</div>
      <div class="current">Current</div>
    </div>
  );
};

export default Weather;
