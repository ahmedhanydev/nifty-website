import React from "react";
import footerLogo from "../../assets/images/union@2x.png";
import twitterIcon from "../../assets/images/socials/twitter.svg";
import discordIcon from "../../assets/images/socials/discord.svg";
import musicIcon from "../../assets/images/socials/music.svg";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer-content">
            <div className="footer-content__left">
              <h2 className="footer-content__title">
                <span>Nifty Nafty</span>
                <img src={footerLogo} alt="union" />
              </h2>
              <p className="footer-content__text">
                Shoot For The Stars - Aim For Mars
              </p>
              <div className="socials">
                <div className="socials__inner">
                  <Link
                    to="https://twitter.com/nifty_nafty"
                    className="socials__link"
                  >
                    <img src={twitterIcon} alt="twt" />
                  </Link>
                  <Link
                    to="https://discord.gg/niftynafty"
                    className="socials__link"
                  >
                    <img src={discordIcon} alt="discord" />
                  </Link>
                  <Link
                    to="https://tiktok.com/niftynafty"
                    className="socials__link"
                  >
                    <img src={musicIcon} alt="music" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="footer-content__right">
              <div className="footer-content__wrapper">
                <nav className="footer-content__nav">
                  <Link className="footer-content__nav-link" to="/">
                    Home
                  </Link>
                  <Link className="footer-content__nav-link" to="#rarity">
                    Rarity
                  </Link>
                  <Link className="footer-content__nav-link" to="#benefits">
                    Benefits
                  </Link>
                </nav>
                <nav className="footer-content__nav">
                  <Link className="footer-content__nav-link" to="#lore">
                    Lore
                  </Link>
                  <Link className="footer-content__nav-link" to="#roadmap">
                    Roadmap
                  </Link>
                  <Link className="footer-content__nav-link" to="#faq">
                    FAQ
                  </Link>
                </nav>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <p className="footer-copyright__text">
              Copyright © 2023. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
