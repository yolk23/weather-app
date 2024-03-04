import React from "react";
import { useState, useEffect } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState("");
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";

  useEffect(() => {
    fetchData();
  });
  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);

        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div style={{ border: "solid" }}>
      <div>Weather</div>
    </div>
  );
};

export default Weather;
