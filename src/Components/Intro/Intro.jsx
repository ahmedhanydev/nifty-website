import React, { useState } from "react";
import backgroundImg from "../../assets/images/intro/background.jpg";
import symbolsImg from "../../assets/images/intro/symbols@2x.png";
import pathMobile from "../../assets/images/intro/path@mobile.png";
import pathImg from "../../assets/images/intro/path@2x.png";
import fightingRabbits from "../../assets/images/intro/fighting-rabbits@2x.png";

import starsGif from "../../assets/video/stars.gif";

import "./Intro.css";
const Intro = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [backgroundValue, setBackgroundValue] = useState(0);
  const [rabbitsValue, setRabbitsValue] = useState(0);
  const [rocksValue, setRocksValue] = useState(0);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setScrollPosition(currentPosition);
  };
  const [value, setValue] = useState(0);

  window.addEventListener("scroll", function () {
    // let value = window.scrollY;
    let value = window.scrollY;
    setValue(value);
  });
  window.addEventListener("load", Parallax);
  window.addEventListener("scroll", Parallax);
  function Parallax(event) {
    const backgroundValue = Math.min(50, window.scrollY * 0.1);
    setBackgroundValue(backgroundValue);
    const rocksValue = Math.max(-50, window.scrollY * -0.15);
    setRocksValue(rocksValue);
    const rabbitsValue = Math.max(-650, window.scrollY * -0.75);
    setRabbitsValue(rabbitsValue);
  }

  return (
    <>
      <section className="intro">
        <div className="intro__background">
          <picture>
            {/* <source
              srcSet="assets/images/intro/background@mobile.png"
              media="(max-width: 768px)"
              type="image/png"
            /> */}
            <img
              src={backgroundImg}
              alt="background"
              className="intro-back"
              style={{
                transition: `transform 0s ease`,

                transform: `translateY(${backgroundValue}px)`,
              }}
            />
          </picture>
          <img src={starsGif} alt="" className="intro-star" />
        </div>
        <div className="hero">
          <div className="hero__content">
            <div className="hero__title-wrapper">
              <img src={symbolsImg} alt="symbols" className="hero__letters" />
              <h1 className="hero__title">Nifty nafty</h1>
            </div>
            <p className="hero__subtitle">
              A Hand-Drawn Collection Made With Undivided Attention To Each
              Trait Has Galactic Future In The Ethereum Blockchain. Take Off
              With Us! Unbelievable Journey Awaits All The Holders. There Are 1
              Bonus Collections - Robot Hunters, Animated Series And More. This
              Collection Is Going Be Iconic
            </p>
          </div>
          <div className="hero__ai">
            <picture>
              {/* <source
                srcSet="assets/images/intro/rocks@mobile.png"
                media="(max-width: 768px)"
                type="image/png"
              /> */}
              <img src={pathMobile} alt="rocks" className="hero__rocks" />
            </picture>
            <picture>
              {/* <source srcSet="" type="image/webp" /> */}
              <img
                src={pathImg}
                alt="path"
                className="hero__path"
                style={{
                  transition: `transform 0s ease`,

                  transform: `translateY(${rabbitsValue}px)`,
                }}
              />
            </picture>
            <div
              className="hero__rabbits"
              style={{
                transform: `translateY(${rabbitsValue}px) translateX(-50%)`,
              }}
            >
              <img src={fightingRabbits} alt="rabbits" />
            </div>
            <picture>
              <source
                srcSet="assets/images/intro/path@mobile.png"
                media="(max-width: 768px)"
                type="image/png"
              />
              <img src={pathImg} alt="path" className="hero__path" />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
