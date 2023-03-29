import React, { useContext, useState } from "react";
import "./Header.css";
import logo from "../../assets/images/intro/logo (1).png";
import glass from "../../assets/images/intro/glass.png";
import { NavLink } from "react-router-dom";
import Menu from "../Menu/Menu";
import { DataContext } from "../Context/ContextData";

const Header = () => {
  const { setShowMenu } = useContext(DataContext);
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>
          <div className="header__nav">
            <NavLink to="/" className="header__link">
              Home
            </NavLink>
            <NavLink
              to="https://twitter.com/nifty_nafty"
              className="header__link"
            >
              Twitter
            </NavLink>
            <NavLink
              to="https://discord.gg/niftynafty"
              className="header__link"
            >
              Discord
            </NavLink>
            <NavLink to="/#roadmap" className="header__link">
              Roadmap
            </NavLink>
          </div>
          <NavLink to="/mint" className="header__btn">
            <div className="header__btn-wrapper">
              <span className="header__btn-text">Mint Now</span>
              <img src={glass} alt="" className="header__btn-glass" />
            </div>
          </NavLink>
          <button
            className="burgermenu"
            onClick={() => {
              setShowMenu(true);
            }}
            id="burgermenu"
          ></button>
        </div>
      </header>
      <Menu />
    </>
  );
};

export default Header;
