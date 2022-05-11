import React from "react";
import "../../../App.css";
import "./Counter.css";
import macObject from "../../Object";

function Memory () {
  return (
    <ul className="hero__choice-list memory-list d-flex align-items-center">
      {macObject[0].spec.map((item, index) => {
        return (
          <li key={index} className="hero__choice-item col-6 col-lg-4">
            <button class="hero__choice-btn memory-btn">
              {item.memory}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default Memory;