import React, { useState } from "react";
import ownnfVideo from "../../assets/video/OwnNiftyFifty.webm";
import glassGrayImg from "../../assets/images/glass-gray.png";
import "./Ownnf.css";
const Ownnf = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <section className="ownnf" id="whitelist">
        <video
          className="ownnf__video"
          // preload="false"
          autoPlay="autoplay"
          loop="loop"
          preload="auto"
          playsInline
          webkit-playsinline="true"
          c={value.toString()}
          muted
        >
          <source src={ownnfVideo} type="video/webm" />
        </video>
        <div className="ownnf__content">
          <div className="ownnf__figure ownnf__figure_01 t1 v1"></div>
          <div className="ownnf__figure ownnf__figure_02 t2 v2"></div>
          <div className="ownnf__figure ownnf__figure_03 t1 v3"></div>
          <div className="ownnf__figure ownnf__figure_04 t2 v4"></div>
          <div className="ownnf__figure ownnf__figure_05 t1 v5"></div>
          <h2 className="ownnf__title squiggly">Get Your Own NiftyNafty</h2>
          <a className="ownnf__btn" href="/mint">
            <span>Mint Now</span>
            <img src={glassGrayImg} alt="glass" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Ownnf;
