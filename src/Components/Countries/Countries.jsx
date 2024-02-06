import React from "react";
import Cards from "../Cards/Cards";
import "./Countries.css";

export default function Countries({ data, tempData, setTempData }) {
  const handleContinent = (e) => {
    setTempData(data.filter((element) => element.region === e.target.value));
  };

  const research = (e) => {
    const newsearchTerm = e.target.value.toLowerCase();
    // setSearchTerm(newsearchTerm);
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
            <select onChange={handleContinent} name="select" id="selection">
              <option value="" selected disabled hidden>
                filter by region
              </option>
              <option value="Africa">africa</option>
              <option value="Americas">america</option>
              <option value="Asia">asia</option>
              <option value="Europe">europe</option>
              <option value="Oceania">oceania</option>
            </select>
          </div>
        </div>
        <Cards tempData={tempData} />
      </div>
    </div>
  );
}
