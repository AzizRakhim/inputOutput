import React from "react";
import "../../App.css";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="site-footer footer">
        <div className="container">
          <ul className="footer__list d-flex flex-wrap">
            <li className="footer__item col-6 col-lg-3">
              <h3 className="footer__title">
                Sotib ol
              </h3>
              <ul className="footer__inner-list">
                <li className="footer__inner-item">
                  <a href="/" className="footer__link">
                    Mac
                  </a>
                </li>
                <li className="footer__inner-item">
                  <a href="/" className="footer__link">
                    iPad
                  </a>
                </li>
                <li className="footer__inner-item">
                  <a href="/" className="footer__link">
                    iPhone
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer__item col-6 col-lg-3">
              <h3 className="footer__title">
                Kompaniya
              </h3>
              <ul className="footer__inner-list">
                <li className="footer__inner-item">
                  <a href="/" className="footer__link">
                    Yangiliklar
                  </a>
                </li>
                <li className="footer__inner-item">
                  <a href="/" className="footer__link">
                    Kompaniya haqida
                  </a>
                </li>
                <li className="footer__inner-item">
                  <a href="/" className="footer__link">
                    Do'kon manzillari
                  </a>
                </li>
                <li className="footer__inner-item">
                  <a href="/" className="footer__link">
                    Biznes uchun
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer__item col-6 col-lg-3">
              <h3 className="footer__title">
                Ma'lumot
              </h3>
              <ul className="footer__inner-list">
                <li className="footer__inner-item">
                  <a href="/" className="footer__link">
                    Muddatli to'lov
                  </a>
                </li>
                <li className="footer__inner-item">
                  <a href="/" className="footer__link">
                    Yetkazib berish
                  </a>
                </li>
                <li className="footer__inner-item">
                  <a href="/" className="footer__link">
                    Aloqa
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer__item col-6 col-lg-3">
              <h3 className="footer__title">
                Biz bilan bog'laning
              </h3>
              <ul className="footer__inner-list d-flex align-items-center">
                <li className="footer__inner-item social-item">
                  <a href="/" className="footer__link">
                    <i className="bx bxl-facebook-square" />
                  </a>
                </li>
                <li className="footer__inner-item social-item">
                  <a href="/" className="footer__link">
                    <i className="bx bxl-instagram" />
                  </a>
                </li>
                <li className="footer__inner-item social-item">
                  <a href="/" className="footer__link">
                    <i className="bx bxl-telegram" />
                  </a>
                </li>
                <li className="footer__inner-item social-item">
                  <a href="/" className="footer__link">
                    <i className="bx bxl-youtube" />
                  </a>
                </li>
                <li className="footer__inner-item social-item">
                  <a href="/" className="footer__link">
                    <i className="bx bxl-tiktok" />
                  </a>
                </li>
              </ul>
              <a className="footer__tel" href="tel:+998787772020">
                +998 78 777 20 20
              </a>
            </li>
          </ul>
          <div className="footer__bottom d-flex align-items-center justify-content-between">
            <p className="footer__text">
              Onlayn do'kon MacBro.uz. Barcha huquqlar himoyalangan.
            </p>
            <p className="footer__text">
              Developed by 
              <a className="footer__udevs" href="/">
                Udevs
              </a>
            </p>
          </div>
        </div>
      </footer>
      <div className="help">
        <button className="help__btn">
          Yordam
          <i className="bx bx-chevron-up" />
        </button>
      </div>
    </>
  )
}

export default Footer;