import React from "react";
import "../stylings/Weather.css";
import { getCurrentDate, getCurrentHour } from "./utils";
import { useState, useEffect, useCallback } from "react";
import cloud from "../weather-icons/cloud.svg";
import sun from "../weather-icons/sun.svg";
import cloudRain from "../weather-icons/cloud-rain.svg";
import cloudLightning from "../weather-icons/cloud-lightning.svg";
import TempChart from "./TempChart.js";

const Weather = () => {
  const [weatherData, setWeatherData] = useState("");
  const [weatherState, setWeatherState] = useState(0);

  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=14.60&longitude=120.98&hourly=temperature_2m&hourly=weather_code&hourly=relative_humidity_2m";

  //Fetching API
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
      if (data) {
        setWeatherState(weatherData.hourly.weather_code[getCurrentHour() - 1]);
      }
      console.log(weatherState);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  //Rendering Icons
  const renderIcon = () => {
    switch (weatherState) {
      case 0:
        return <img src={sun} alt="Sun" />;
      case 1:
      case 2:
      case 3:
        return <img src={cloud} alt="Cloud" />;
      case 51:
      case 53:
      case 55:
      case 56:
      case 57:
        return <img src={cloudRain} alt="Cloud Rain" />;
      case 95:
      case 96:
      case 99:
        return <img src={cloudLightning} alt=" Lightning Cloud" />;
      default:
        return <h1>Error</h1>;
    }
  };

  function handleIcon(input) {
    switch (input) {
      case 0:
        return <img src={sun} alt="Sun" />;
      case 1:
      case 2:
      case 3:
        return <img src={cloud} alt="Cloud" />;
      case 51:
      case 53:
      case 55:
      case 56:
      case 57:
        return <img src={cloudRain} alt="Cloud Rain" />;
      case 95:
      case 96:
      case 99:
        return <img src={cloudLightning} alt=" Lightning Cloud" />;
      default:
        return <h1>Error</h1>;
    }
  }

  return (
    <div class="wrapper">
      <div class="date" style={{ border: "solid" }}>
        <h4>Right now in Philippines, MNL</h4>
        <h6>
          Temperature:
          {weatherData &&
            weatherData.hourly.temperature_2m[getCurrentHour() - 1]}
        </h6>
        {getCurrentDate()}

        <div>{weatherData && handleIcon(weatherState)}</div>
        <h2>Current Weather:</h2>
        <h6>
          Humidity:
          {weatherData &&
            weatherData.hourly.relative_humidity_2m[getCurrentHour() - 1]}
          %
        </h6>
      </div>

      <div class="chart">
        <TempChart data={weatherData} />
      </div>

      {weatherData && (
        <>
          {[0, 24, 48, 72, 96].map((hour, index) => (
            <div key={index} className={`nextDay${index + 1}`}>
              {weatherData.hourly.time[hour].replace("T00:00", "")}
              <div>
                {weatherData &&
                  handleIcon(weatherData.hourly.weather_code[12 + hour])}
              </div>
              <h1>{weatherData.hourly.temperature_2m[hour]}</h1>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Weather;
