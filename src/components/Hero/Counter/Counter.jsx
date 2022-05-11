import React, { Component } from "react";
import "../../../App.css";
import "./Counter.css";
import macObject from "../../Object";
import Ram from "./Ram";
import Memory from "./Memory";
import Colors from "./Colors";

class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {
      title : macObject[0].title,
      ram : macObject[0].ram,
      memory : macObject[0].spec[0].memory,
      color : macObject[0].color[0],
      price : macObject[0].spec[0].price,
      discount : macObject[0].spec[0].discount,
      constPrice : macObject[0].spec[0].price,
      constDiscount : macObject[0].spec[0].discount,
      num : 1
    }
  }
  
  render() {

    const addUp = () => {
      this.setState({
        price : this.state.price + this.state.constPrice,
        discount : this.state.discount + this.state.constDiscount,
        num : this.state.num + 1
      })
    }

    const minusDown = () => {
      if(this.state.num > 1){
        this.setState({
          price : this.state.price - this.state.constPrice,
          discount : this.state.discount - this.state.constDiscount,
          num : this.state.num - 1
        })
      }
    }

    return (
      <div className="hero__info col-12 col-lg-6">
        <div className="d-flex">
          <div className="title-holder">
            <h2 class="hero__title">
              {this.state.title} M1/<span class="ram-title">{this.state.ram}</span>/<span class="memory-title">{this.state.memory}</span> <span class="color-name">{this.state.color}</span>
            </h2>
          </div>
          <button className="external-btn">
            <i className="bx bx-link-external" />
          </button>
        </div>
        <div className="hero__container">
          <h3 className="hero__small-title">
            Ram
          </h3>
          <Ram />
        </div>
        <div className="hero__container">
          <h3 className="hero__small-title">
            Xotira hajmi
          </h3>
          <Memory />
        </div>
        <div className="hero__container">
          <h3 className="hero__small-title">
            Ranglar
          </h3>
          <Colors />
        </div>
        <div className="hero__calculator d-flex align-items-center">
          <button className="hero__calculator-btn minus" onClick={minusDown}>
            <span className="minus-top">-</span> 
          </button>
          <span className="hero__input">{this.state.num}</span>
          <button className="hero__calculator-btn plus" onClick={addUp}>
            +
          </button>
        </div>
        <div className="hero__price-holder">
          <span className="hero__price">
            <span className="real-price">
              {this.state.price}
            </span>
            so'm
          </span>
          <span className="crossed-price">
            <span className="hero__crossed-price">
              {this.state.discount}
            </span>
            so'm
          </span>
        </div>
        <div className="hero__buy-btn-holder">
          <button className="hero__buy-btn add-cart">
            Savatchaga qo'shish
          </button>
          <button className="hero__buy-btn compare">
            Taqqoslash
          </button>
        </div>
      </div>
    )
  }
}

export default Counter;

