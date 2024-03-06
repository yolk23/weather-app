import React from "react";
import "../stylings/MainContent.css";
import mnl from "../images/manila.jpg";

const MainContent = () => {
  return (
    <div style={{ border: "solid" }}>
      <div className="contain">
        <img className="billboard" src={mnl} alt="MNLA" />
        <div class="text">
          <h3>Philippines, MNL</h3>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
