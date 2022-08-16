import React from "react";
import "./Services.css";
import bar_char from "../../assets/images/bar-chart-2.png";
import dollar_sign from "../../assets/images/dollar-sign.png";
import search from "../../assets/images/search.png";
const Services = () => {
  return (
    <section className="services">
      <div className="services-container">
        <div className="services-item">
          <div className="services-img">
            <img src={bar_char} alt="" />
          </div>
          <h2>Business planning</h2>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="services-item">
          <div className="services-img">
            <img src={dollar_sign} alt="" />
          </div>
          <h2>Financial planning</h2>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="services-item">
          <div className="services-img">
            <img src={search} alt="" />
          </div>
          <h2>Market Analytics</h2>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
