import React, { useState } from "react";
import whatis1Img from "../../assets/images/whatis/img-01@x.png";
import whatis2Img from "../../assets/images/whatis/img-02@2x.png";
import whatis3Img from "../../assets/images/whatis/img-03@2x.png";
import whatis4Img from "../../assets/images/whatis/img-04@2x.png";
import whatis5Img from "../../assets/images/whatis/img-05@2x.png";
import whatis6Img from "../../assets/images/whatis/img-06@2x.png";
import whatis7Img from "../../assets/images/whatis/img-07@2x.png";

import glassImg from "../../assets/images/glass.png";
import "./Whatis.css";
import { Link } from "react-router-dom";
const Whatis = () => {
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
      <section
        className="whatis"
        style={{ marginTop: `${rabbitsValue - 1}px` }}
      >
        <div className="container whatis__container">
          <div className="whatis__row whatis__row_first">
            <div className="whatis__col whatis__col_sm">
              <h2 className="whatis__title squiggly">WHAT IS NIFTYNAFTY?</h2>
            </div>
            <div className="whatis__col whatis__col_xl">
              <p className="whatis__text">
                A collection of 9,999 NFTs on the Ethereum blockchain. Each NFT
                is based on a random generation of over 500 hand-drawn unique
                traits.
              </p>
            </div>
          </div>
          <div className="whatis__row whatis__row_second">
            <div className="whatis__col whatis__col_sm">
              <Link to="/#roadmap" className="btn whatis__btn">
                <span className="btn__text">Check Our Roadmap</span>
                <img src={glassImg} alt="glass" className="btn__glass" />
              </Link>
            </div>
            <div className="whatis__col whatis__col_xl">
              <div className="whatis-grid">
                <img
                  src={whatis1Img}
                  className="whatis-grid__item01"
                  alt="img"
                />
                <img
                  src={whatis2Img}
                  className="whatis-grid__item02"
                  alt="img"
                />
                <img
                  src={whatis3Img}
                  className="whatis-grid__item03"
                  alt="img"
                />
                <img
                  src={whatis4Img}
                  className="whatis-grid__item04"
                  alt="img"
                />
                <img
                  src={whatis5Img}
                  className="whatis-grid__item05"
                  alt="img"
                />
                <picture>
                  <source
                    srcSet={whatis6Img}
                    media="(max-width: 524px)"
                    type="image/webp"
                  />
                  <img
                    src={whatis6Img}
                    className="whatis-grid__item06"
                    alt="img"
                  />
                </picture>
                <picture>
                  <source
                    srcSet={whatis7Img}
                    media="(max-width: 524px)"
                    type="image/webp"
                  />
                  <img
                    src={whatis7Img}
                    className="whatis-grid__item07"
                    alt="img"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whatis;
