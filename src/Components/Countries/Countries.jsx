import React from "react";
import "./Countries.css";
import Cards from "../Cards/Cards";

export default function Countries({ data, inputVal, handleInputVal }) {
  return (
    <div className="Countries">
      <div className="container">
        <div className="top">
          <div className="input">
            <ion-icon name="search-outline"></ion-icon>
            <input
              value={inputVal}
              onChange={handleInputVal}
              className="input"
              type="text"
              placeholder="Search for a country..."
            />
          </div>
          <div className="filter">
            <select name="select" id="selection">
              <option value="" selected disabled hidden>
                filter by region
              </option>
              <option value="africa">africa</option>
              <option value="america">america</option>
              <option value="asia">asia</option>
              <option value="europe">europe</option>
              <option value="oceania">oceania</option>
            </select>
          </div>
        </div>
        <Cards data={data} />
      </div>
    </div>
  );
}
