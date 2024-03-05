import React from "react";
import "../stylings/MainContent.css";
import mnl from "../images/manila.jpg";

const MainContent = () => {
  const today = new Date().toLocaleDateString();

  return (
    <div style={{ border: "solid" }}>
      <div className="contain">
        <img className="billboard" src={mnl} alt="MNLA" />
        <div class="text">
          <h1>Philippines, MNL</h1>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
