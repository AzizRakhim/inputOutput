import React from "react";
import "../../../App.css";
import "./Carousel.css";

function Carousel() {
  return (
    <section id="similar" className="similar position-relative">
      <div className="container">
        <h2 className="similar__title">
          O'xshash mahsulotlar
        </h2>
        <div className="similar__list-holder position-relative">
          <ul className="similar__list">
            <li className="similar__item col-12 col-sm-6 col-lg-4">
              <button className="similar__btn">
                <div className="similar__img-container">    
                  <img src="https://cdn.macbro.uz/macbro/ad319481-63dc-4bc2-bf4d-7a6c7aec02f5" alt="computer" />
                </div>
                <p className="similar__name">
                  MacBook Pro 13" (with M1)
                </p>
                <span className="similar__price">
                  14 949 500
                </span>
              </button>
            </li>
            <li className="similar__item col-12 col-sm-6 col-lg-4">
              <button className="similar__btn">
                <div className="similar__img-container">    
                  <img src="https://cdn.macbro.uz/macbro/68a37b19-71f9-4342-addb-eae078edf11e" alt="computer" />
                </div>
                <p className="similar__name">
                  MacBook Air 13" (with Intel)
                </p>
              </button>
            </li>
            <li className="similar__item col-12 col-sm-6 col-lg-4">
              <button className="similar__btn">
                <div className="similar__img-container">    
                  <img src="https://cdn.macbro.uz/macbro/98128be6-9be6-4691-a236-ea092158ed2a" alt="computer" />
                </div>
                <p className="similar__name">
                  MacBook Pro 13-inch (with Intel)
                </p>
              </button>
            </li>
            <li className="similar__item col-12 col-sm-6 col-lg-4">
              <button className="similar__btn">
                <div className="similar__img-container">    
                  <img src="https://cdn.macbro.uz/macbro/6d8aecc6-0e5e-40b5-b33d-3d9774f4208d" alt="computer" />
                </div>
                <p className="similar__name">
                  MacBook Pro 16-inch
                </p>
                <span className="similar__price">
                  25 694 000 so'm
                </span>
              </button>
            </li>
            <li className="similar__item col-12 col-sm-6 col-lg-4">
              <button className="similar__btn">
                <div className="similar__img-container">    
                  <img src="https://cdn.macbro.uz/macbro/c9ad4d28-1980-4eaf-8b38-8007adcdf12e" alt="computer" />
                </div>
                <p className="similar__name">
                  Mac mini
                </p>
                <span className="similar__price">
                  9 110 000
                </span>
              </button>
            </li>
            <li className="similar__item col-12 col-sm-6 col-lg-4">
              <button className="similar__btn">
                <div className="similar__img-container">    
                  <img src="https://cdn.macbro.uz/macbro/955623b2-fcab-4ff4-9b70-459ef3c8e905" alt="computer" />
                </div>
                <p className="similar__name">
                  iMac 24 
                </p>
                <span className="similar__price">
                  19 270 500 so'm
                </span>
              </button>
            </li>
            <li className="similar__item col-12 col-sm-6 col-lg-4">
              <button className="similar__btn">
                <div className="similar__img-container">    
                  <img src="https://cdn.macbro.uz/macbro/46c341eb-d0ca-448a-a547-f6f45d6ba95a" alt="computer" />
                </div>
                <p className="similar__name">
                  iMac 27
                </p>
                <span className="similar__price">
                  22 190 500 so'm
                </span>
              </button>
            </li>
            <li className="similar__item col-12 col-sm-6 col-lg-4">
              <button className="similar__btn">
                <div className="similar__img-container">    
                  <img src="https://cdn.macbro.uz/macbro/0dafb741-6d31-43d6-b824-0b1ba4422271" alt="computer" />
                </div>
                <p className="similar__name">
                  MacBook Pro 14-inch
                </p>
                <span className="similar__price">
                  23 358 000 so'm
                </span>
              </button>
            </li>
            <li className="similar__item col-12 col-sm-6 col-lg-4">
              <button className="similar__btn">
                <div className="similar__img-container">    
                  <img src="https://cdn.macbro.uz/macbro/b9c18548-4286-4fd8-91ce-d89903f46e64" alt="computer" />
                </div>
                <p className="similar__name">
                  MacBook Pro 16-inch
                </p>
                <span className="similar__price">
                  28 614 000 so'm
                </span>
              </button>
            </li>
            <li className="similar__item col-12 col-sm-6 col-lg-4">
              <button className="similar__btn">
                <div className="similar__img-container">    
                  <img src="https://cdn.macbro.uz/macbro/df7ae0bb-ff0d-40b0-8fe8-d52c4a38d884" alt="computer" />
                </div>
                <p className="similar__name">
                  iMac 21
                </p>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <button className="arrow-btn left">
        <i className="bx bx-chevron-left" />
      </button>
      <button className="arrow-btn right">
        <i className="bx bx-chevron-right" />
      </button>
    </section>
  )
}

export default Carousel;

window.addEventListener("load", () => {
  let elSimilarList = document.querySelector(".similar__list");
  let elRight = document.querySelector(".right");
  let elLeft = document.querySelector(".left");
  let elCheck = 0;
  
  elRight.addEventListener("click", () => {
    elCheck++;
  
    carouselIt();
  });
  
  elLeft.addEventListener("click", () => {
    elCheck--;
  
    carouselIt();
  });
  
  function carouselIt(){
    if(elCheck === 0){
      elLeft.style.display = "none";
    } else if(elCheck > 0){
      elLeft.style.display = "block";
    }
  
    if(elCheck === 7){
      elRight.style.display = "none";
    } else{
      elRight.style.display = "block";
    }
  
    let elWidth = document.querySelector(".similar__item").clientWidth;
  
    elSimilarList.style.transform = `translate(${-elCheck * elWidth}px)`;
  }
})