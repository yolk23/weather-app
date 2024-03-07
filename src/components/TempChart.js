import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const TempChart = (props) => {
  const temperatureObjects = [];

  if (props.data && props.data.hourly && props.data.hourly.temperature_2m) {
    const tempArr = props.data.hourly.temperature_2m.slice(0, 24);
    const timeArr = props.data.hourly.time.slice(0, 24);

    tempArr.forEach((temp, index) => {
      temperatureObjects.push({
        time: timeArr[index],
        temperature_2m: temp,
      });
    });
  }

  const renderLineChart = (
    <>
      <h1 style={{ fontSize: "10px" }}></h1>
      <LineChart width={1000} height={200} data={temperatureObjects}>
        <Line type="monotone" dataKey="temperature_2m" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" />
        <YAxis />
      </LineChart>
    </>
  );

  return <div>{renderLineChart}</div>;
};

export default TempChart;
