import React, { Component } from "react";
import "../../../App.css";
import "./Button.css";

class Button extends Component {
  constructor (props){
    super(props);
    this.state = {
      hi : "hi"
    }
  }

  render() {
    return (
      <section id="desc" className="desc">
        <div className="container">
          <div className="desc__btn-holder d-flex align-items-center">
            <button className="desc__summary">
              Tahlil
            </button>
            <button className="desc__spec">
              Texnik xususiyatlari
            </button>
            <span className="desc__color" />
          </div>
          <div className="desc__summary-info show-it">
            <p className="desc__summary-text">
              Eng ingichka va yengil Apple noutbuki endi M1 chipi tufayli yanada kuchliroq ishlaydi. 8 yadroli protsessor sizning vazifalaringizni katta tezlik blan amalga oshiradi. 8 yadroli GPU-ning to'liq quvvatidan foydalanib, grafikani talab qiladigan dasturlar va o'yinlarning keyingi darajasiga chiqing. Mashinani o'rganish uchun 16 yadroli Neural Engine yordamida operatsiyalarini tezlashtiradi va 18 soatgacha zaryad olmasdan ishlaydi. MacBook Air hali ham ixcham, lekin hozir u ancha kuchliroq.
            </p>
          </div>
          <div className="desc__specifications">
            <p className="desc__spec-text p-0 m-0">
              Ekran: 13,3 "(2560x1600)
            </p>
            <p className="desc__spec-text p-0 m-0">
              Matritsa: IPS
            </p>
            <p className="desc__spec-text p-0 m-0">
              Protsessor: Apple M1 (8x3200 MGts)
            </p>
            <p className="desc__spec-text p-0 m-0">
              Video karta: Apple grafikasi 8 yadroli, Apple grafikasi 7 yadroli
            </p>
            <p className="desc__spec-text p-0 m-0">
              Ulagichlar: Mikrofon / naushniklar kombinatsiyasi, Thunderbolt / USB 4 x 2
            </p>
            <p className="desc__spec-text p-0 m-0">
              USB Type-C funktsiyasi: Quvvatni etkazib berish, Thunderbolt 3, Thunderbolt 4
            </p>
            <p className="desc__spec-text p-0 m-0">
              Simsiz interfeyslar: Wi-Fi 802.11ax, Bluetooth 5.0
            </p>
            <p className="desc__spec-text p-0 m-0">
              Batareya quvvati: 49,9 Wh
            </p>
            <p className="desc__spec-text p-0 m-0">
              Ish vaqti: 18 soat
            </p>
            <p className="desc__spec-text p-0 m-0">
              Operatsion tizim: macOS
            </p>
            <p className="desc__spec-text p-0 m-0">
              Hajmi: 304.1x212.4x16.1 mm
            </p>
            <p className="desc__spec-text p-0 m-0">
              Og'irligi: 1,29 kg
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default Button;

// Desc buttons

window.addEventListener('load', () => {
  let elDescBtn = document.querySelector(".desc__summary");
  let elDescSpec = document.querySelector(".desc__spec");
  let elColor = document.querySelector(".desc__color");
  let eldescSummaryInfo = document.querySelector(".desc__summary-info");
  let elDescSpecification = document.querySelector(".desc__specifications");
  
  elDescSpec.addEventListener("click", () => {
    elColor.style.transform = "translateX(100%)";
    eldescSummaryInfo.classList.remove("show-it");
    elDescSpecification.classList.add("show-it");
  });
  
  elDescBtn.addEventListener("click", () => {
    elColor.style.transform = "translateX(0)";
    eldescSummaryInfo.classList.add("show-it");
    elDescSpecification.classList.remove("show-it");
  });
})