import React from "react";
import "./Customer.css";
import Vector from "../../assets/images/Vector.png";
import Shopify from "../../assets/images/shopify-original.png";
import Amazon from "../../assets/images/amazon.png";
import Google from "../../assets/images/google-original.png";
import Netflix from "../../assets/images/netflix-primary.png";
const Customer = () => {
  return (
    <section className="customer">
      <div className="customer-container">
        <div className="customer-name">
          <p>Trusted by</p>
        </div>

        <div className="customer-list">
          <img src={Vector} alt="" />
          <img src={Shopify} alt="" />
          <img src={Amazon} alt="" />
          <img src={Google} alt="" />
          <img src={Netflix} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Customer;
