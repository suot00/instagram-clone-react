import React from "react";
import "./Experience.css";
import img_experience from "../../assets/images/image11.png";
import arrowRight from "../../assets/images/arrow-right.png";
const Experience = () => {
  return (
    <section className="experience">
      <div className="title-experience">
        <h2>
          From beginning ideas to individual integrity, rich identity from the
          line
          <span> on the paper to final projects</span>
        </h2>
      </div>
      <div className="experience-container">
        <div className="experience-list">
          <img src={img_experience}></img>
        </div>
        <div className="experience-list">
          <div className="experience-item">
            <h3>Wed Design</h3>
            <p>
              Provide our customers with optimized user-friendly experience to
              increase the efficiency of digital products.
            </p>
            <span>See Works</span> <img src={arrowRight}></img>
          </div>
          <div className="experience-item">
            <h3>Branding</h3>
            <p>
              Understanding the business and their target customers, I’m the
              bridges to bring the brand closer to their clients.
            </p>
            <span>See Works</span>
            <img src={arrowRight}></img>
          </div>
          <div className="experience-item">
            <h3>Photography</h3>
            <p>
              While stock photography is a great option for sourcing
              high-quality photos, it’s important that you choose your photos
              thoughtfully.
            </p>
            <span>See Works</span>
            <img src={arrowRight}></img>
          </div>
        </div>
        <div className="experience-list">
          <div className="experience-item">
            <h3>Mobile design</h3>
            <p>
              Mobile application development is a highlight that businesses are
              interested in at the moment and in the future.
            </p>
            <span>See Works</span>
            <img src={arrowRight}></img>
          </div>
          <div className="experience-item">
            <h3>3D Modeling</h3>
            <p>
              Help you translate your existing design or concept into CAD or to
              work with you to develop the ideal design. 3D Models great for
              modern digital art
            </p>
            <span>See Works</span>
            <img src={arrowRight}></img>
          </div>
          <div className="experience-item">
            <h3>Video creating</h3>
            <p>
              Create high-impact social videos with our easy video maker. Use
              custom video templates to find the right story for your business.
            </p>
            <span>See Works</span>
            <img src={arrowRight}></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
