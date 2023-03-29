import React, { useContext } from "react";
import twitterIcon from "../../assets/images/socials/twitter.svg";
import discordIcon from "../../assets/images/socials/discord.svg";
import glass from "../../assets/images/intro/glass.png";
import logo from "../../assets/images/intro/logo (1).png";

import "./Menu.css";
import { Link, NavLink } from "react-router-dom";
import { DataContext } from "../Context/ContextData";
const Menu = () => {
  const { setShowMenu } = useContext(DataContext);
  const { showMenu } = useContext(DataContext);

  return (
    <>
      {showMenu === true ? (
        <div className="menu_open" id="menu">
          <header className="menu__header">
            <div className="header__logo">
              <img src={logo} alt="" />
            </div>

            <Link to="/mint" className="header__btn">
              <span className="header__btn-wrapper">
                <span className="header__btn-text">Mint Now</span>
                <img src={glass} alt="" className="header__btn-glass" />
              </span>
            </Link>

            <button
              className="menu__closed"
              onClick={() => {
                setShowMenu(false);
              }}
              id="close-menu"
            ></button>
          </header>
          <div className="menu__body">
            <h3 className="menu__title">Menu</h3>
            <div className="header__nav cloned">
              <NavLink to="/" className="header__link">
                Home
              </NavLink>
              <NavLink to="/" className="header__link">
                Twitter
              </NavLink>
              <NavLink to="/" className="header__link">
                Discord
              </NavLink>
              <NavLink to="/#roadmap" className="header__link">
                Roadmap
              </NavLink>
            </div>
          </div>
          <footer className="menu__footer" data-clone="socials">
            <h3 className="menu__title">Get in touch</h3>
            <div className="socials-menu">
              <a href="#twitter" className="socials-menu__link twt">
                <img src={twitterIcon} alt="twitter" />
              </a>
              <a href="#discord" className="socials-menu__link ds">
                <img src={discordIcon} alt="discord" />
              </a>
            </div>
          </footer>
        </div>
      ) : (
        <div className="menu" id="menu">
          <header className="menu__header">
            <div className="header__logo">
              <img src={logo} alt="" />
            </div>
            <Link to="/mint" className="header__btn ">
              <span className="header__btn-wrapper">
                <span className="header__btn-text">Mint Now</span>
                <img src={glass} alt="" />
              </span>
            </Link>

            <button
              className="menu__closed"
              onClick={() => {
                setShowMenu(false);
              }}
              id="close-menu"
            ></button>
          </header>
          <div className="menu__body">
            <h3 className="menu__title">Menu</h3>
            <div className="header__nav">
              <NavLink to="/" className="header__link">
                Home
              </NavLink>
              <NavLink to="/" className="header__link">
                Twitter
              </NavLink>
              <NavLink to="/" className="header__link">
                Discord
              </NavLink>
              <NavLink to="/#roadmap" className="header__link">
                Roadmap
              </NavLink>
            </div>
          </div>
          <footer className="menu__footer" data-clone="socials">
            <h3 className="menu__title">Get in touch</h3>
            <div className="socials-menu">
              <a href="#twitter" className="socials-menu__link twt">
                <img src={twitterIcon} alt="twitter" />
              </a>
              <a href="#discord" className="socials-menu__link ds">
                <img src={discordIcon} alt="discord" />
              </a>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Menu;
