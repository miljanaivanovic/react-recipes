import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "black",
  };
  return (
    <nav>
      <h3 className="logo">FOOD</h3>
      <ul className="nav-items">
        <Link style={navStyle} to="/">
          <li>HOME</li>
        </Link>
        <Link style={navStyle} to="/createrecipe">
          <li>CREATE RECIPE</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
