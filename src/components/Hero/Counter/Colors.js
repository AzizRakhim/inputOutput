import React from "react";
import "../../../App.css";
import "./Counter.css";
import macObject from "../../Object";

function Colors () {
  return (
    <ul className="hero__choice-list d-flex align-items-center flex-wrap">
      {macObject[0].color.map((item, index) => {
        return (
          <li key={index} className="hero__choice-item color-item col-6">
            <button className="hero__choice-btn color-btn">
              {item === "Gold" ? <span className="hero__color-circle"></span> : item === "Silver" ? <span className="hero__color-circle silver"></span> : <span className="hero__color-circle grey"></span>}
              <div className="hero__color-text">
                {item}
              </div>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default Colors;