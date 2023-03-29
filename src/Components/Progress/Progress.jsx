import React from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import "./Progress.css";
const Progress = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <>
      <section className="pro">
        <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="indicator"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>
        <ul ref={ref}>
          <li>
            <div className="progress__content">
              <div className="progress__wrapper content-1">
                <h2 data-text="25% sold out" className="title">
                  25% sold out
                </h2>
                <p data-text="10 lucky holders and 10 most active (on social media platforms) holders will be airdropped one free unique NiftyNafty NFTs.">
                  10 lucky holders and 10 most active (on social media
                  platforms) holders will be airdropped one free unique
                  NiftyNafty NFTs.
                </p>
              </div>
            </div>
          </li>
          <li>
            {" "}
            <div className="progress__content">
              <div className="progress__wrapper content-2">
                <h2 data-text="50% sold out" className="title">
                  50% sold out
                </h2>
                <p data-text="USD 10K we send to the animal protection fund.">
                  USD 10K we send to{" "}
                  <a to="https://www.youtube.com/watch?v=G393z8s8nFY">
                    the animal protection fund
                  </a>
                  .
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="progress__content">
              <div className="progress__wrapper content-3">
                <h2 className="title" data-text="75% sold out">
                  75% sold out
                </h2>
                <p data-text="NiftyNafty are all over the Mars and its satellites.">
                  NiftyNafty are all over the Mars and its satellites.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="progress__content">
              <div className="progress__wrapper content-3">
                <h2 className="title" data-text="100% sold out">
                  100% sold out
                </h2>
                <p data-text="Setting up the NiftyNafty DAO.">
                  Setting up the NiftyNafty DAO.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      {/* <section className="progress">
        <div className="container progress__container">
          <div className="progress__flow-container">
            <div className="progress__content">
              <div className="progress__wrapper content-1">
                <h2 data-text="25% sold out" className="title">
                  25% sold out
                </h2>
                <p data-text="10 lucky holders and 10 most active (on social media platforms) holders will be airdropped one free unique NiftyNafty NFTs.">
                  10 lucky holders and 10 most active (on social media
                  platforms) holders will be airdropped one free unique
                  NiftyNafty NFTs.
                </p>
              </div>
            </div>
            <div className="progress__content">
              <div className="progress__wrapper content-2">
                <h2 data-text="50% sold out" className="title">
                  50% sold out
                </h2>
                <p data-text="USD 10K we send to the animal protection fund.">
                  USD 10K we send to{" "}
                  <a to="https://www.youtube.com/watch?v=G393z8s8nFY">
                    the animal protection fund
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="progress__content">
              <div className="progress__wrapper content-3">
                <h2 className="title" data-text="75% sold out">
                  75% sold out
                </h2>
                <p data-text="NiftyNafty are all over the Mars and its satellites.">
                  NiftyNafty are all over the Mars and its satellites.
                </p>
              </div>
            </div>
            <div className="progress__content">
              <div className="progress__wrapper content-3">
                <h2 className="title" data-text="100% sold out">
                  100% sold out
                </h2>
                <p data-text="Setting up the NiftyNafty DAO.">
                  Setting up the NiftyNafty DAO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Progress;
