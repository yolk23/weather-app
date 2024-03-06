import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const TempChart = (props) => {
  const data = [
    { name: "Temp", uv: 0, pv: 2400, amt: 2400 },
    { uv: 300, pv: 2400, amt: 2400 },
    { uv: 400, pv: 2400, amt: 2400 },
    { uv: 2000, pv: 2400, amt: 2400 },
  ];

  const renderLineChart = (
    <>
      <h1 style={{ fontSize: "10px" }}></h1>
      <LineChart width={1000} height={200} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </>
  );
  return <div>{renderLineChart}</div>;
};

export default TempChart;
