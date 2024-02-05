import React from "react";
import { useState } from "react";
import Cards from "../Cards/Cards";
import "./Countries.css";

export default function Countries({ data }) {
  const [tempData, setTempData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  const research = (e) => {
    const newsearchTerm = e.target.value.toLowerCase();
    setSearchTerm(newsearchTerm);
    if (newsearchTerm.trim() === "") {
      setTempData(data);
    } else {
      setTempData(
        data.filter((element) =>
          element.name.common.toLowerCase().startsWith(newsearchTerm)
        )
      );
    }
  };

  return (
    <div className="Countries">
      <div className="container">
        <div className="top">
          <div className="input">
            <ion-icon name="search-outline"></ion-icon>
            <input
              onChange={research}
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
        <Cards data={searchTerm.trim() === "" ? data : tempData} />
      </div>
    </div>
  );
}
