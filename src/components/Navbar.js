import React from "react";
import "../stylings/Navbar.css";
import icon from "../images/icon.png";

const Navbar = () => {
  return (
    <div className="container">
      <div style={{ border: "solid" }}>
        <ul className="navbar-list">
          <li>Today</li>
          <li>Week</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
