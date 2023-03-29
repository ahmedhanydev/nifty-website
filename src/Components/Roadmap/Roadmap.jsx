import React, { useEffect, useState } from "react";
import rockettopImg from "../../assets/images/roadmap/rocket-top.png";
import earthImg from "../../assets/images/roadmap/earth.png";
import moonImg from "../../assets/images/roadmap/moon.png";
import rocketsmallImg from "../../assets/images/roadmap/rocket-small.png";
import hareImg from "../../assets/images/roadmap/hare.png";
import plateOneImg from "../../assets/images/roadmap/plate-1.png";
import plateTwoImg from "../../assets/images/roadmap/plate-2.png";
import rubbishImg from "../../assets/images/roadmap/rubbish.png";
import shipImg from "../../assets/images/roadmap/ship.png";
import shipsImg from "../../assets/images/roadmap/ships.png";
import planetShardImg from "../../assets/images/roadmap/planet-shard.png";
import saturnImg from "../../assets/images/roadmap/saturn.png";
import planetZoomedImg from "../../assets/images/roadmap/planet-zoomed.png";
import collectionOneImg from "../../assets/images/roadmap/collection-1.png";
import collectionTwoImg from "../../assets/images/roadmap/collection-2.png";
import collectionThreeImg from "../../assets/images/roadmap/collection-3.png";
import "./Roadmap.css";
const Roadmap = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="roadmap" id="roadmap">
        <div className="container">
          <h2>
            <span style={{ display: "block" }} className="squiggly">
              Roadmap
            </span>
          </h2>
        </div>
        <div className="roadmap__container -phase12">
          <div className="roadmap__content">
            <div className="roadmap-offset__wrapper">
              <div className="roadmap__content-block">
                <h3>Phase 1</h3>
                <div className="text-block">
                  <div className="text-block__left">
                    <p className="icon-circle-before text-cross-through">
                      Landing page - represents our collection and the future
                      really well.
                    </p>
                    <p className="icon-circle-before text-cross-through">
                      Collection of 9,999 2D randomly generated arts, with over
                      500 unique traits.
                    </p>
                    <p className="icon-circle-before text-cross-through">
                      Kick-off of the active phase of our NFT collection's
                      marketing campaign
                    </p>
                  </div>
                  <div className="text-block__right">
                    <p className="icon-circle-before">
                      Liquidity Pools instead of the NFTX and NFT20
                    </p>
                    <p className="icon-circle-before">
                      NiftyNafty Wear - exceptionally high-quality street wear,
                      produced by and made for FREE DROPS exclusively for OGs
                    </p>

                    <p className="icon-circle-before">
                      Development of the exclusive merchandise for our HODLers,
                      and unique and high quality wear.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="canvas">
              <img
                src={rockettopImg}
                style={{
                  top: `${-scrollY + 1000}px`,
                  right: `10%`,
                  transition: `position 0s ease`,
                }}
                alt=""
              />
              <img
                src={earthImg}
                alt=""
                style={{
                  top: `${scrollY - 1200}px`,
                  left: `${scrollY - 1200}px`,
                  transition: `position 0s ease`,
                }}
              />
              <img
                src={moonImg}
                alt=""
                // style={{
                //   marginBottom: `${scrollY}px`,
                //   // right: "10px",
                // }}
              />
              <img
                src={rocketsmallImg}
                style={{
                  top: `${-scrollY + 2500}px`,
                  // left: `${scrollY - 1000}px`,
                  transition: `position 0s ease`,

                  left: `15%`,
                }}
                alt=""
              />
            </div>
          </div>
          <div className="roadmap__content">
            <div className="roadmap-offset__wrapper">
              <div className="roadmap__content-block">
                <h3>Phase 2</h3>
                <div className="text-block">
                  <div className="text-block__left">
                    <h4>Q3-Q4 2022</h4>
                    <p className="icon-circle-before">
                      🤖 A collection of 2D Robot Hunters - 3000 NFTs, 750 of
                      each will be distributed to the first 500 owners of
                      NiftyNafty NFTs and 250 random holders of NiftyNafty NFTs.
                    </p>
                  </div>
                  <div className="text-block__right">
                    <h4>Q3 2022</h4>
                    <p className="icon-circle-before">
                      {" "}
                      🔥 CARROT CARROT CARROT
                    </p>
                    <p className="icon-circle-before">
                      🎁 Random holders will receive airdrops for rare
                      unreleased NFTs and other gifts
                    </p>
                    <p className="icon-circle-before">
                      Comics update – metaverse storytelling the history of our
                      NiftyNafty and their universe
                    </p>
                    <p className="icon-circle-before">
                      Our permanent holders will receive airdrops of collection
                      NFTs from our universe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="canvas">
              <img
                src={hareImg}
                style={{
                  transform: `rotate(${scrollY - 2400}deg)`,
                  transition: `transform 0s ease`,
                  top: `${1200}px`,
                  left: `${scrollY - 2300}px`,
                }}
                alt=""
              />
              <img
                src={plateOneImg}
                style={{
                  transition: `transform 0.5s ease`,
                  top: `${1500}px`,
                  left: `${scrollY - 2600}px`,
                }}
                alt=""
              />
              <img src={plateTwoImg} alt="" />
            </div>
          </div>
        </div>
        <div className="roadmap__container -phase3">
          <div className="roadmap-offset__wrapper left">
            <div className="roadmap__content-block">
              <h3>Phase 3</h3>
              <div className="text-block">
                <div className="text-block__left">
                  <h4>Q4 2023</h4>
                  <p className="icon-circle-before">
                    🙊 We are kicking off the creation of the Season 1 of our
                    animated series based on our NiftyNafty project – what will
                    make our collection simply iconic. If Gods of Bunnies allow.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="canvas">
            <img src={rubbishImg} alt="" />
            <img
              src={shipImg}
              style={{
                transition: `margin 0s ease`,
                // marginTop: `${scrollY + 1000}px`,
                marginRight: `${scrollY - 3400}px`,
                // top: `${scrollY - 500}px`,
                // left: `${scrollY - 3000}px`,
              }}
              alt=""
            />
            <img src={shipsImg} alt="" />
            <img
              src={planetShardImg}
              style={{
                transition: `margin 0s ease`,

                marginBottom: `${scrollY - 3600}px`,
                marginLeft: `${scrollY - 3000}px`,
                // top: `${scrollY - 500}px`,
                // left: `${scrollY - 3000}px`,
              }}
              alt=""
            />
          </div>
        </div>
        <div className="roadmap__container -phase4">
          <div className="roadmap__flow-container">
            <h3 className="title squiggly">
              OG HODLers will get a free access to the next two collections
            </h3>
            <div className="roadmap__collections">
              <div className="collection-card">
                <div className="collection">
                  <img
                    src={collectionOneImg}
                    style={{
                      transition: `transform 0s ease`,
                      manHeight: "400px",
                      maxHeight: `${scrollY - 3500}px`,

                      transform: `scale(1.${(scrollY + 500).toFixed(0)})`,
                    }}
                    alt=""
                  />
                  <div className="collection__wrapper">
                    <p className="collection__text">
                      9,999 2D generated arts, with over 300 unique traits
                    </p>
                  </div>
                </div>

                <div className="collection__wrapper mobile">
                  <p className="collection__text">
                    9,999 2D generated arts, with over 300 unique traits
                  </p>
                </div>
              </div>
              <div className="collection-card">
                <div className="collection">
                  <img
                    src={collectionTwoImg}
                    style={{
                      transition: `transform 0s ease`,
                      manHeight: "400px",
                      maxHeight: `${scrollY - 3500}px`,

                      transform: `scale(1.${(scrollY + 500).toFixed(0)})`,
                    }}
                    alt=""
                  />
                  <div className="collection__wrapper">
                    <p className="collection__text">
                      A collection of 2D Robot Hunters - 3000 NFTs
                    </p>
                  </div>
                </div>

                <div className="collection__wrapper mobile">
                  <p className="collection__text">
                    A collection of 2D Robot Hunters - 3000 NFTs
                  </p>
                </div>
              </div>
              <div className="collection-card">
                <div className="collection">
                  <img
                    src={collectionThreeImg}
                    style={{
                      transition: `transform 0s ease`,
                      manHeight: "400px",
                      maxHeight: `${scrollY - 3500}px`,

                      transform: `scale(1.${(scrollY + 500).toFixed(0)})`,
                    }}
                    alt=""
                  />
                  <div className="collection__wrapper">
                    <p className="collection__text">
                      NiftyNafaty Generation 2.0 3D NFT collections
                    </p>
                  </div>
                </div>

                <div className="collection__wrapper mobile">
                  <p className="collection__text">
                    NiftyNafaty Generation 2.0 3D NFT collections
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="canvas">
            <img src={saturnImg} alt="" />
            {/* <img src={uppingShipsImg} alt="" /> */}
            <img src={planetZoomedImg} alt="" />
          </div>
        </div>
        <div className="container__background"></div>

        <div id="roadmapFramByFrame" className="frame-by-frame -phase5">
          <img src="./assets/svg/frameByFrameWhite/02.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/03.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/04.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/05.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/06.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/07.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/08.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/09.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/10.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/11.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/12.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/13.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/14.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/15.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/16.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/17.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/18.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/19.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/20.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/21.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/22.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/23.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/24.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/25.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/26.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/27.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/28.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/29.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/30.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/31.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/32.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/33.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/34.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/35.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/36.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/37.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/38.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/39.svg" alt="" />
          <img src="./assets/svg/frameByFrameWhite/40.svg" alt="" />
        </div>
      </section>
    </>
  );
};

export default Roadmap;
