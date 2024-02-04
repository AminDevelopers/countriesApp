import React, { useState } from "react";
import "./Main.css";
import { Outlet } from "react-router-dom";

export default function Main() {
  const [dark, setDark] = useState(true);
  const color = dark ? { color: "black" } : { color: "hsl(0, 0%, 98%)" };

  const handleDarkClick = () => {
    setDark(!dark);
  };

  return (
    <div className="Main">
      <div className="navbar">
        <h2>where in the world ?</h2>
        <div className="darkMode">
          <ion-icon style={color} name="moon-outline"></ion-icon>
          <p onClick={handleDarkClick}>dark mode</p>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
