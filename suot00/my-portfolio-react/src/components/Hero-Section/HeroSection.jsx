import React from "react";
import img from "../../assets/images/avatar.png";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <section className="hero_section" id="home">
      <div className="hero-content">
        <div className="title">
          <div className="line-primary"></div>
          <h5>Jessica Strosin</h5>
        </div>

        <h2>Creative thinker Minimalism lover</h2>
        <p>
          Hi, I’m Jessica. I’m UI/UX Designer. If you are looking for Designer
          to build your brands and grow your business Let’s shake hands with me.
        </p>
        <div className="hero-btn">
          <button className="btn btn-primary">Hire Me</button>
          <button className="btn">Read More</button>
        </div>
        <div className="line-gray"></div>
        <span>I am currently open for part-time work.</span>
      </div>

      <div className="hero_img">
        <img src={img} alt="" className="img" />
      </div>
    </section>
  );
};

export default HeroSection;
