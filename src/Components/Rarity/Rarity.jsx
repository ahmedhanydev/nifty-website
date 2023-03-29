import React from "react";
import card1Img from "../../assets/images/rarity/card-01@2x.png";
import card2Img from "../../assets/images/rarity/card-02@2x.png";
import card3Img from "../../assets/images/rarity/card-03@2x.png";
import card4Img from "../../assets/images/rarity/card-04@2x.png";
import card5Img from "../../assets/images/rarity/card-05@2x.png";
import rarityBackgroundImg from "../../assets/images/rarity/background@2x.png";
import "./Rarity.css";
const Rarity = () => {
  return (
    <>
      <section className="rarity" id="rarity">
        <img
          src={rarityBackgroundImg}
          alt="back"
          className="rarity__background"
        />
        <div className="container rarity__container">
          <h2 className="rarity__title squiggly">Rarity</h2>
          <div className="rarity__cards">
            <div className="rarity__col">
              <div className="rarity-card rarity-card-big">
                <div className="rarity-card__content">
                  <span className="rarity-card__value">9.999</span>
                  <span className="rarity-card__name">Total Rabbits</span>
                  <ul className="rarity-card__list">
                    <li className="rarity-card__item blue">Citizens</li>
                    <li className="rarity-card__item violet">Warriors</li>
                    <li className="rarity-card__item yellow">Warlords</li>
                    <li className="rarity-card__item orange">Savages</li>
                    <li className="rarity-card__item blue">Extra (+19)</li>
                  </ul>
                </div>
                <img src={card1Img} alt="back" className="rarity-card__back" />
              </div>
            </div>
            <div className="rarity__col">
              <div className="rarity__line">
                <div className="rarity-card">
                  <div className="rarity-card__content">
                    <span className="rarity-card__name">Citizens</span>
                    <span className="rarity-card__value">6 831</span>
                  </div>
                  <img
                    src={card2Img}
                    alt="back"
                    className="rarity-card__back"
                  />
                </div>
                <div className="rarity-card">
                  <div className="rarity-card__content">
                    <span className="rarity-card__name">Warriors</span>
                    <span className="rarity-card__value">2 000</span>
                  </div>
                  <img
                    src={card3Img}
                    alt="back"
                    className="rarity-card__back"
                  />
                </div>
              </div>
              <div className="rarity__line">
                <div className="rarity-card">
                  <div className="rarity-card__content">
                    <span className="rarity-card__name">Warlords</span>
                    <span className="rarity-card__value">999</span>
                  </div>
                  <img
                    src={card4Img}
                    alt="back"
                    className="rarity-card__back"
                  />
                </div>
                <div className="rarity-card">
                  <div className="rarity-card__content">
                    <span className="rarity-card__name">Savages</span>
                    <span className="rarity-card__value">150</span>
                  </div>
                  <img
                    src={card5Img}
                    alt="back"
                    className="rarity-card__back"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rarity;
