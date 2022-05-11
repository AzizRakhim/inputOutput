import React from "react";
import "../../../App.css";
import "./Slider.css";
import macObject from "../../Object";

function Slider() {
  return (
    <div className="hero__img-holder col-12 col-lg-6">
      <div className="hero__smth position-relative">
        <div className="hero__big-img-holder d-flex">
        </div>
        <button className="full-screen">
          <i className="bx bx-fullscreen" />
        </button>
      </div>
      <ul className="hero__list d-flex align-items-center mt-4">
      </ul>
    </div>
  )
}

export default Slider;

// Setting the big img

window.addEventListener("load", () => {
  let elBigImgHolder = document.querySelector(".hero__big-img-holder");
  macObject[0].gold.forEach((item) => {
    let elImgKeeper = document.createElement("div");
    elImgKeeper.className = "hero__img-keeper";
  
    elImgKeeper.innerHTML = `
      <img src="${item}" alt="laptop">
    `;
  
    elBigImgHolder.appendChild(elImgKeeper);
  }); 
  
  // Setting the small imgs in carousel
  
  let elHeroList = document.querySelector(".hero__list");
  
  macObject[0].gold.forEach((item) => {
    let elImgitem = document.createElement("li");
    elImgitem.className = "hero__item";
  
    elImgitem.innerHTML = `
      <button class="hero__btn">
        <img src="${item}" alt="laptop">
      </button>
    `;
  
    elHeroList.appendChild(elImgitem);
  });
  
  let elImgSmallItems = elHeroList.querySelectorAll("li");
  elImgSmallItems[0].classList.add("active");
  carousel();
  
  // Slider
  
  function carousel(){
    let arr = document.querySelectorAll(".hero__item");
    arr.forEach((item, index) => {
      item.addEventListener("click", () => {
        arr.forEach((value) => {
          value.classList.remove("active");
        });
        item.classList.add("active");
  
        let elSlideWidth = document.querySelector('.hero__img-keeper img').clientWidth;
        elBigImgHolder.style.transform = `translateX(${-index * elSlideWidth}px)`;
      });
    });  
  }
})