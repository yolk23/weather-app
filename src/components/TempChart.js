import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const TempChart = (props) => {
  const temperatureObjects = [];

  if (props.data && props.data.hourly && props.data.hourly.temperature_2m) {
    const tempArr = props.data.hourly.temperature_2m.slice(0, 24);
    const timeArr = props.data.hourly.time.slice(0, 24);

    tempArr.forEach((temp, index) => {
      temperatureObjects.push({
        time: timeArr[index].replace(),
        temperature_2m: temp,
      });
    });
  }

  const renderLineChart = (
    <div style={{ height: "0vh" }}>
      <h3 style={{ color: "white" }}>Temps</h3>
      <LineChart width={1000} height={250} data={temperatureObjects}>
        <Line type="monotone" dataKey="temperature_2m" stroke="white" />
        <CartesianGrid stroke="white" />
        <XAxis dataKey="time" stroke="white" />
        <YAxis stroke="white" />
      </LineChart>
    </div>
  );

  return <div>{renderLineChart}</div>;
};

export default TempChart;
