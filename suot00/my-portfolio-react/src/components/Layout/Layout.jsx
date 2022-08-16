import React, { Fragment } from "react";
import "./Layout.css";
import Header from "../Header/Header";
import HeroSection from "../Hero-Section/HeroSection";
import Customer from "../Customer/Customer";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Careers from "../Careers/Careers";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Experience />
      <Contact />
      <Customer />
      <Services />
      <Careers />
      <Footer />
    </Fragment>
  );
};

export default Layout;
