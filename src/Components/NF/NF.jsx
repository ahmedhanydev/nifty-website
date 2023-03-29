import React from "react";
import { Link } from "react-router-dom";
import rabbitRightImg from "../../assets/images/nf/rabbit-right-without-hand@2x.png";
import rabbitLeftImg from "../../assets/images/nf/rabbit-left@2x.png";
import background2Img from "../../assets/images/nf/background@2x.png";
import glassImg from "../../assets/images/glass.png";

import bombGif from "../../assets/images/bomb.gif";
import rightHandGif from "../../assets/images/right-hand.gif";
import "./NF.css";
const NF = () => {
  return (
    <>
      <section className="nf" id="lore">
        <img src={background2Img} alt="back" className="nf__background" />
        <div className="nf__container">
          <div className="nf__left">
            <div className="nf__rabbits">
              <img
                src={rabbitLeftImg}
                alt="rabbit"
                className="nf__rabbit nf__rabbit_01"
              />
              <img
                src={rabbitRightImg}
                alt="rabbit"
                className="nf__rabbit nf__rabbit_02"
              />
              <img src={bombGif} alt="" className="nf__rabbit_01_gif" />
              <img src={rightHandGif} alt="" className="nf__rabbit_02_gif" />
            </div>
          </div>
          <div className="nf__content">
            <h2 className="nf__title">Nifty nafty</h2>
            <p className="nf__text">
              No long and clear nights of the red planet could put to sleep
              young private Bugs in the barricades made of cosmic trash and soil
              of Mars, the only thing that was on his mind and could not leave
              him that night was the possibility of his species simply
              disappearing from this world. An army of robots were approaching,
              and in the distance the incessant shots of the laser cannons from
              the space were heard alongside unclear speeches from the
              loudspeakers of the robots.
            </p>
            <Link
              to="https://discord.gg/tvZhnBzy"
              target="_blank"
              className="btn nf__btn"
            >
              <span className="btn__text">Read Full Version</span>
              <img src={glassImg} alt="glass" className="btn__glass" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NF;
