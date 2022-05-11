import React, { Component } from "react";
import "../../../App.css";
import "./Counter.css";
import macObject from "../../Object";

class Ram extends Component {
  constructor(props){
    super(props);
    this.hi = "hi";
  }
  
  render(){    
    return (
      <ul className="hero__choice-list ram-list d-flex align-items-center">
        {macObject.map((item, index) => {
          return (
            <li key={index} className="hero__choice-item col-6 col-lg-4">
              <button class="hero__choice-btn ram-btn">
                {item.ram} GB
              </button>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Ram;
