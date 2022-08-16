import React from "react";
import "./Contact.css";
import img12 from "../../assets/images/image12.png";
import img13 from "../../assets/images/image13.png";
import img14 from "../../assets/images/image14.png";
import img15 from "../../assets/images/image15.png";
const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>It’s great to always give the customer the best feed.</h2>
        <div className="contact-list">
          <div className="contact-item">
            <img src={img12} alt="" />
            <img src={img14} alt="" />
          </div>
          <div className="contact-item">
            <img src={img13} alt="" />
          </div>

          <div className="contact-item-3">
            <img src={img15} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
