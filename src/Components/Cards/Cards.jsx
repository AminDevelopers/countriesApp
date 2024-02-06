import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

export default function Cards({ tempData }) {
  return (
    <div className="cardsContainer">
      {tempData.map((element, index) => (
        <Link to={element.name.common} key={index} className="card">
          <img src={element.flags.png} alt="" />
          <h2> {element.name.common} </h2>
          <div className="population">
            <p>population:</p>
            <p> {element.population} </p>
          </div>
          <div className="region">
            <p>region:</p>
            <p> {element.region} </p>
          </div>
          <div className="capital">
            <p>capital:</p>
            <p> {element.capital} </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
