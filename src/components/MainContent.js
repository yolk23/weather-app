import React from "react";
import { useState, useEffect } from "react";
import "../stylings/MainContent.css";
import mnl from "../images/manila.jpg";

const MainContent = () => {
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

  const today = new Date().toLocaleDateString();
  console.log(today);

  return (
    <div style={{ border: "solid" }}>
      <div className="contain">
        <img className="billboard" src={mnl} alt="MNLA" />
        <div class="text">
          <h1>Philippines, MNL</h1>
        </div>
        <div class="text-date">
          <h1>Date</h1>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
