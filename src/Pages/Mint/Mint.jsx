import React, { useRef } from "react";
import imageOne from "../../assets/images/Mint/preview.3dc505bf.gif";
import "./Mint.css";

const Mint = () => {
  const collectionBackground = useRef(null);
  let translateY = 0;
  requestAnimationFrame(function render() {
    if (collectionBackground.current !== null) {
      translateY += 0.3;
      collectionBackground.current.style.backgroundPositionY = `${-translateY}px`;
    }
    requestAnimationFrame(render);
  });

  return (
    <>
      <section className="mint__content">
        <div className="mint-back">
          <div className="mint-back__collections">
            <div
              ref={collectionBackground}
              className="collection-background"
            ></div>
          </div>
        </div>
        <div className="mc">
          <div className="mc__container">
            <div className="mc__left">
              <div className="mc-card">
                <div className="mc-card__image">
                  <img src={imageOne} alt="" />
                </div>
                <span className="mc-card__minted mc-card__minted_afterimage">
                  Minted 827 / 9999
                </span>
                <div className="mc-card__c-wrapper">
                  <h2 className="mc-card__title">
                    Max
                    <span className="blue">1NFTs</span>
                    <br />
                    per transaction
                  </h2>
                  <span className="mc-card__minted mc-card__minted_aftertitle">
                    Minted 827 / 9999
                  </span>
                </div>
              </div>
            </div>
            <div className="mc__right">
              <div className="mc-content">
                <h1 className="mc-content__title">
                  Mint NiftyNafty
                  <br />
                  is
                  <span className="lightred">LIVE!</span>
                </h1>
                <button className="mc-content__mint">
                  <span>CONNECT WALLET</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mint;
