import React from "react";
import "./Footer.css";
import Twitter from "../../assets/images/twitter.png";
import Dribbble from "../../assets/images/dribbble.png";
import Facebook from "../../assets/images/facebook.png";
import Codepen from "../../assets/images/codepen.png";
import AtSign from "../../assets/images/at-sign.png";
import Instagram from "../../assets/images/instagram.png";
const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <h2>Contact with me</h2>
        <p>
          I’m not currently taking on new client work but feel free to contact
          me for any other inquiries.
        </p>
        <div className="footer-social">
          <img src={Twitter} alt="Twitter" />
          <img src={Dribbble} alt="Dribbble" />
          <img src={Facebook} alt="Facebook" />
          <img src={Codepen} alt="Codepen" />
          <img src={AtSign} alt="AtSign" />
          <img src={Instagram} alt="Instagram" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
