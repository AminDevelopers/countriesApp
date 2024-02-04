import React from "react";
import { Link, useParams } from "react-router-dom";
import "./CardDetail.css";

export default function CardDetail({ data }) {
  const { name } = useParams();
  const foundCard = data.find(
    (element) => String(element.name.common) === name
  );

  if (!foundCard) {
    return (
      <div className="errorCard">
        <h1 style={{ color: "red" }}>Card not found</h1>
      </div>
    );
  }

  return (
    <div className="CardDetail">
      <div className="top">
        <Link to={"/"} className="back">
          <ion-icon name="arrow-back-outline"></ion-icon>
          <p>back</p>
        </Link>
      </div>
      <div className="flex">
        <div className="img">
          <img src={foundCard.flags.png} alt="" />
        </div>
        <div className="block">
          <h1> {foundCard.name.common} </h1>
          <div className="info">
            <div className="infoLeft">
              <div className="native">
                <p>native name:</p>
                <p>
                  {foundCard.name.nativeName ? (
                    Object.values(foundCard.name.nativeName)[0]?.common
                  ) : (
                    <span>null</span>
                  )}
                </p>
              </div>
              <div className="population">
                <p>population:</p>
                <p>{foundCard.population} </p>
              </div>
              <div className="region">
                <p>region:</p>
                <p> {foundCard.region} </p>
              </div>
              <div className="subregion">
                <p>subregion:</p>
                <p> {foundCard.subregion} </p>
              </div>
              <div className="capital">
                <p>capital:</p>
                <p> {foundCard.capital} </p>
              </div>
            </div>
            <div className="infoRight">
              <div className="level">
                <p>top level domain:</p>
                <p>
                  {foundCard.tld ? (
                    Object.values(foundCard.tld)[0]
                  ) : (
                    <span>null</span>
                  )}
                </p>
              </div>
              <div className="currencies">
                <p>currencies:</p>
                <p>
                  {foundCard.currencies ? (
                    Object.values(foundCard.currencies)[0]?.name
                  ) : (
                    <span>null</span>
                  )}
                </p>
              </div>
              <div className="languages">
                <p>languages:</p>
                <p>
                  {foundCard.languages ? (
                    Object.values(foundCard.languages)?.join(", ")
                  ) : (
                    <span>null</span>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="border">
            <p>border countries:</p>
            <p className="borderName">
              {foundCard.borders ? (
                Object.values(foundCard.borders)?.join(",  ")
              ) : (
                <span>null</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
