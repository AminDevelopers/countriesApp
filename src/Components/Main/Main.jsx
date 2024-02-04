import React from "react";
import "./Main.css";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div className="Main">
      <div className="navbar">
        <h2>where in the world ?</h2>
        <div className="darkMode">
          <ion-icon name="moon-outline"></ion-icon>
          <p>dark mode</p>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
