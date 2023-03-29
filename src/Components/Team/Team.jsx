import React from "react";
import { Link } from "react-router-dom";
import team1Img from "../../assets/images/team/team-01.png";
import team2Img from "../../assets/images/team/team-02.png";
import team3Img from "../../assets/images/team/team-03.png";
import team4Img from "../../assets/images/team/team-04.png";
import team5Img from "../../assets/images/team/team-05.png";
import team6Img from "../../assets/images/team/team-06.png";
import "./Team.css";
const Team = () => {
  return (
    <>
      <section className="team" id="team">
        <div className="container team__container">
          <h2 className="team__title squiggly">Team</h2>
          <div className="team__box ">
            <button className="team-link link-deactivate">
              <div className="team-link__image">
                <img src={team1Img} alt="avatar" />
              </div>
              <h4 className="team-link__name">Aletro</h4>
              <p className="team-link__prof">
                Project manager and anonymous NFT critic
              </p>
            </button>
            <Link
              to="https://twitter.com/moIocko"
              target="_blank"
              className="team-link"
            >
              <div className="team-link__image">
                <img src={team2Img} alt="avatar" />
              </div>
              <h4 className="team-link__name">Molocko</h4>
              <p className="team-link__prof">
                Community manager and dairy product
              </p>
            </Link>
            <Link
              to="https://www.instagram.com/yawkta"
              target="_blank"
              className="team-link"
            >
              <div className="team-link__image">
                <img src={team3Img} alt="avatar" />
              </div>
              <h4 className="team-link__name">Bagi Kafteras</h4>
              <p className="team-link__prof">Developer, working for food</p>
            </Link>
            <Link
              to="https://instagram.com/tashchikof"
              target="_blank"
              className="team-link"
            >
              <div className="team-link__image">
                <img src={team4Img} alt="avatar" />
              </div>
              <h4 className="team-link__name">Shitzun</h4>
              <p className="team-link__prof">Artist and true warrio</p>
            </Link>
            <Link
              to="https://ge.linkedin.com/in/linurchubaev"
              target="_blank"
              className="team-link"
            >
              <div className="team-link__image">
                <img src={team5Img} alt="avatar" />
              </div>
              <h4 className="team-link__name">Enigma</h4>
              <p className="team-link__prof">
                Business, social and occasional drinker
              </p>
            </Link>
            <button className="team-link link-deactivate">
              <div className="team-link__image">
                <img src={team6Img} alt="avatar" />
              </div>
              <h4 className="team-link__name">Chaddy</h4>
              <p className="team-link__prof">
                Front-end, back-end developer and unicorn lover
              </p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
