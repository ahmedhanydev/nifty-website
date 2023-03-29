import React, { useState } from "react";
import { motion } from "framer-motion";
import faqImg from "../../assets/images/faq/rabbit@2x.png";
import "./FAQ.css";
import { Link } from "react-router-dom";
const FAQ = () => {
  const [descOne, setDescOne] = useState(false);
  const [descTwo, setDescTwo] = useState(false);
  const [descThree, setDescThree] = useState(false);
  const [descFour, setDescFour] = useState(false);
  const [descFive, setDescFive] = useState(false);

  const openClose = (setItem, Item) => {
    if (Item === false) {
      setItem(true);
    } else {
      setItem(false);
    }
  };
  const Variants = {
    offscreen: {
      x: -300,
    },
    onscreen: {
      x: 60,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5,
      },
    },
  };
  const Variants2 = {
    offscreen: {
      x: 300,
    },
    onscreen: {
      x: 60,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.7,
      },
    },
  };

  return (
    <>
      <section className="faq" id="faq">
        <div className="container faq__container">
          <motion.div
            variants={Variants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            className="faq__image"
          >
            <img src={faqImg} alt="rabbit" />
          </motion.div>

          <motion.div
            variants={Variants2}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            className="faq__right"
          >
            <h2 className="faq__title squiggly">F.A.Q.</h2>
            <ul className="faq__list">
              <li className="faq-item">
                {descOne === true ? (
                  <span
                    className="faq-item__btn-opened"
                    onClick={() => {
                      openClose(setDescOne, descOne);
                    }}
                  >
                    1. Who is the team behind Nifty Nafty?
                  </span>
                ) : (
                  <span
                    className="faq-item__btn "
                    onClick={() => {
                      openClose(setDescOne, descOne);
                    }}
                  >
                    1. Who is the team behind Nifty Nafty?
                  </span>
                )}
                {descOne === true ? (
                  <p className="faq-item__content">
                    Our project was created partnership with one of the best
                    global agencies in the world – QClay Design (
                    <Link
                      style={{ display: "inline", color: "#4b66e9" }}
                      to="https://instagram.com/qclaydesign"
                    >
                      Instagram
                    </Link>
                    ,
                    <Link
                      style={{ display: "inline", color: "#4b66e9" }}
                      to="https://dribbble.com/qclay"
                    >
                      Dribbble
                    </Link>
                    ,
                    <Link
                      style={{ display: "inline", color: "#4b66e9" }}
                      to="https://tiktok.com/@qclay.design"
                    >
                      TikTok
                    </Link>
                    ), which is followed by over 150K professional designers
                    globally. This agency has experience of working with clients
                    like Spotify, Superbowl, Pixar, Indetex, Red Bull, and
                    Abode, which guarantees the implementation of all stages of
                    the NFT collection at the highest level. And our animator is
                    <Link
                      style={{ display: "inline", color: "#4b66e9" }}
                      to="https://www.youtube.com/c/Rikani/about"
                    >
                      Rikani
                    </Link>
                    (500k Followers).
                  </p>
                ) : null}
              </li>
              <li className="faq-item">
                {descTwo === true ? (
                  <span
                    className="faq-item__btn-opened"
                    onClick={() => {
                      openClose(setDescTwo, descTwo);
                    }}
                  >
                    2. How to mint with Metamask on a mobile phone?
                  </span>
                ) : (
                  <span
                    className="faq-item__btn "
                    onClick={() => {
                      openClose(setDescTwo, descTwo);
                    }}
                  >
                    2. How to mint with Metamask on a mobile phone?
                  </span>
                )}
                {descTwo === true ? (
                  <p className="faq-item__content">
                    If you are using a mobile phone to mint our lovely Nifty
                    Nafty, you need to use the Metamask application built-in
                    browser to mint our NFTs. Therefore, please launch the
                    Metamask application, click the 3 lines on the top left menu
                    in the application and select "Browser". It will open a web
                    browser and you will be able to navigate back to
                    niftynafty.com to do the minting.
                  </p>
                ) : null}
              </li>
              <li className="faq-item">
                {descThree === true ? (
                  <span
                    className="faq-item__btn-opened"
                    onClick={() => {
                      openClose(setDescThree, descThree);
                    }}
                  >
                    3. How to mint with Metamask on a computer?
                  </span>
                ) : (
                  <span
                    className="faq-item__btn "
                    onClick={() => {
                      openClose(setDescThree, descThree);
                    }}
                  >
                    3. How to mint with Metamask on a computer?
                  </span>
                )}
                {descThree === true ? (
                  <p className="faq-item__content">
                    If you are using a computer to mint our lovely Nifty Nafty,
                    you just need to connect the Metamask plugin with our
                    website, verify you have enough ETH to do the transaction,
                    then you will be able to click on the Mint button to buy a
                    few Nifty Nafty.
                  </p>
                ) : null}
              </li>
              <li className="faq-item">
                {descFour === true ? (
                  <span
                    className="faq-item__btn-opened"
                    onClick={() => {
                      openClose(setDescFour, descFour);
                    }}
                  >
                    4. How to pay less gas fees?
                  </span>
                ) : (
                  <span
                    className="faq-item__btn "
                    onClick={() => {
                      openClose(setDescFour, descFour);
                    }}
                  >
                    4. How to pay less gas fees?
                  </span>
                )}
                {descFour === true ? (
                  <p className="faq-item__content">
                    <Link to="https://metamask.zendesk.com/hc/en-us/articles/360015488771-How-to-adjust-Gas-Price-and-Gas-Limit">
                      https://metamask.zendesk.com/hc/en-us/articles/360015488771-How-to-adjust-Gas-Price-and-Gas-Limit
                    </Link>
                  </p>
                ) : null}
              </li>
              <li className="faq-item">
                {descFive === true ? (
                  <span
                    className="faq-item__btn-opened"
                    onClick={() => {
                      openClose(setDescFive, descFive);
                    }}
                  >
                    5. How to find out that i got into Whitelist?
                  </span>
                ) : (
                  <span
                    className="faq-item__btn "
                    onClick={() => {
                      openClose(setDescFive, descFive);
                    }}
                  >
                    5. How to find out that i got into Whitelist?
                  </span>
                )}
                {descFive === true ? (
                  <p className="faq-item__content">
                    You can open our Discord to check it -
                    <Link
                      style={{ color: " #4b66e9" }}
                      to="https://discord.gg/VKx7n5ehaT"
                    >
                      Discord
                    </Link>
                  </p>
                ) : null}
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
