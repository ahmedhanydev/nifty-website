import React from "react";
import "./Total.css";
const Total = () => {
  return (
    <>
      <section className="total" id="benefits">
        <div className="total-item">
          <div className="total-item__content fadein">
            <h3 className="total-item__suptitle squiggly">Bonuses</h3>
            <h2 className="total-item__title squiggly">
              2D ROBOT HUNTERS for all NiftyNafty holders
            </h2>
          </div>
        </div>
        <div className="total-item">
          <div className="total-item__content fadein">
            <h3 className="total-item__suptitle squiggly">Fast Pass</h3>
            <h2 className="total-item__title squiggly">
              30% off for the upcoming Generation 2.0
            </h2>
          </div>
        </div>
        <div className="total-item">
          <div className="total-item__content fadein">
            <h3 className="total-item__suptitle squiggly">Fees</h3>
            <h2 className="total-item__title squiggly">
              {" "}
              5.5% of royalty fees to DAO wallet and 6.5% cut by OpenSea
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Total;
